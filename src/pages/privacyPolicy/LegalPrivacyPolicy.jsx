import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SEO from "@/components/seo/SEO";

const effectiveDate = "October 1, 2025";

const privacyIntroduction = 'This Privacy Policy describes how Smart Key Property Management ("we," "us," or "our") collects, uses, processes, and discloses your information in connection with your access to and use of the www.smartkeypropertymanagement.com website and services (collectively, the "Services"). We are committed to protecting your privacy and handling your personal data in an open and transparent manner.';

const disclaimerSections = [
  {
    id: "disclaimer-accuracy",
    title: "1. Accuracy of Information",
    content: (
      <p>
        We strive to ensure that the information presented on our Service,
        including property listings, descriptions, and related content, is
        accurate and up-to-date. However, we do not warrant the accuracy,
        completeness, or reliability of any information provided by users
        or third parties. Property details, availability, prices, and other
        specifications are subject to change without notice. Users are
        strongly advised to verify all information independently before
        making any decisions or entering into any agreements.
      </p>
    ),
  },
  {
    id: "no-professional-advice",
    title: "2. No Professional Advice",
    content: (
      <p>
        The information provided on the Service is not intended as, and
        should not be understood or construed as, professional advice. It
        is not a substitute for professional legal, financial, real estate,
        or other advice. Before making any decisions or taking any actions
        based on the information on the Service, we encourage you to consult
        with appropriate professionals. Your reliance on any information
        appearing on the Service is solely at your own risk.
      </p>
    ),
  },
  {
    id: "disclaimer-third-party-links",
    title: "3. Third-Party Links",
    content: (
      <p>
        The Service may contain links to other websites or content belonging
        to or originating from third parties or links to websites and
        features in banners or other advertising. Such external links are
        not investigated, monitored, or checked for accuracy, adequacy,
        validity, reliability, availability, or completeness by us. We do
        not warrant, endorse, guarantee, or assume responsibility for the
        accuracy or reliability of any information offered by third-party
        websites linked through the Service or any website or feature linked
        in any banner or other advertising. We will not be a party to or in
        any way be responsible for monitoring any transaction between you
        and third-party providers of products or services.
      </p>
    ),
  },
  {
    id: "disclaimer-limitation-liability",
    title: "4. Limitation of Liability",
    content: (
      <>
        <p>
          Under no circumstances shall we have any liability to you for any
          loss or damage of any kind incurred as a result of the use of the
          Service or reliance on any information provided on the Service.
          Your use of the Service and your reliance on any information on the
          Service is solely at your own risk.
        </p>
        <p>
          We shall not be liable for any direct, indirect, incidental,
          consequential, special, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from:
        </p>
        <ul>
          <li>
            Your access to or use of or inability to access or use the
            Service.
          </li>
          <li>Any conduct or content of any third party on the Service.</li>
          <li>Any content obtained from the Service.</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions
            or content, whether based on warranty, contract, tort (including
            negligence), or any other legal theory, whether or not we have
            been informed of the possibility of such damage.
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
        articles or resources. Any views or opinions expressed in such
        external content are solely those of the authors and do not
        necessarily reflect the official policy or position of SmartKey
        Property Management. We do not endorse or take responsibility for
        the accuracy or completeness of such content.
      </p>
    ),
  },
  {
    id: "changes-to-disclaimer",
    title: "6. Changes to Disclaimer",
    content: (
      <p>
        We reserve the right to amend this disclaimer at any time without
        prior notice. Any changes will be posted on this page, and your
        continued use of the Service after such changes constitutes your
        acceptance of the revised disclaimer. You are advised to review this
        Disclaimer periodically for any changes.
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

const termsSections = [
  {
    id: "terms-introduction",
    title: "1. Introduction and Acceptance of Terms",
    content: (
      <p>
        Your access to and use of the Service is conditioned upon your
        acceptance of and compliance with these Terms. These Terms apply to
        all visitors, users, and others who access or use the Service. By
        accessing or using the Service, you agree to be bound by these Terms.
        If you disagree with any part of the terms, then you may not access
        the Service.
      </p>
    ),
  },
  {
    id: "user-accounts",
    title: "2. User Accounts",
    content: (
      <>
        <h4>2.1. Registration</h4>
        <p>
          To access certain features of the Service, you may be required to
          register for an account. You agree to provide accurate, current,
          and complete information during the registration process and to
          update such information to keep it accurate, current, and complete.
        </p>
        <h4>2.2. Account Security</h4>
        <p>
          You are responsible for safeguarding the password that you use to
          access the Service and for any activities or actions under your
          password. You agree not to disclose your password to any third
          party. You must notify us immediately upon becoming aware of any
          breach of security or unauthorized use of your account.
        </p>
        <h4>2.3. Eligibility</h4>
        <p>
          By creating an account, you represent and warrant that you are at
          least 16 years of age and are legally capable of entering into
          binding contracts.
        </p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "3. User Responsibilities and Conduct",
    content: (
      <>
        <h4>3.1. Lawful Use</h4>
        <p>
          You agree to use the Service only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the Service.
        </p>
        <h4>3.2. Accurate Information</h4>
        <p>
          You are solely responsible for the accuracy and completeness of all
          information you provide on the Service, including property
          listings, personal details, and communications.
        </p>
        <h4>3.3. Prohibited Activities</h4>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any fraudulent or unlawful purpose.</li>
          <li>
            Post or transmit any material that is defamatory, obscene,
            offensive, hateful, or inflammatory.
          </li>
          <li>
            Engage in any activity that interferes with or disrupts the
            Service or the servers and networks connected to the Service.
          </li>
          <li>
            Attempt to gain unauthorized access to any portion or feature of
            the Service, or any other systems or networks connected to the
            Service.
          </li>
          <li>
            Upload or transmit viruses, worms, or any other type of malicious
            code.
          </li>
          <li>
            Impersonate any person or entity, or falsely state or otherwise
            misrepresent your affiliation with a person or entity.
          </li>
          <li>
            Collect or store personal data about other users without their
            express consent.
          </li>
        </ul>
        <h4>3.4. Compliance with Laws</h4>
        <p>
          You agree to comply with all applicable local, state, national, and
          international laws and regulations in connection with your use of
          the Service, including but not limited to real estate laws,
          consumer protection laws, and data privacy laws.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: (
      <>
        <h4>4.1. Our Content</h4>
        <p>
          The Service and its original content (excluding content provided
          by users), features, and functionality are and will remain the
          exclusive property of SmartKey Property Management and its
          licensors. The Service is protected by copyright, trademark, and
          other laws of both the United States and foreign countries. Our
          trademarks and trade dress may not be used in connection with any
          product or service without the prior written consent of SmartKey
          Property Management.
        </p>
        <h4>4.2. User-Generated Content</h4>
        <p>
          You retain all rights in, and are solely responsible for, the
          content you post to the Service. By posting content, you grant us
          a non-exclusive, worldwide, royalty-free, irrevocable,
          sub-licensable, and transferable license to use, reproduce,
          distribute, prepare derivative works of, display, and perform that
          content in connection with the Service and our (and our successors'
          and affiliates') business, including without limitation for
          promoting and redistributing part or all of the Service (and
          derivative works thereof) in any media formats and through any
          media channels.
        </p>
      </>
    ),
  },
  {
    id: "terms-disclaimers",
    title: "5. Disclaimers",
    content: (
      <>
        <h4>5.1. "As Is" Basis</h4>
        <p>
          Your use of the Service is at your sole risk. The Service is
          provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
          provided without warranties of any kind, whether express or
          implied, including, but not limited to, implied warranties of
          merchantability, fitness for a particular purpose,
          non-infringement, or course of performance.
        </p>
        <h4>5.2. No Warranty</h4>
        <p>SmartKey Property Management does not warrant that:</p>
        <ul>
          <li>
            The Service will function uninterrupted, securely, or be
            available at any particular time or location.
          </li>
          <li>Any errors or defects will be corrected.</li>
          <li>
            The Service is free of viruses or other harmful components.
          </li>
          <li>The results of using the Service will meet your requirements.</li>
        </ul>
        <h4>5.3. Information Accuracy</h4>
        <p>
          While we strive to provide accurate information, we do not warrant
          the accuracy, completeness, or reliability of any property
          listings, descriptions, or other information provided by users or
          third parties on the Service. Users are advised to conduct their
          own due diligence.
        </p>
        <h4>5.4. Third-Party Interactions</h4>
        <p>
          We are not responsible for the conduct, whether online or offline,
          of any user of the Service. We do not endorse any user, property,
          or service listed on the platform.
        </p>
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "6. Limitation of Liability",
    content: (
      <>
        <p>
          In no event shall SmartKey Property Management, nor its directors,
          employees, partners, agents, suppliers, or affiliates, be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, including without limitation, loss of profits, data, use,
          goodwill, or other intangible losses, resulting from:
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
            negligence), or any other legal theory, whether or not we have
            been informed of the possibility of such damage, and even if a
            remedy set forth herein is found to have failed of its essential
            purpose.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "7. Indemnification",
    content: (
      <>
        <p>
          You agree to defend, indemnify, and hold harmless SmartKey Property
          Management and its licensee and licensors, and their employees,
          contractors, agents, officers, and directors, from and against any
          and all claims, damages, obligations, losses, liabilities, costs
          or debt, and expenses (including but not limited to attorney's
          fees), resulting from or arising out of:
        </p>
        <ul>
          <li>
            Your use and access of the Service, by you or any person using
            your account and password.
          </li>
          <li>A breach of these Terms.</li>
          <li>Content posted by you on the Service.</li>
          <li>
            Your violation of any rights of another, including intellectual
            property rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "terms-third-party-links",
    title: "8. Third-Party Links",
    content: (
      <p>
        Our Service may contain links to third-party websites or services
        that are not owned or controlled by SmartKey Property Management.
        SmartKey Property Management has no control over and assumes no
        responsibility for the content, privacy policies, or practices of
        any third-party websites or services. You further acknowledge and
        agree that SmartKey Property Management shall not be responsible or
        liable, directly or indirectly, for any damage or loss caused or
        alleged to be caused by or in connection with the use of or reliance
        on any such content, goods, or services available on or through any
        such websites or services. We strongly advise you to read the terms
        and conditions and privacy policies of any third-party websites or
        services that you visit.
      </p>
    ),
  },
  {
    id: "termination",
    title: "9. Termination",
    content: (
      <p>
        We may terminate or suspend your account immediately, without prior
        notice or liability, for any reason whatsoever, including, without
        limitation, if you breach the Terms. Upon termination, your right to
        use the Service will immediately cease. If you wish to terminate
        your account, you may simply discontinue using the Service or
        contact us to request account deletion.
      </p>
    ),
  },
  {
    id: "governing-law-dispute",
    title: "10. Governing Law and Dispute Resolution",
    content: (
      <>
        <h4>10.1. Governing Law</h4>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of the United States, without regard to its conflict of law
          provisions.
        </p>
        <h4>10.2. Arbitration</h4>
        <p>
          Any dispute or claim arising out of or in connection with these
          Terms, including any question regarding its existence, validity,
          or termination, shall be referred to and finally resolved by
          arbitration in accordance with the provisions of the Arbitration
          and Conciliation. The arbitral tribunal shall consist of a sole
          arbitrator appointed by SmartKey Property Management. The seat of
          arbitration shall be the United States. The language of the
          arbitration shall be English.
        </p>
        <h4>10.3. Jurisdiction</h4>
        <p>
          Subject to the arbitration clause above, the Courts in the United
          States shall have exclusive jurisdiction to entertain any suit or
          proceeding arising out of these Terms.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    title: "11. Changes to Terms",
    content: (
      <p>
        We reserve the right, at our sole discretion, to modify or replace
        these Terms at any time. If a revision is material, we will try to
        provide at least 30 days' notice prior to any new terms taking
        effect. What constitutes a material change will be determined at
        our sole discretion. By continuing to access or use our Service
        after those revisions become effective, you agree to be bound by
        the revised terms. If you do not agree to the new terms, please
        stop using the Service.
      </p>
    ),
  },
  {
    id: "miscellaneous",
    title: "12. Miscellaneous",
    content: (
      <>
        <h4>12.1. Severability</h4>
        <p>
          If any provision of these Terms is held to be invalid or
          unenforceable by a court, the remaining provisions of these Terms
          will remain in effect.
        </p>
        <h4>12.2. Waiver</h4>
        <p>
          No waiver of any term of these Terms shall be deemed a further or
          continuing waiver of such term or any other term, and our failure
          to assert any right or provision under these Terms shall not
          constitute a waiver of such right or provision.
        </p>
        <h4>12.3. Entire Agreement</h4>
        <p>
          These Terms constitute the entire agreement between us regarding
          our Service, and supersede and replace any prior agreements we
          might have between us regarding our Service.
        </p>
      </>
    ),
  },
  {
    id: "terms-contact",
    title: "14. Contact Us",
    content: (
      <>
        <p>
          If you have any questions about these Terms, please contact us:
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
    content: [
      ""
    ],
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

const legalDocuments = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    sections: privacySections,
  },
  {
    id: "terms-and-conditions",
    title: "Terms and Conditions",
    sections: termsSections,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    sections: disclaimerSections,
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

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative flex h-[240px] items-end overflow-hidden sm:h-[280px] lg:h-[420px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793651307/privacy_policy_SmartKey.avif"
          alt="Privacy Policy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#06172a]/70" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300"
          >
            <Link to="/" className="transition hover:text-[#9ddff5]">
              Home
            </Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span className="text-[#9ddff5]">Privacy Policy</span>
          </nav>

          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1600px]">
          {/* Effective Date and Introduction */}
          <div className="mb-8 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] sm:mb-10 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#416184]">
              Effective Date
            </p>
            <p className="mt-1 text-base font-semibold text-[#07172a]">
              {effectiveDate}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#416184] sm:text-base">
              {privacyIntroduction}
            </p>
          </div>

          {/* Mobile Table of Contents */}
          <details className="mb-6 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] lg:hidden">
            <summary className="cursor-pointer list-none text-base font-semibold text-[#07172a]">
              On This Page
              <span className="float-right text-[#416184]">+</span>
            </summary>
            <nav aria-label="Page contents" className="mt-4 space-y-5">
              {legalDocuments.map((document) => (
                <div key={document.id}>
                  <a
                    href={`#${document.id}`}
                    className="mb-2 block font-semibold text-[#07172a] hover:text-[#416184]"
                  >
                    {document.title}
                  </a>
                  <ul className="space-y-1 border-l border-[#e7edf3] pl-3">
                    {document.sections.map((section) => {
                      const anchorId = createAnchorId(document.id, section.title);
                      return (
                        <li key={anchorId}>
                          <a
                            href={`#${anchorId}`}
                            className="block py-1 text-sm leading-5 text-[#416184] transition hover:text-[#07172a]"
                          >
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

          {/* Desktop Table of Contents and Main Content */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_4px_20px_rgba(23,57,95,0.05)] lg:-ml-3 lg:block xl:p-6">
              <h2 className="mb-5 text-lg font-semibold text-[#07172a]">
                On This Page
              </h2>
              <nav aria-label="Page contents" className="space-y-5">
                {legalDocuments.map((document) => (
                  <div key={document.id}>
                    <a
                      href={`#${document.id}`}
                      className="mb-2 block text-sm font-bold text-[#07172a] transition hover:text-[#416184]"
                    >
                      {document.title}
                    </a>
                    <ul className="space-y-1 border-l border-[#e7edf3] pl-3">
                      {document.sections.map((section) => {
                        const anchorId = createAnchorId(document.id, section.title);
                        return (
                          <li key={anchorId}>
                            <a
                              href={`#${anchorId}`}
                              className="block rounded-md px-2 py-1.5 text-xs leading-5 text-[#416184] transition hover:bg-[#f0faff] hover:text-[#07172a]"
                            >
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

            {/* Legal Documents */}
            <article className="min-w-0 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_12px_40px_rgba(23,57,95,0.06)] sm:p-8 lg:p-10 xl:p-12">
              {legalDocuments.map((document, documentIndex) => (
                <section
                  key={document.id}
                  id={document.id}
                  className={documentIndex === 0 ? "scroll-mt-28" : "mt-14 scroll-mt-28 border-t border-[#e7edf3] pt-10 sm:mt-16 sm:pt-12"}
                >
                  <h2 className="mb-7 text-2xl font-bold text-[#07172a] sm:text-3xl">
                    {document.title}
                  </h2>

                  {document.sections.map((section) => {
                    const anchorId = createAnchorId(document.id, section.title);
                    return (
                      <section
                        key={anchorId}
                        id={anchorId}
                        className="mb-8 scroll-mt-28 last:mb-0"
                      >
                        <h3 className="mb-3 text-lg font-bold leading-snug text-[#07172a] sm:text-xl">
                          {section.title}
                        </h3>
                        <div className="space-y-3 break-words text-sm leading-7 text-[#416184] sm:text-base">
                          {renderSectionContent(section.content)}
                        </div>
                      </section>
                    );
                  })}
                </section>
              ))}

              {/* Contact Information */}
              <div className="mt-12 rounded-2xl border border-[#e7edf3] bg-[#f0faff] p-5 sm:p-8">
                <h2 className="text-xl font-semibold text-[#07172a]">
                  Questions About Your Privacy?
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  If you have any questions about this Privacy Policy or how
                  your information is handled, please get in touch with our team.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#07172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#416184] focus:outline-none focus:ring-2 focus:ring-[#416184] focus:ring-offset-2"
                >
                  Contact Us
                  <ChevronRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SEO
        title="Privacy Policy | Smart Key Property Management"
        description="Read our Privacy Policy to understand how we collect, use, protect, and manage your personal information when you visit our website or contact us."
        canonical="/privacy-policy"
      />
    </main>
  );
};

export default PrivacyPolicy;