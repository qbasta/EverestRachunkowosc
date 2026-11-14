// Lokalny serwer podglądu zbudowanej strony (dist/), który odtwarza zachowanie produkcji:
//  - adresy katalogów z ukośnikiem na końcu (/faq → 301 → /faq/), jak w Apache,
//  - strona 404.html dla nieistniejących adresów,
//  - nagłówki bezpieczeństwa wczytane z public/.htaccess (jedno źródło prawdy – testy sprawdzają to,
//    co trafi na hosting). HSTS pomijamy (działa tylko przez HTTPS), a z CSP usuwamy
//    upgrade-insecure-requests (na http://localhost zepsułby ładowanie plików).
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('dist');
const port = Number(process.argv[2] ?? process.env.PORT ?? 4321);

const htaccess = await readFile(resolve('public/.htaccess'), 'utf8');
const securityHeaders = {};
for (const line of htaccess.split('\n')) {
  const m = line.match(/^\s*Header\s+always\s+set\s+(\S+)\s+"((?:[^"\\]|\\.)*)"\s*$/);
  if (!m || m[1] === 'Strict-Transport-Security') continue;
  securityHeaders[m[1]] = m[2].replace(/;\s*upgrade-insecure-requests/, '');
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

const isFile = async (p) => (await stat(p).catch(() => null))?.isFile() ?? false;
const isDir = async (p) => (await stat(p).catch(() => null))?.isDirectory() ?? false;

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${port}`);
  let path = normalize(decodeURIComponent(url.pathname));
  const target = join(root, path);
  if (!target.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  let file = null;
  let status = 200;
  if (await isDir(target)) {
    if (!path.endsWith('/')) {
      res.writeHead(301, { Location: `${path}/${url.search}` }).end();
      return;
    }
    file = join(target, 'index.html');
  } else if (await isFile(target)) {
    file = target;
  }
  if (!file || !(await isFile(file))) {
    file = join(root, '404.html');
    status = 404;
  }
  try {
    const body = await readFile(file);
    res.writeHead(status, {
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      ...securityHeaders,
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(500).end();
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
