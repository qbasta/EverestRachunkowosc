/**
 * Warstwice (linie jednakowej wysokości jak na mapie topograficznej) generowane w czasie budowy.
 * Każda warstwica to zamknięta, gładka, nieregularna krzywa wokół „szczytu”; wynik jest
 * deterministyczny (bez losowości), więc build zawsze daje ten sam rysunek.
 */
export interface Ring {
  d: string;
  /** Co piąta warstwica jest „główna” – nieco grubsza i wyraźniejsza (jak na mapach). */
  major: boolean;
}

interface Options {
  cx: number;
  cy: number;
  rings: number;
  r0: number;
  dr: number;
  /** Rozciągnięcie w poziomie / pionie (domyślnie wydłużone poziomo). */
  sx?: number;
  sy?: number;
  /** Obrót całości w stopniach. */
  rot?: number;
}

const STEPS = 40; // punktów na jedną warstwicę (krzywa jest wygładzana)

export function contourRings({
  cx,
  cy,
  rings,
  r0,
  dr,
  sx = 1.55,
  sy = 1,
  rot = -18,
}: Options): Ring[] {
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const cos = Math.cos(rad(rot));
  const sin = Math.sin(rad(rot));
  const out: Ring[] = [];

  for (let k = 0; k < rings; k++) {
    const r = r0 + k * dr;
    const a1 = 0.1 + 0.015 * k;
    const a2 = 0.06;
    const a3 = 0.035;
    const p1 = 0.6 + k * 0.11;
    const p2 = 1.9 - k * 0.07;
    const p3 = 0.3 + k * 0.19;

    const pts: Array<[number, number]> = [];
    for (let i = 0; i < STEPS; i++) {
      const t = (i / STEPS) * Math.PI * 2;
      const f =
        1 + a1 * Math.sin(2 * t + p1) + a2 * Math.sin(3 * t + p2) + a3 * Math.sin(5 * t + p3);
      const x = r * f * sx * Math.cos(t);
      const y = r * f * sy * Math.sin(t);
      pts.push([cx + x * cos - y * sin, cy + x * sin + y * cos]);
    }

    // Zamknięta krzywa Catmull-Rom → krzywe Béziera (gładko, a ścieżka jest krótka).
    const n = pts.length;
    const at = (i: number) => pts[(i + n) % n] as [number, number];
    let d = `M${at(0)[0].toFixed(1)} ${at(0)[1].toFixed(1)}`;
    for (let i = 0; i < n; i++) {
      const p0 = at(i - 1);
      const p1_ = at(i);
      const p2_ = at(i + 1);
      const p3_ = at(i + 2);
      const c1 = [p1_[0] + (p2_[0] - p0[0]) / 6, p1_[1] + (p2_[1] - p0[1]) / 6];
      const c2 = [p2_[0] - (p3_[0] - p1_[0]) / 6, p2_[1] - (p3_[1] - p1_[1]) / 6];
      d += `C${c1[0]!.toFixed(1)} ${c1[1]!.toFixed(1)} ${c2[0]!.toFixed(1)} ${c2[1]!.toFixed(1)} ${p2_[0].toFixed(1)} ${p2_[1].toFixed(1)}`;
    }
    out.push({ d: `${d}Z`, major: k % 5 === 4 });
  }
  return out;
}
