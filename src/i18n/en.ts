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
  },
  nav: {
    services: 'Services',
    info: 'Additional information',
    about: 'About us',
    contact: 'Contact us',
  },
  hero: {
    title: 'Reliable accounting for organisations and businesses',
    text: 'Professional bookkeeping, tax and payroll services for entities operating in the field of public tasks and for other businesses.',
    primary: 'Contact us',
    secondary: 'See our services',
    chartLabel: 'Illustration: a mountain ridge that is also a growth chart',
  },
  aboutPage: {
    metaTitle: 'About us | Everest – Accounting & NGO',
    metaDescription:
      'Get to know Everest accounting office: our experience serving non-governmental organisations and businesses, our team and the way we work.',
    title: 'About us',
  },
  aboutTeaser: {
    title: 'About us',
    paragraphs: [
      'Our service and our relationships with clients are built on reliability and professionalism.',
      'We have many years of experience in keeping the accounts of business entities, and we continually improve our qualifications.',
    ],
    cta: 'Meet our team',
  },
  trust: {
    title: 'Trusted by',
    label: 'Clients who trust us',
  },
  about: {
    title: 'About our office',
    paragraphs: [
      'Everest Accounting Office & NGO provides professional bookkeeping, tax and payroll services for entities operating in the field of public tasks and for other businesses. Our service and our relationships with clients are built on reliability and professionalism.',
      'We have many years of experience in keeping the accounts of business entities, and we continually improve our qualifications. We also work with other firms specialising in business consulting, tax advice, financial auditing and accounting. This allows us to offer you comprehensive financial services and to support your company in its daily work and operations.',
    ],
  },
  cooperation: {
    title: 'Cooperation',
    lead: 'Reliability and professionalism come first',
    text: 'We base our service and our cooperation with clients on reliability and professionalism. We believe that a good accountant should keep improving their qualifications, stay open to new experiences and keep deepening their knowledge. From the organisations we serve, we expect reliability and openness to cooperation based on mutual trust. We believe this is the foundation for the financial growth of your company.',
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
  info: {
    title: 'Additional information',
    software: {
      title: 'Software',
      text: 'We keep the books of account using Sage Symfonia, and we handle payroll and HR using Enova365.',
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
    members: [
      {
        key: 'dominik',
        role: 'Chief accountant, owner of the office',
        name: 'Dominik Markiewicz',
        description:
          'For many years he has worked with non-governmental organisations and commercial companies on keeping books of account. He gained experience both in the internal finance departments of non-governmental organisations and as an accountant in accounting offices. He graduated in finance and accounting from the Warsaw School of Economics (SGH), specialising in accounting, taxes and corporate finance. He holds chief accountant certificates issued by the Accountants Association in Poland (SKwP). He has completed many courses on accounting and settlements in non-governmental organisations.',
      },
      {
        key: 'julita',
        role: 'HR and payroll specialist',
        name: 'Julita Markiewicz',
        description:
          'For many years she has worked with business entities on HR and payroll settlements. She helps organisations understand current tax and social security changes and implement IT systems for payroll. She gained her experience working in accounting offices as an HR and payroll specialist. She is a graduate of the Warsaw School of Economics (SGH) in finance and accounting. She holds chief HR and payroll specialist certificates issued by the Accountants Association in Poland (SKwP).',
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
    google: 'Google profile',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has been moved.',
    back: 'Back to the home page',
  },
};
