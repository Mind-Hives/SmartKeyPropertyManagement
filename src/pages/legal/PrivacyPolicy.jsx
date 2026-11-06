import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SEO from "@/components/seo/SEO";

const effectiveDate = "October 1, 2025";

const privacyIntroduction =
  'This Privacy Policy describes how Smart Key Property Management ("we," "us," or "our") collects, uses, processes, and discloses your information in connection with your access to and use of the www.smartkeypropertymanagement.com website and services (collectively, the "Services"). We are committed to protecting your privacy and handling your personal data in an open and transparent manner.';

const privacySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "This Privacy Policy applies to all users of our Services. By accessing or using our Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. ",
      "If you do not agree with the terms of this policy, please do not access or use our Services.",
    ],
  },
  {
    id: "information",
    title: "2. Information We Collect",
    content: [
      "We collect various types of information to provide and improve our Services to you.",
    ],
  },
  {
    id: "personal information",
    title: "2.1. Personal Information: ",
    content: [
      "This includes information that can be used to identify you directly or indirectly.",
      "- Contact Information: Name, email address, phone number, postal address.",
      "- Account Information: Username, password, profile picture.",
      "- Financial Information: Payment details (processed by third-party payment processors; we do not store sensitive financial data directly), billing address",
      "- Property Information: Details related to properties you list, search for, or manage through our platform, including addresses, descriptions, images, and rental/sale prices.",
      "- Communication Information: Content of messages, emails, or other communications with us or other users through our platform.",
      "- Identity Verification Information: Government-issued identification documents (e.g., SSN, DL, Passport) if required for specific services or legal compliance.",
    ],
  },
  {
    id: "usage data",
    title: "2.2. Usage Data: ",
    content: [
      "This includes information about how you access and use our Services.",
      "- Log Data: IP address, browser type, operating system, referring/exit pages, dates and times of access, pages viewed, and time spent on pages.",
      "- Device Information: Device type, unique device identifiers, mobile network information.",
      "- Location Information: General location derived from your IP address or precise location if you permit us through your device settings",
    ],
  },
  {
    id: "cookies and tracking technologies",
    title: "2.3. Cookies and Tracking Technologies: ",
    content: [
      "We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Please refer to our Cookie Policy section below for more details.",
    ],
  },
  {
    id: "usage",
    title: "3. How We Use Your Information",
    content: [
      "We use the collected information for various purposes, including:",
    ],
  },
  {
    id: "provide and maintain ",
    title: "3.1. To Provide and Maintain Our Services: ",
    content: [
      "- To operate, maintain, and improve our website and services.",
      "- To facilitate property searches and management.",
      "- To process transactions and send related notifications.",
      "- To provide customer support and respond to inquiries.",
    ],
  },
  {
    id: "experience",
    title: "3.2. To Personalize Your Experience: ",
    content: [
      "- To tailor content, property recommendations, and advertisements based on your preferences and usage patterns.",
      "- To remember your settings and preferences.",
    ],
  },
  {
    id: "communication",
    title: "3.3. For Communication: ",
    content: [
      "- To send you service-related announcements, updates, and administrative messages.",
      "- To send promotional and marketing communications (you can opt out at any time).",
    ],
  },
  {
    id: "analytics",
    title: "3.4. For Analytics and Improvement: ",
    content: [
      "- To monitor and analyze usage and activity trends to improve the functionality and user experience of our Services.",
      "- To conduct research and development to enhance our offerings.",
    ],
  },
  {
    id: "security",
    title: "3.5. For Security and Legal Compliance: ",
    content: [
      "- To detect, prevent, and address technical issues, fraud, and security incidents.",
      "- To comply with applicable laws, regulations, and legal processes, including responding to lawful requests from public authorities.",
      "- To enforce our Terms and Conditions and other policies.",
    ],
  },
  {
    id: "business",
    title: "3.6. For Business Operations: ",
    content: [
      "- To facilitate internal business operations, including auditing, data analysis, and record-keeping.",
      "- To perform due diligence in the event of a merger, acquisition, or asset sale.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookie Policy",
    content: [""],
  },
  {
    id: "cookies",
    title: "4.1. What are Cookies? ",
    content: [
      "Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.",
    ],
  },
  {
    id: "cookies",
    title: "4.2. How We Use Cookies: ",
    content: [
      "We use cookies for several purposes:",
      "- Essential Cookies: Necessary for the website to function properly, enabling core functionalities like security, network management, and accessibility.",
      "- Performance Cookies: Collect information about how you use our website, such as which pages you visit most often, to improve website performance.",
      "- Functionality Cookies: Allow our website to remember choices you make (like your username, language, or region) and provide enhanced, more personal features.",
      "- Advertising/Targeting Cookies: Used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.",
    ],
  },
  {
    id: "cookies",
    title: "- 4.3. Your Choices Regarding Cookies:  ",
    content: [
      "You have the right to decide whether to accept or reject cookies. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of our Services may become inaccessible or not function properly.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    content: [
      "We may share your information with third parties in the following circumstances: ",
    ],
  },
  {
    id: "sharing",
    title: "5.1. With Service Providers: ",
    content: [
      "We engage third-party companies and individuals to facilitate our Services, provide services on our behalf, perform Service- related services, or assist us in analyzing how our Services are used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
    ],
  },
  {
    id: "sharing",
    title: "5.2. With Other Users: ",
    content: [
      "When you use certain features of our Services (e.g., sending a message), some of your information (e.g., name, property details, contact information) may be visible to other users.",
    ],
  },
  {
    id: "sharing",
    title: "5.3. For Business Transfers: ",
    content: [
      "In the event of a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may be transferred as part of that transaction.",
    ],
  },
  {
    id: "sharing",
    title: "5.4. For Legal Reasons: ",
    content: [
      "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency). This includes complying with legal obligations, protecting our rights or property, preventing fraud, or ensuring the safety of our users or the public.",
    ],
  },
  {
    id: "sharing",
    title: "5.5. With Your Consent: ",
    content: [
      "We may share your information with third parties when we have your explicit consent to do so.",
    ],
  },
  {
    id: "data security",
    title: "6. Data Security",
    content: [
      "We implement reasonable security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include technical, administrative, and physical safeguards. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content: [
      "Depending on your jurisdiction, you may have the following rights regarding your personal data: ",
    ],
  },
  {
    id: "rights",
    title: "7.1. Right to Access: ",
    content: [
      "You have the right to request copies of your personal data held by us.",
    ],
  },
  {
    id: "rights",
    title: "7.2. Right to Rectification: ",
    content: [
      "You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
    ],
  },
  {
    id: "rights",
    title: "7.3. Right to Erasure: ",
    content: [
      "You have the right to request that we erase your personal data, under certain conditions.",
    ],
  },
  {
    id: "rights",
    title: "7.4. Right to Object to Processing: ",
    content: [
      "You have the right to object to our processing of your personal data, under certain conditions.",
    ],
  },
  {
    id: "rights",
    title: "7.5. Right to Data Portability: ",
    content: [
      "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
    ],
  },
  {
    id: "rights",
    title: "7.6. Right to Withdraw Consent: ",
    content: [
      "Where we rely on your consent to process your personal data, you have the right to withdraw that consent at any time. To exercise any of these rights, please contact us using the details provided in the Contact Us section.",
    ],
  },
  {
    id: "third party",
    title: "8. Third-Party Links",
    content: [
      "Our Services may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    ],
  },
  {
    id: "children privacy",
    title: "9. Children's Privacy",
    content: [
      "Our Services are not intended for individuals under the age of 16+. We do not knowingly collect personally identifiable information from anyone under this age. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, don't hesitate to get in touch with us. If we become aware that we have collected Personal Information from children without verification of parental consent, we take steps to remove that information from our servers.",
    ],
  },
  {
    id: "privacy policy",
    title: "10. Changes to This Privacy Policy",
    content: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Effective Date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
];

const disclaimerSections = [
  {
    id: "disclaimer-accuracy",
    title: "1. Accuracy of Information",
    content: (
      <p>
        We strive to ensure that the information presented on our Service,
        including property listings, descriptions, and related content, is
        accurate and up-to-date. However, we do not warrant the accuracy,
        completeness, or reliability of any information provided by users or
        third parties. Property details, availability, prices, and other
        specifications are subject to change without notice. Users are strongly
        advised to verify all information independently before making any
        decisions or entering into any agreements.
      </p>
    ),
  },
  {
    id: "no-professional-advice",
    title: "2. No Professional Advice",
    content: (
      <p>
        The information provided on the Service is not intended as, and should
        not be understood or construed as, professional advice. It is not a
        substitute for professional legal, financial, real estate, or other
        advice. Before making any decisions or taking any actions based on the
        information on the Service, we encourage you to consult with appropriate
        professionals. Your reliance on any information appearing on the Service
        is solely at your own risk.
      </p>
    ),
  },
  {
    id: "disclaimer-third-party-links",
    title: "3. Third-Party Links",
    content: (
      <p>
        The Service may contain links to other websites or content belonging to
        or originating from third parties or links to websites and features in
        banners or other advertising. Such external links are not investigated,
        monitored, or checked for accuracy, adequacy, validity, reliability,
        availability, or completeness by us. We do not warrant, endorse,
        guarantee, or assume responsibility for the accuracy or reliability of
        any information offered by third-party websites linked through the
        Service or any website or feature linked in any banner or other
        advertising. We will not be a party to or in any way be responsible for
        monitoring any transaction between you and third-party providers of
        products or services.
      </p>
    ),
  },
  {
    id: "disclaimer-limitation-liability",
    title: "4. Limitation of Liability",
    content: (
      <>
        <p>
          Under no circumstances shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the Service
          or reliance on any information provided on the Service. Your use of
          the Service and your reliance on any information on the Service is
          solely at your own risk.
        </p>
        <p>
          We shall not be liable for any direct, indirect, incidental,
          consequential, special, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible
          losses, resulting from:
        </p>
        <ul>
          <li>
            Your access to or use of or inability to access or use the Service.
          </li>
          <li>Any conduct or content of any third party on the Service.</li>
          <li>Any content obtained from the Service.</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or
            content, whether based on warranty, contract, tort (including
            negligence), or any other legal theory, whether or not we have been
            informed of the possibility of such damage.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "external-content",
    title: "5. External Content",
    content: (
      <p>
        The Service may include content from external sources, including
        user-generated content, advertisements, and links to third-party
        articles or resources. Any views or opinions expressed in such external
        content are solely those of the authors and do not necessarily reflect
        the official policy or position of SmartKey Property Management. We do
        not endorse or take responsibility for the accuracy or completeness of
        such content.
      </p>
    ),
  },
  {
    id: "changes-to-disclaimer",
    title: "6. Changes to Disclaimer",
    content: (
      <p>
        We reserve the right to amend this disclaimer at any time without prior
        notice. Any changes will be posted on this page, and your continued use
        of the Service after such changes constitutes your acceptance of the
        revised disclaimer. You are advised to review this Disclaimer
        periodically for any changes.
      </p>
    ),
  },
  {
    id: "disclaimer-contact",
    title: "7. Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this Disclaimer, please contact us:
        </p>
        <p>
          <strong>By email:</strong>{" "}
          <a href="mailto:info@smartkeypropertymanagement.com">
            info@smartkeypropertymanagement.com
          </a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://smartkeypropertymanagement.com">
            smartkeypropertymanagement.com
          </a>
        </p>
      </>
    ),
  },
];


const createAnchorId = (documentId, sectionTitle) => {
  const sectionSlug = sectionTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${documentId}-${sectionSlug}`;
};

const renderSectionContent = (content) => {
  if (Array.isArray(content)) {
    return content.map((item, index) => (
      <p key={index}>
        {item.startsWith("- ") ? `• ${item.slice(2)}` : item}
      </p>
    ));
  }

  return content;
};

const LegalPageContent = ({ documents, contactTitle, contactText }) => (
  <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        {/* Mobile table of contents */}
        <details className="rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] lg:hidden">
          <summary className="cursor-pointer list-none text-base font-semibold text-[#07172a]">
            On This Page <span className="float-right text-[#416184]">+</span>
          </summary>
          <nav aria-label="Page contents" className="mt-4 space-y-4">
            {documents.map((document) => (
              <div key={document.id}>
                <a href={`#${document.id}`} className="mb-2 block font-semibold text-[#07172a] hover:text-[#416184]">
                  {document.title}
                </a>
                <ul className="space-y-1 border-l border-[#e7edf3] pl-3">
                  {document.sections.map((section) => {
                    const anchorId = createAnchorId(document.id, section.title);
                    return (
                      <li key={anchorId}>
                        <a href={`#${anchorId}`} className="block py-1 text-sm leading-5 text-[#416184] transition hover:text-[#07172a]">
                          {section.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </details>

        {/* Desktop table of contents */}
        <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] lg:block xl:p-6">
          <h2 className="mb-5 text-lg font-semibold text-[#07172a]">On This Page</h2>
          <nav aria-label="Page contents" className="space-y-5">
            {documents.map((document) => (
              <div key={document.id}>
                <a href={`#${document.id}`} className="mb-2 block text-sm font-bold text-[#07172a] transition hover:text-[#416184]">
                  {document.title}
                </a>
                <ul className="space-y-1 border-l border-[#e7edf3] pl-3">
                  {document.sections.map((section) => {
                    const anchorId = createAnchorId(document.id, section.title);
                    return (
                      <li key={anchorId}>
                        <a href={`#${anchorId}`} className="block rounded-md px-2 py-1.5 text-xs leading-5 text-[#416184] transition hover:bg-[#f0faff] hover:text-[#07172a]">
                          {section.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Document content */}
        <article className="min-w-0 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_12px_40px_rgba(23,57,95,0.06)] sm:p-8 lg:p-10 xl:p-12">
          {documents.map((document, documentIndex) => (
            <section
              key={document.id}
              id={document.id}
              className={documentIndex === 0 ? "scroll-mt-28" : "mt-14 scroll-mt-28 border-t border-[#e7edf3] pt-10 sm:mt-16 sm:pt-12"}
            >
              <h2 className="mb-7 text-2xl font-bold text-[#07172a] sm:text-3xl">{document.title}</h2>
              {document.sections.map((section) => {
                const anchorId = createAnchorId(document.id, section.title);
                return (
                  <section key={anchorId} id={anchorId} className="mb-8 scroll-mt-28 last:mb-0">
                    <h3 className="mb-3 text-lg font-bold leading-snug text-[#07172a] sm:text-xl">{section.title}</h3>
                    <div className="space-y-3 break-words text-sm leading-7 text-[#416184] sm:text-base">
                      {renderSectionContent(section.content)}
                    </div>
                  </section>
                );
              })}
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-[#e7edf3] bg-[#f0faff] p-5 sm:p-8">
            <h2 className="text-xl font-semibold text-[#07172a]">{contactTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">{contactText}</p>
            <Link to="/contact-us" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#07172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#416184] focus:outline-none focus:ring-2 focus:ring-[#416184] focus:ring-offset-2">
              Contact Us <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  </section>
);



const LegalHero = ({ title }) => (
  <section className="bg-[#3e5c76] relative flex h-[280px] items-center overflow-hidden sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]">
  
    <div className="absolute inset-0 bg-[#10213a]/70" />
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pt-12 sm:px-6 sm:pt-16">
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-300">
        <Link to="/" className="transition hover:text-[#9ddff5]">Home</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span className="text-[#9ddff5]">{title}</span>
      </nav>
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
    </div>
  </section>
);


const PrivacyPolicy = () => {
  const documents = [
    { id: "privacy-policy", title: "Privacy Policy", sections: privacySections },
    { id: "disclaimer", title: "Disclaimer", sections: disclaimerSections },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <LegalHero title="Privacy Policy" />

      <div className="mx-4 mt-8 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] sm:mx-6 sm:mt-10 sm:p-8 lg:mx-auto lg:max-w-[1600px]">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#416184]">Effective Date</p>
        <p className="mt-1 text-base font-semibold text-[#07172a]">{effectiveDate}</p>
        <p className="mt-4 text-sm leading-7 text-[#416184] sm:text-base">{privacyIntroduction}</p>
      </div>

      <LegalPageContent
        documents={documents}
        contactTitle="Questions About Your Privacy?"
        contactText="If you have any questions about this Privacy Policy or how your information is handled, please get in touch with our team."
      />

      <SEO
        title="Privacy Policy | Smart Key Property Management"
        description="Read our Privacy Policy to understand how we collect, use, protect, and manage your personal information when you visit our website or contact us."
        canonical="/privacy-policy"
      />
    </main>
  );
};

export default PrivacyPolicy;