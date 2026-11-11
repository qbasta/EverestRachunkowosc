import type { Dict } from './pl';

// TODO: terminologię księgową (np. „kadry i płace”, „główny księgowy”) warto pokazać klientowi do weryfikacji.
export const en: Dict = {
  lang: 'en',
  locale: 'en_GB',
  meta: {
    title: 'Everest – Accounting & NGO | Accounting office in Warsaw',
    description:
      'Everest Accounting Office & NGO – bookkeeping, tax and payroll services for non-governmental organisations and businesses in Warsaw, Poland.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Everest – home page',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    switchLang: 'Wersja polska',
    pause: 'Pause animation',
    play: 'Play animation',
    expandSubmenu: 'Expand submenu',
  },
  nav: {
    about: 'About the office',
    cooperation: 'Cooperation',
    team: 'Our team',
    offer: 'Offer',
    services: 'Services',
    software: 'Software',
    faq: 'Frequently asked questions (FAQ)',
    pricing: 'Pricing',
    contact: 'Contact us',
    langName: 'Polski',
  },
  hero: {
    title: 'Reliable accounting for NGOs and business',
    text: 'At Everest Accounting Office & NGO we combine knowledge and experience in accounting, taxes, payroll and HR. We rely on partnership and an individual approach to every client.',
    primary: 'Contact us',
    secondary: 'See our services',
    chartLabel: 'Illustration: a mountain ridge that is also a growth chart',
  },
  pageSoon: 'The content of this page is being prepared.',
  teamPage: {
    metaTitle: 'Our team | Everest – Accounting & NGO',
    metaDescription:
      'Meet the team of Everest accounting office: bookkeeping, payroll and IT support.',
    title: 'Our team',
  },
  faqPage: {
    metaTitle: 'Frequently asked questions | Everest – Accounting & NGO',
    metaDescription:
      'Answers to the most common questions about accounting for non-governmental organisations and businesses, grant accounting and how we work with clients.',
    title: 'Frequently asked questions',
  },
  quotePage: {
    metaTitle: 'Request a quote | Everest – Accounting & NGO',
    metaDescription:
      'Fill in a short form and we will prepare a preliminary quote for bookkeeping and payroll services for your organisation or business.',
    title: 'Request a quote',
  },
  trust: {
    title: 'Trusted by',
    label: 'Clients who trust us',
  },
  about: {
    title: 'About our office',
    paragraphs: [
      'Everest Accounting Office & NGO provides bookkeeping, tax and payroll services to entities operating in the field of public tasks and to businesses.',
      'We specialise in serving small and medium-sized entities at every stage of their development. We support new organisations from the moment they are founded, helping them through the formalities of starting their activity. We also work with established organisations, offering continuous, comprehensive management of their finances. This lets our clients focus on achieving their goals, confident that their accounting and payroll matters are in good hands.',
      'We have many years of experience keeping the books of, among others, foundations, associations and companies. We also keep improving our qualifications by taking part in courses and training. We believe a good accountant should have an open mind and be ready for continuous development and improvement of their skills.',
      'In our relationships with clients we rely on professionalism, an individual approach and mutual trust.',
    ],
    linkedin: 'Our LinkedIn profile',
    map: 'See our location on Google Maps',
    teamCta: 'Meet our team',
  },
  cooperation: {
    title: 'What sets our cooperation apart?',
    items: [
      {
        key: 'punctuality',
        title: 'Punctuality and reliability',
        text: 'The foundation of our work is keeping accounts correctly and meeting tax and social-insurance deadlines on time.',
      },
      {
        key: 'regulations',
        title: 'We keep our finger on the pulse',
        text: 'We continuously monitor changes in regulations and keep our clients informed, so they are ready for them.',
      },
      {
        key: 'remote',
        title: 'Convenient remote cooperation',
        text: 'We serve entities from all over Poland, and thanks to dedicated tools we give you convenient access to your accounting documents from anywhere.',
      },
      {
        key: 'advice',
        title: 'Advice and ongoing support',
        text: 'We not only help solve our clients’ day-to-day problems, but also support decisions that shape the long-term development and operation of the organisation.',
      },
      {
        key: 'control',
        title: 'Full control over your finances',
        text: 'Every month we send clients up-to-date financial statements and a summary of expenses in individual projects, so they can keep track of their financial situation.',
      },
      {
        key: 'flexibility',
        title: 'Flexibility',
        text: 'We are open to different solutions and adapt the terms of cooperation to the needs and specifics of each entity.',
      },
    ],
  },
  services: {
    title: 'We offer the following services',
    groups: [
      {
        title: 'Accounting and taxes',
        items: [
          'Ongoing bookkeeping services and preparation of monthly, quarterly and annual tax returns.',
          'A monthly summary of the entity’s financial situation, delivered as accounting data and statements together with financial analysis.',
          'Help in catching up on arrears in the books of account.',
          'Analysis of the financial situation and accounting data to draw up recovery plans for the organisation’s accounting system.',
        ],
      },
      {
        title: 'HR and payroll',
        items: [
          'HR and payroll services, including payroll calculation, issuing invoices for civil-law contracts, registering contracts, settling social security (ZUS) returns and handling employee capital plans (PPK).',
          'Preparing leave summaries and issuing employment documents – employment contracts, civil-law contracts, employment certificates and similar.',
        ],
      },
      {
        title: 'Reporting, audit and advice',
        items: [
          'Advice on day-to-day operations, the organisation of accounting and the flow of financial documents.',
          'Ongoing support for organisations in matters of accounting, taxes and payroll.',
          'Preparing the organisation’s financial statements.',
          'Help in preparing annual narrative reports on activities.',
          'Help in preparing the accounting policy.',
          'Cooperation on audits of the financial statements of business entities.',
        ],
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    cta: 'Request a quote',
  },
  faq: {
    title: 'Got a question? Check our FAQ',
    cta: 'See all questions',
  },
  info: {
    title: 'Additional information',
    software: {
      title: 'Software',
      text: 'We use the following software:',
      items: [
        {
          key: 'symfonia',
          role: 'Books of account',
          description: 'A finance and accounting system (formerly Sage Symfonia).',
        },
        {
          key: 'enova',
          role: 'HR and payroll',
          description: 'An ERP system with an HR and payroll module.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      text: 'When setting prices we take the following factors into account:',
      items: [
        'The nature of the organisation – scope of activity and tax status',
        'The number of accounting documents',
        'The number of employees',
        'The scope of the duties entrusted to us',
      ],
    },
  },
  team: {
    title: 'Our team',
    more: 'Read more',
    less: 'Show less',
    linkedin: 'LinkedIn profile',
    members: [
      {
        key: 'dominik',
        role: 'Chief accountant',
        name: 'Dominik Markiewicz',
        description: [
          'For many years he has worked with non-governmental organisations and commercial companies on keeping books of account. He gained experience both in the internal finance departments of non-governmental organisations and as an accountant in accounting offices.',
          'He graduated in finance and accounting from the Warsaw School of Economics (SGH), specialising in accounting, taxes and corporate finance.',
          'He holds chief accountant certificates issued by the Accountants Association in Poland (SKwP). He has completed many courses on accounting and settlements in non-governmental organisations.',
        ],
      },
      {
        key: 'julita',
        role: 'HR and payroll specialist',
        name: 'Julita Markiewicz',
        description: [
          'For many years she has worked with business entities on HR and payroll settlements. She helps organisations understand current tax and social security changes and implement IT systems for payroll.',
          'She gained her experience working in accounting offices as an HR and payroll specialist. She is a graduate of the Warsaw School of Economics (SGH) in finance and accounting.',
          'She holds chief HR and payroll specialist certificates issued by the Accountants Association in Poland (SKwP).',
        ],
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    intro: 'Tell us briefly how we can help. We will reply as soon as we can.',
    callUs: 'Or call us on',
    labels: {
      email: 'Your email',
      name: 'Full name',
      phone: 'Phone number (optional)',
      message: 'Your message',
    },
    consent:
      'I consent to the processing of my personal data in order to reply to my enquiry. The data controller is [COMPANY NAME – to be completed].',
    map: {
      label: 'Map showing the office location',
      show: 'Show map',
      notice: 'Clicking loads a map from Google Maps, which may store data about your device.',
      open: 'Open in Google Maps',
      iframeTitle: 'Google map showing the location of the Everest office',
    },
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Your message has been sent. We will reply as soon as we can.',
    error:
      'Your message could not be sent. Please try again or call the number shown next to the form.',
    errors: {
      required: 'Please fill in this field.',
      email: 'Enter a valid email address.',
      phone: 'Enter a valid phone number.',
      consent: 'Consent is required to send the message.',
    },
  },
  footer: {
    phone: 'Phone',
    address: 'Address',
    email: 'Email',
    social: 'Social media',
    rights: 'All rights reserved',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    google: 'Location on Google Maps',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has been moved.',
    back: 'Back to the home page',
  },
};
