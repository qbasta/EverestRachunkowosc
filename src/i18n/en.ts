import type { Dict } from './pl';

// TODO: terminologię księgową (np. „kadry i płace”, „główny księgowy”) warto pokazać klientowi do weryfikacji.
export const en: Dict = {
  lang: 'en',
  locale: 'en_GB',
  meta: {
    title: 'Everest Biuro Rachunkowe & NGO | Accounting, payroll and tax services in Warsaw',
    description:
      'Everest Biuro Rachunkowe & NGO – bookkeeping, tax and payroll services for non-governmental organisations and businesses in Warsaw, Poland.',
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
      'At Everest Biuro Rachunkowe & NGO we combine knowledge and experience in accounting, taxes, payroll and HR',
      'We rely on partnership and an individual approach to every client',
    ],
    primary: 'Contact us',
    secondary: 'See our services',
    chartLabel: 'Illustration: a mountain ridge that is also a growth chart',
  },
  pageSoon: 'The content of this page is being prepared.',
  teamPage: {
    metaTitle: 'Our team | Everest Biuro Rachunkowe & NGO',
    metaDescription:
      'Meet the team of Everest accounting office: bookkeeping, payroll and IT support.',
    title: 'Our team',
  },
  faqPage: {
    metaTitle: 'Frequently asked questions | Everest Biuro Rachunkowe & NGO',
    metaDescription:
      'Answers to the most common questions about accounting for non-governmental organisations and businesses, grant accounting and how we work with clients.',
    title: 'Frequently asked questions',
    // TODO(klient): confirm the intro.
    intro:
      'Here are the answers to the questions we hear most often from clients. Cannot find yours? Write or call us – we are happy to help.',
    searchLabel: 'Search questions and answers',
    searchPlaceholder: 'Type a keyword, e.g. grants',
    categoriesLabel: 'Categories',
    all: 'All',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    resultsCount: 'Questions shown: {n}',
    noResults: 'We could not find any questions matching “{q}”. Try another word or contact us.',
    clearSearch: 'Clear search',
    closing: {
      title: 'Did not find your answer?',
      text: 'Write or call us – we will answer your questions.',
      cta: 'Contact us',
      ctaQuote: 'Request a quote',
    },
    categories: [
      { key: 'cooperation', label: 'Cooperation' },
      { key: 'grants', label: 'Grants and funding' },
      { key: 'scope', label: 'Scope of services' },
      { key: 'pricing', label: 'Settlements and pricing' },
    ],
    items: [
      {
        id: 'ksiegowosc-fundacji-i-stowarzyszen',
        category: 'scope',
        q: 'Do you keep the books of foundations and associations?',
        a: [
          'Yes. We specialise in accounting for non-governmental organisations – they currently make up about 90% of our clients. We work with smaller and larger organisations, with different funding structures and scopes of activity. We serve entities that carry out free-of-charge, paid and business activities.',
        ],
      },
      {
        id: 'formy-ksiegowosci',
        category: 'scope',
        q: 'What forms of accounting does your office handle?',
        a: [
          'The office provides accounting services in the form of full accounting books kept in accordance with the Accounting Act. We do not handle simplified forms – the tax revenue and expense ledger or the simplified record of revenue and costs.',
        ],
      },
      {
        id: 'doswiadczenie-w-rozliczaniu-dotacji',
        category: 'grants',
        q: 'Do you have experience in accounting for subsidies and grants?',
        a: [
          'Yes. We have experience in the accounting of subsidies and grants from various sources, including public funds, European Union funds, the EEA, international cooperation programmes and private sources.',
          'We are responsible for the correct accounting recognition of the funding received, in line with the Accounting Act, tax regulations and the organisation’s adopted accounting policy.',
        ],
      },
      {
        id: 'wspolpraca-przy-rozliczaniu-dotacji',
        category: 'grants',
        q: 'How does cooperation on grant accounting work?',
        a: [
          'After the funding agreement is signed, we ask for the project budget. On that basis we prepare a suitable structure of accounts that allows expenses to be recorded and monitored correctly. Documents are booked on the basis of materials described by the client in terms of their substance. The description should in particular include approval of the expense by an authorised person, an indication of the type of activity the expense relates to, and the source of its funding.',
          'Worth remembering: we are responsible for the accounting side of the grant settlement. The organisation is responsible for assigning expenses to the project on the substantive side and for preparing and settling the project with the grantor.',
        ],
      },
      {
        id: 'zmiany-we-wczesniejszych-okresach',
        category: 'grants',
        q: 'Is it possible to make changes in earlier periods of a given year?',
        a: [
          'During the project it is also possible to make changes to the accounting records, including reclassifying entries between budget items or projects, if necessary.',
          'Before the final settlement of funding or the closing of the financial year, we give the client a summary of accounting entries relating to the grants being implemented. This makes it possible to verify that the accounting records match the reports submitted to grantors.',
        ],
      },
      {
        id: 'ubezpieczenie-oc',
        category: 'cooperation',
        q: 'Do you have civil liability (OC) insurance?',
        a: [
          'Yes. We hold the mandatory civil liability (OC) insurance, as well as additional insurance covering VAT settlements, payroll and social security (ZUS) settlements, personal data protection (GDPR) and cybersecurity.',
        ],
      },
      {
        id: 'polityka-rachunkowosci',
        category: 'scope',
        q: 'Do you help prepare an organisation’s accounting policy?',
        a: [
          'Yes. We support organisations in drawing up and adapting their accounting policy (principles) to their individual needs.',
          'We prepare each policy individually, in consultation with the Management Board and taking into account the specifics of the organisation’s activities, its sources of funding and its current needs.',
        ],
      },
      {
        id: 'doradztwo-podatkowe',
        category: 'scope',
        q: 'Do you provide tax advisory services?',
        a: [
          'We do not currently provide tax advisory services. However, as part of our work we offer ongoing support related to the organisation’s accounting.',
        ],
      },
      {
        id: 'wspolpraca-z-bieglymi-rewidentami',
        category: 'cooperation',
        q: 'Do you cooperate with statutory auditors during audits and the audit of financial statements?',
        a: [
          'Yes. We cooperate with statutory auditors on project audits and on the audit of organisations’ financial statements. The scope and rules of cooperation are agreed individually with the client and adapted to the organisation’s needs and the nature of the audit.',
        ],
      },
      {
        id: 'umowy-z-pracownikami-i-kontrahentami',
        category: 'scope',
        q: 'Do you prepare contracts with employees and contractors and supervise how they are concluded?',
        a: [
          'We do not prepare contracts with employees or contractors, because drafting them and supervising the process of concluding them fall within legal and administrative services.',
          'As part of our accounting services we do, however, provide templates of the documents needed for correct settlements, including tax and contribution declarations, templates of bills for civil-law contracts and other documents related to concluding contracts.',
        ],
      },
      {
        id: 'miesiace-bez-dokumentow',
        category: 'pricing',
        q: 'How does settlement with the office work in months when the organisation has no accounting documents?',
        a: [
          'The basic accounting fee covers the document limit set in the agreement and also applies in months when the organisation submits no documents for booking. In our experience, however, such situations are very rare. The fee covers not only the day-to-day booking of documents but also constant readiness to cooperate, support in accounting matters and ongoing consultations – regardless of the number of documents in a given month.',
        ],
      },
    ],
  },
  quotePage: {
    metaTitle: 'Request a quote | Everest Biuro Rachunkowe & NGO',
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
      'Everest Biuro Rachunkowe & NGO provides bookkeeping, tax and payroll services to entities operating in the field of public tasks and to businesses.',
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
          'Support with KSeF (the National e-Invoicing System), including issuing invoices',
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
          'Help in preparing narrative reports, including those for Statistics Poland (GUS) and the National Freedom Institute (NIW)',
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
          'Preparing registration and settlement declarations for the Social Insurance Institution (ZUS)',
          'PPK (employee capital plans) administration',
          'Keeping personnel files',
          'Preparing leave summaries',
          'Issuing employment-related documents, including employment certificates and earnings statements',
          'Preparing declarations for the State Fund for Rehabilitation of Disabled Persons (PFRON)',
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
    cta: 'More questions?',
    more: 'Full answer',
    prev: 'Previous question',
    next: 'Next question',
    slide: 'Question {n} of {total}',
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
      {
        key: 'marek',
        role: 'IT specialist and software developer',
        name: 'Marek Kropiewnicki',
        description: [
          'IT specialist and software developer with several decades of experience. He has an economics education but has always worked in IT. For many years he has run his own business. He has gained experience in various areas of IT as:',
          [
            'Computer hardware and software service technician',
            'Installer and administrator of local computer networks',
            'Installer and administrator of e-mail servers',
            'Designer and developer of financial, accounting and payroll software',
            'Implementation specialist for payroll software, both his own and from other vendors',
          ],
          'For years he has specialised in managing the IT infrastructure of accounting offices. He earned a Google certificate for completing the “AI Skills for Tomorrow” training. He supports the office with entering data into the financial and accounting system.',
        ],
      },
      {
        key: 'krzysztof',
        role: 'Payroll and HR settlements specialist',
        name: 'Krzysztof Kuśmierowski',
        description: [
          'Labour law, accounting and taxes have been his way of life and passion for over 20 years.',
          'He is a graduate of the University of Łódź in Finance and Banking and in Tax Law and Accounting, as well as of the postgraduate studies in Transfer Pricing and Tax Management at the Warsaw School of Economics (SGH). He has completed numerous courses in accounting, taxes and payroll organised by the Accountants Association in Poland (SKwP) and the Academy of Labour Law and Accounting CEDOZ in Warsaw.',
          'In his professional work to date he has handled both bookkeeping and payroll and HR services for entities with Polish and foreign capital.',
          'In his private life he is a travel enthusiast and a big volleyball fan.',
        ],
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    intro: 'Call, write or visit us at the office. We are happy to answer your questions.',
    hours: {
      title: 'Opening hours',
      rows: [
        { days: 'Monday – Thursday', time: '9:00 – 17:00' },
        { days: 'Friday', time: '9:00 – 15:00' },
      ],
    },
    quote: {
      text: 'Want to know what our services cost? Fill in a short quote form.',
      cta: 'Request a quote',
    },
    map: {
      label: 'Map showing the office location',
      show: 'Show map',
      notice: 'Clicking loads a map from Google Maps, which may store data about your device.',
      open: 'Open in Google Maps',
      iframeTitle: 'Google map showing the location of the Everest office',
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
