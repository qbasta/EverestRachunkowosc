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
    paragraphs: [
      'At Everest Accounting Office & NGO we combine knowledge and experience in accounting, taxes, payroll and HR',
      'We rely on partnership and an individual approach to every client',
    ],
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
    intro:
      'Fill in a short form to give us the most important information about your organisation. It will only take you a few minutes. Based on the data you provide, we will prepare a preliminary quote and send you our offer within 2 working days.',
    consultation:
      'For interested clients we also offer a free consultation, during which we will discuss your organisation’s needs in detail and present solutions tailored to its specifics. We offer flexible meeting formats – you are welcome at our office in central Warsaw or for an online consultation.',
    consultationCta: 'Book a consultation',
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
        title: 'Bookkeeping',
        items: [
          'Ongoing bookkeeping services',
          'Ongoing clarification of missing documents',
          'Preparing, settling and filing tax returns: VAT, CIT, PIT, PCC',
          'Support with KSeF, including issuing invoices',
          'Preparing an accounting policy',
          'Advice on day-to-day operations, the organisation of accounting and the flow of financial documents',
          'Support in dealings with the tax office and active participation in inspections',
          'Help in clarifying tax and social-insurance arrears',
        ],
      },
      {
        title: 'Financial and project reporting and audit',
        items: [
          'Preparing annual financial statements',
          'Help in preparing narrative reports, including those for GUS and NIW',
          'Analysing the current financial situation',
          'Reconciling project accounts with reports and internal documents',
          'Making substantive reclassification entries',
          'Cooperating with the auditor when auditing financial statements and specific projects',
          'Preparing the documentation required for audits',
        ],
      },
      {
        title: 'Payroll and HR',
        items: [
          'Payroll and HR services: calculating payrolls and issuing bills for civil-law contracts',
          'Preparing registration and settlement declarations for ZUS',
          'PPK (employee capital plans) administration',
          'Keeping personnel files',
          'Preparing leave summaries',
          'Issuing employment-related documents, including employment certificates and earnings statements',
          'Preparing PFRON declarations',
          'Preparing PIT-4R, PIT-8AR, PIT-11 and IFT-1R returns',
          'Support in dealings with ZUS and the tax office, and participation in inspections',
        ],
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    paragraphs: [
      'Every organisation and business has different needs and its own specifics, so we price our services individually. Among other things, we take into account the monthly number and type of accounting documents, the employment structure (employment contracts, civil-law contracts), the tax status and the nature of the activity. We also consider the current state of the books, including any arrears in bookkeeping and settlements that need to be completed or put in order.',
      'Besides ongoing bookkeeping and payroll services, the agreement may also cover additional services, such as preparing financial statements for previous years or help in drawing up an accounting policy.',
    ],
    priceList: {
      title: 'Price list',
      intro: 'Below are indicative prices of selected services:',
      items: [
        { label: 'Bookkeeping', price: 'From PLN 400 net / month' },
        { label: 'Civil-law contracts administration', price: 'From PLN 30 net / contract' },
        { label: 'Additional services related to the activity', price: 'From PLN 150 net / hour' },
        { label: 'Payroll for employment contracts', price: 'From PLN 110 / person / month' },
      ],
    },
    closing:
      'Want to know the cost of services tailored to your organisation or business? Use our quote form or book a free consultation!',
    cta: 'Request a quote',
    ctaConsult: 'Book a free consultation',
  },
  quoteForm: {
    stepLabel: 'Step',
    stepOf: 'of',
    steps: [
      'Organisation',
      'Documents and staff',
      'Organisation status',
      'Additional information',
      'Summary',
    ],
    optionalHint:
      'All fields except the consent are optional, but the more details you give, the more accurate the quote will be.',
    next: 'Next',
    back: 'Back',
    edit: 'Edit',
    submit: 'Send quote request',
    summaryTitle: 'Check your details before sending',
    empty: 'Not provided',
    sending: 'Sending…',
    success:
      'Thank you! Your request has been sent. We will send you a quote within 2 working days.',
    error: 'We could not send your request. Please try again or call us.',
    yes: 'Yes',
    no: 'No',
    org: {
      firstName: 'First name',
      lastName: 'Last name',
      orgName: 'Organisation name',
      nip: 'Tax ID (NIP)',
      email: 'Contact e-mail address',
      phone: 'Phone (optional)',
    },
    docs: {
      title: 'Approximate number of accounting documents per month',
      hint: 'Enter numbers. Payroll lists follow from the number of employees, so you do not need to count them.',
      invoices: 'Invoices (number)',
      statements: 'Bank statements (number of PDF pages)',
      receipts: 'Receipts (number)',
      other: 'Other documents (number)',
    },
    staff: {
      title: 'Number of people employed',
      employees: 'Employees on employment contracts',
      civil: 'People on civil-law contracts',
      appointments: 'Appointments (e.g. board members)',
    },
    status: {
      vat: 'Is the organisation a VAT payer?',
      activities: 'What types of activity does the organisation carry out? (tick all that apply)',
      activityFree: 'Statutory, free of charge',
      activityPaid: 'Statutory, paid',
      activityBusiness: 'Business activity',
      opp: 'Does the organisation have public benefit organisation (OPP) status?',
      current: 'Are the organisation’s accounts up to date?',
      currentYes: 'Yes, there are no arrears',
      currentNo: 'No, there are arrears',
      currentNa: 'Not applicable – the organisation has not had its books kept so far',
    },
    more: {
      info: 'Other relevant information about the organisation',
      extra:
        'Is the organisation interested in additional services, e.g. preparing an accounting policy? Describe what you need',
      consent:
        'I consent to the processing of my personal data in order to prepare a quote. The data controller is [COMPANY NAME – to be completed].',
    },
    errors: {
      consent: 'Consent is required to send the request.',
      email: 'Enter a valid e-mail address.',
      number: 'Enter a whole number, e.g. 0 or 12.',
    },
  },
  faq: {
    title: 'Got a question? Check our FAQ',
    cta: 'See all questions',
  },
  software: {
    title: 'Software',
    text: 'We use proven accounting and payroll programs that are kept up to date with changes in regulations. We also use a dedicated tool for transferring documents remotely, accessible only to authorised persons. The proper functioning of our IT infrastructure is looked after by an IT specialist with broad experience in supporting accounting offices.',
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
