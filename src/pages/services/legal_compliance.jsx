import React from "react";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  ShieldCheck,
  AlertTriangle,
  ClipboardCheck,
  Home,
  Phone,
} from "lucide-react";

const complianceItems = [
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6be4b58be22fa85753f0_penalty.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6be4b58be22fa85753f0_penalty-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6be4b58be22fa85753f0_penalty.png 512w"></img>,
    title: "Financial Penalties & Fines",
    text: "Failure to comply with regulations can result in significant financial penalties and fines. These costs can quickly add up and directly impact rental income and overall property profitability.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd8681050a57a313687a97_justice-scale.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd8681050a57a313687a97_justice-scale-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd8681050a57a313687a97_justice-scale.png 512w"></img>,
    title: "Eviction Delays & Legal Disruption",
    text: "Non-compliance can delay legal proceedings such as evictions. Missed notices or incorrect documentation can extend timelines and make it harder to regain control of the property.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd698847c58bdd6cc50c90_claim.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd698847c58bdd6cc50c90_claim-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd698847c58bdd6cc50c90_claim.png 512w"></img>,
    title: "Tenant Disputes & Claims",
    text: "Failure to follow compliance standards can result in increased scrutiny from regulatory authorities. This added pressure can disrupt operations and make property management more difficult to control.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6a14abd5ab8118f9a5a5_explore.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6a14abd5ab8118f9a5a5_explore-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd6a14abd5ab8118f9a5a5_explore.png 512w"></img>,
    title: "Regulatory Scrutiny & Operational Pressure",
    text: "Failure to follow compliance standards can result in increased scrutiny from regulatory authorities. This added pressure can disrupt operations and make property management more difficult to control",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c2b237fe2aaa0f0fc4c0a3_compliance.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c2b237fe2aaa0f0fc4c0a3_compliance-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69c2b237fe2aaa0f0fc4c0a3_compliance.png 512w"></img>,
    title: "DOB & HPD Compliance Risks",
    text: "Non-compliance with NYC Department of Buildings (DOB) rules on building codes, permits, and inspections, plus HPD requirements for housing maintenance, registration and violations, can lead to severe fines up to $10,000, daily penalties, and operational shutdowns.",
  },
];

const legalCards = [
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd75583a264e9e38e61de9_soft-skill.png"></img>,
    title: "Proactive Compliance Oversight",
    text: "We continuously monitor lease structures, tenancy processes and operational workflows to maintain alignment with evolving rental laws New York and New Jersey requirements, helping landlords stay consistent with ongoing landlord compliance requirements.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69bd7585d69df7d646c96232_communication.png"></img>,
    title: "Legal Coordination & Documentation Readiness",
    text: "When legal situations arise, we coordinate with experienced attorneys and ensure all notices, records and documentation are properly prepared, organized and aligned with property management legal requirements.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9bf6184a8a895e0d1ae4e_payment.png"></img>,
    title: "Standardized Systems & Process Control",
    text: "Our structured management systems bring consistency to lease handling, tenant communication and record keeping, reducing errors and strengthening overall rental property compliance across operations.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Lease & Policy Review",
    text: "We review lease structures and policies to ensure they align with current rental practices in NY & NJ, including required clauses and documentation standards.",
    side: "right",
  },
  {
    no: "02",
    title: "Ongoing Compliance Monitoring",
    text: "We track tenancy activity, deadlines and operational requirements to maintain consistency and reduce the risk of non-compliance across property operations. We track tenancy activity, deadlines, and operational requirements to maintain consistency and reduce the risk of non-compliance across property operations.",
    side: "left",
  },
  {
    no: "03",
    title: "Documentation & Record Management",
    text: "All notices, agreements, and tenant communications are systematically recorded and maintained to ensure accuracy, accessibility and organized compliance tracking.",
    side: "right",
  },
  {
    no: "04",
    title: "Issue Identification & Legal Coordination",
    text: "Potential compliance issues are identified early and coordinated with legal professionals when required, helping prevent escalation and operational disruption.",
    side: "left",
  },
  {
    no: "05",
    title: "Risk Prevention & Reporting",
    text: "We provide structured updates and highlight potential risks, allowing landlords to take proactive action before issues develop into larger problems.",
    side: "right",
  },
];

const varianceCards = [
  {
    icon: '1',
    title: "Early Risk Detection",
    text: "We identify compliance gaps early, helping prevent issues from escalating into legal problems.",
  },
  {
    icon: '2',
    title: "Consistent Documentation Systems",
    text: "Every notice, communication and action is properly recorded to maintain clarity and accountability.",
  },
  {
    icon: '3',
    title: "Operational Standardization",
    text: "We apply structured processes across all properties to reduce inconsistency and improve control.",
  },
  {
    icon: '4',
    title: "Legal Coordination When Necessary",
    text: "We coordinate with legal professionals when required, ensuring timely action and proper handling of complex situations.",
  },
];

const riskCards = [
  {
    title: "New York (NYC)",
    text: "Landlords in New York must follow strict tenant protection laws, eviction procedures and documentation requirements. Tenant rights NYC regulations and rental laws New York enforces make compliance essential for avoiding legal issues.",
  },
  {
    title: "New Jersey",
    text: "New Jersey landlords must follow different rental property laws, including notice handling, tenant protections and documentation standards. Understanding landlord laws New Jersey applies is critical for maintaining compliant rental operations.",
  },
];

const whyCards = [
  "Structured compliance systems",
  "Organized lease & documentation",
  "Attorney coordination support",
  "Reduced legal risk exposure",
  "Process-driven management",
];

const faqData = [
  {
    question: "Do you provide legal advice?",
    answer: "No. Smart Key Property Management does not provide legal advice. We coordinate with licensed attorneys in New York and New Jersey when legal expertise is required.",
  },
  {
    question: "How do you help landlords stay compliant in NYC and NJ?",
    answer: "We implement structured systems for lease management, compliance monitoring, documentation and legal coordination aligned with current rental practices.",
  },
   {
    question: "What happens if a tenant issue becomes legal?",
    answer: "We organize all relevant documentation and coordinate with experienced legal professionals to ensure the matter is handled properly.",
  },
   {
    question: "Do you handle lease agreements and notices?",
    answer: "Yes. We assist with organizing, tracking and managing leases, notices, and all required documentation.",
  },
  {
    question: "Why is compliance important in NYC rental properties?",
    answer: "NYC has strict tenant protection and rent regulation laws. Non-compliance can lead to fines, delays and legal disputes.",
  },
  {
    question: "Can you work with my existing attorney?",
    answer: "Yes. We can coordinate with your preferred legal professionals.",
  },
];

const LegalCompliancePage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      <section className="relative h-[540px] overflow-hidden flex items-center">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc10db1fc37a5bca77efa3_legal%20hero%20image.avif"
          alt="Legal Compliance and Risk Management"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Legal Compliance
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Legal Compliance &
            <br />
            Risk Management
          </h1>
        </div>
      </section>

      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Legal Compliance & Risk Management Help for Rental Properties
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Legal Compliance & Risk Management Help for
            <br className="hidden md:block" /> Rental Properties
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Navigating rental laws in New York City and New Jersey requires more than basic awareness; it demands consistency, accuracy and a clear understanding of evolving requirements. For many property owners, managing rental property compliance and meeting ongoing landlord legal responsibilities alongside daily operations can quickly become complex and time-consuming. <br /><br />
            <a className="text-blue-500 hover:underline" href="/">Smart Key Property Management</a> supports landlords by bringing structure to these responsibilities. We help property owners stay aligned with key property management legal requirements, reduce unnecessary legal exposure and manage essential landlord legal responsibilities through organized systems and professional coordination. From lease requirements and regulatory notices to documentation and communication, our process-driven approach ensures compliance is handled with clarity, not guesswork, while coordinating with legal professionals whenever required.
          </p>

          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/">Request a Free Property Consultation</a>
          </button>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Legal Compliance Matters
          </h2>

          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-600">
            Rental property regulations in New York and New Jersey are among the most complex in the United States. Laws governing lease agreements, tenant rights NYC, rent regulations, <a className="text-blue-500 hover:underline" href="/blogs/understanding-the-nyc-eviction-process-key-steps-and-legal-insights">eviction procedures and property standards</a> continue to evolve under strict rental laws New York enforces. Managing these landlord compliance requirements without a structured system can quickly create risk. <br /><br />
            In high-regulation markets like New York City, even minor documentation errors can create serious legal exposure. A structured compliance system is no longer optional it's essential for protecting your property and your income
          </p>

          <div className="mt-8 space-y-4">
            {complianceItems.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start text-left"
              >
                <div className="w-32 h-32 rounded bg-white text-[#1f83c5] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Our Compliance & Risk Management Approach
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            At Smart Key Property Management, we provide structured compliance coordination for landlords across New York City and New Jersey. While we do not offer legal advice, we ensure property operations are organized, properly documented and aligned with current rental practices through consistent processes and professional coordination.
          </p>
          <div className="flex grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {legalCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="w-32 h-32 flex text-[#1f83c5] items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Structured Compliance Process
          </h2>
          <p className="max-w-4xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
            A consistent compliance workflow helps landlords stay organized, reduce risk and maintain control over property operations. At Smart Key, our rental property compliance process is designed to ensure every step is handled systematically and without gaps.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto mt-14 md:mt-20">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] bg-[#0078d7] -translate-x-1/2">
            {processSteps.map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 w-3 h-3 bg-[#0078d7] rounded-full -translate-x-1/2"
                style={{
                  top: `${(index / (processSteps.length - 1)) * 100}%`,
                }}
              ></span>
            ))}
          </div>
          <div className="space-y-16 md:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8"
              >
                <div
                  className={`text-5xl md:text-6xl font-light text-[#405b7b] ${
                    step.side === "right"
                      ? "md:text-right md:pr-20"
                      : "md:order-2 md:text-left md:pl-20"
                  }`}
                >
                  {step.no}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`bg-white border border-[#6ed3ff] rounded-md shadow-lg shadow-blue-100 p-6 max-w-[310px] mx-auto md:mx-0 ${
                    step.side === "right"
                      ? "md:ml-12"
                      : "md:order-1 md:ml-auto md:mr-12"
                  }`}
                >
                  <h3 className="text-sm md:text-base font-bold text-black mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm text-black leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Landlords Choose Smart Key Property Management
          </h2>
          <p className="max-w-4xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
            Smart Key provides structured landlord compliance services designed specifically for high-regulation markets like New York and New Jersey. Our approach focuses on consistency, organization and reducing risk while maintaining strong <a href="https://www.smartkeypropertymanagement.com/services/rent-collection-and-arrears-recovery">rental property compliance</a> across operations.
          </p>
          <div className="flex lg:grid-cols-4 gap-4 mt-8">
            {whyCards.map((item, index) => (
              <div
                key={index}
                className="border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md"
              >
                <Home className="mx-auto text-[#1f83c5]" size={26} />
                <h3 className="mt-4 text-sm font-semibold">{item}</h3>
              </div>
            ))}
          </div>
          <button className="mt-8 mb-10 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
              <a href="/contact">Get Started Today</a>
            </button>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Risk Management for Rental Properties in
            <br className="hidden md:block" /> NYC and New Jersey
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Rental properties in New York City and New Jersey operate in highly regulated environments where even small gaps can create serious consequences. Effective rental property risk management is essential for maintaining control, avoiding disputes and staying aligned with evolving regulations. Without structured systems, minor compliance issues can quickly turn into larger legal risks rental property owners must deal with.
            <br /><br />
            <ul className="font-bold text-md text-left list-disc ml-39">
              <li>Lease disputes and tenant claims</li>
              <li>Non-compliance with rent regulations and tenant protections</li>
              <li>Improper notice handling and documentation gaps</li>
              <li>Delays in responding to compliance-related issues</li>
              <li>Financial losses due to preventable legal complications</li>
            </ul>
          </p>
        </div>
      </section>
      
      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
              Accurate, Transparent, and Reliable Financial Management
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Maintaining control over property finances requires accuracy, consistency and structured systems. With a disciplined accounting approach, every financial activity is recorded and reported clearly, giving property owners full confidence in their data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {varianceCards.map((card, index) => (
              <div 
              key={index} 
              className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="flex text-5xl text-[#1f83c5] items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                <h3 className="text-base md:text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {card.text}
                </p>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Legal Requirements for Landlords in New York and 
            <br className="hidden md:block" /> Jersey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {riskCards.map((card, index) => (
              <div 
              key={index} 
              className="border-4 rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-center"
              >
                <div>
                <h3 className="text-3xl font-semibold">
                  {card.title}
                </h3>
                
                <br />
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {card.text}
                </p>
                </div>
              </div>
              ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/contact">Get Started Today</a>
          </button>
        </div>
      </section>

      <section className="px-5 py-12 bg-[#f7fbff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Compliance Support & Professional Coordination for Landlords
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Managing compliance across multiple locations requires clear coordination and consistent execution. Smart Key acts as a central partner for landlords, ensuring that all compliance-related activities are organized and aligned across New York and New Jersey rental operations. <br /><br />
            We help bring structure to communication between landlords, tenants, and legal professionals, reducing confusion and ensuring that every step is handled with clarity and accountability.
          </p><br />
          <h3 className="text-xl md:text-3xl font-bold">What We Provide</h3><br />
          <ul className="font-bold text-md text-left list-disc ml-39">
              <li>Consistent screening criteria applied uniformly</li>
              <li>Documented verification and evaluation workflow</li>
              <li>Structured communication aligned with compliance standards</li>
            </ul>
        </div>
      </section>
      <section>
        <FAQ 
        title="Frequently Asked Question"
        data={faqData}
        />
      </section>
      <section>
          <Hero 
          title={"Own Property? We Make Managing It Effortless."}
          buttonText="Schedule Free Consultation"
          backgroundType="image"
          backgroundSrc={"https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc4ab5f573a246b9215237_Footer%20main.avif"}
          buttonLink="/contact"
          />
      </section>
    </main>
  );
};

export default LegalCompliancePage;