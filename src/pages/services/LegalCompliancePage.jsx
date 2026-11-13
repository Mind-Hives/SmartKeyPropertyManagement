import React from "react";
import FAQ from "@/components/common/FAQ";
import FooterCTA from "@/components/common/FooterCTA";
import FeatureBlock from "@/components/featureBlock/FeatureBlockHorizontal";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const complianceItems = [
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208209/Legal_Penalty_SmartKey_result.avif",
    title: "Financial Penalties & Fines",
    text: "Failure to comply with regulations can result in significant financial penalties and fines. These costs can quickly add up and directly impact rental income and overall property profitability.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208213/Legal_Justice_SmartKey_result.avif",
    title: "Eviction Delays & Legal Disruption",
    text: "Non-compliance can delay legal proceedings such as evictions. Missed notices or incorrect documentation can extend timelines and make it harder to regain control of the property.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208206/Legal_Claim_SmartKey_result.avif",
    title: "Tenant Disputes & Claims",
    text: "Failure to follow compliance standards can result in increased scrutiny from regulatory authorities. This added pressure can disrupt operations and make property management more difficult to control.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208207/Legal_Explore_SmartKey_result.avif",
    title: "Regulatory Scrutiny & Operational Pressure",
    text: "Failure to follow compliance standards can result in increased scrutiny from regulatory authorities. This added pressure can disrupt operations and make property management more difficult to control",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208210/Legal_compliance_SmartKey_result.avif",
    title: "DOB & HPD Compliance Risks",
    text: "Non-compliance with NYC Department of Buildings (DOB) rules on building codes, permits, and inspections, plus HPD requirements for housing maintenance, registration and violations, can lead to severe fines up to $10,000, daily penalties, and operational shutdowns.",
  },
];

const legalCards = [
  {
    icon: (
      <img src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208211/Legal_Soft-Skill_SmarKey_result.avif"></img>
    ),
    title: "Proactive Compliance Oversight",
    text: "We continuously monitor lease structures, tenancy processes and operational workflows to maintain alignment with evolving rental laws New York and New Jersey requirements, helping landlords stay consistent with ongoing landlord compliance requirements.",
  },
  {
    icon: (
      <img src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208214/Legal_Communication_SmartKey_result.avif"></img>
    ),
    title: "Legal Coordination & Documentation Readiness",
    text: "When legal situations arise, we coordinate with experienced attorneys and ensure all notices, records and documentation are properly prepared, organized and aligned with property management legal requirements.",
  },
  {
    icon: (
      <img src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208212/Legal_Payment_SmartKey_result.avif"></img>
    ),
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
    icon: "1",
    title: "Early Risk Detection",
    text: "We identify compliance gaps early, helping prevent issues from escalating into legal problems.",
  },
  {
    icon: "2",
    title: "Consistent Documentation Systems",
    text: "Every notice, communication and action is properly recorded to maintain clarity and accountability.",
  },
  {
    icon: "3",
    title: "Operational Standardization",
    text: "We apply structured processes across all properties to reduce inconsistency and improve control.",
  },
  {
    icon: "4",
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
    answer:
      "No. Smart Key Property Management does not provide legal advice. We coordinate with licensed attorneys in New York and New Jersey when legal expertise is required.",
  },
  {
    question: "How do you help landlords stay compliant in NYC and NJ?",
    answer:
      "We implement structured systems for lease management, compliance monitoring, documentation and legal coordination aligned with current rental practices.",
  },
  {
    question: "What happens if a tenant issue becomes legal?",
    answer:
      "We organize all relevant documentation and coordinate with experienced legal professionals to ensure the matter is handled properly.",
  },
  {
    question: "Do you handle lease agreements and notices?",
    answer:
      "Yes. We assist with organizing, tracking and managing leases, notices, and all required documentation.",
  },
  {
    question: "Why is compliance important in NYC rental properties?",
    answer:
      "NYC has strict tenant protection and rent regulation laws. Non-compliance can lead to fines, delays and legal disputes.",
  },
  {
    question: "Can you work with my existing attorney?",
    answer: "Yes. We can coordinate with your preferred legal professionals.",
  },
];

const LegalCompliancePage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Legal Compliance Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208208/Legal-Hero-Image_SmartKey.avif"
          alt="Legal Compliance and Risk Management"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07172a]/70"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pt-16 sm:px-6 sm:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300"
          >
            <Link to="/" className="transition hover:text-[#9ddff5]">
              Home
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <span className="text-[#9ddff5]">Legal Compliance</span>
          </nav>

          <span className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Legal Compliance &
            <br className="hidden sm:block" />
            Risk Management
          </span>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-center">
          <h1 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Legal Compliance & Risk Management Help for
            <br className="hidden md:block" /> Rental Properties
          </h1>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Navigating rental laws in New York City and New Jersey requires more
            than basic awareness; it demands consistency, accuracy and a clear
            understanding of evolving requirements. For many property owners,
            managing rental property compliance and meeting ongoing landlord
            legal responsibilities alongside daily operations can quickly become
            complex and time-consuming.
          </p>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            <a className="text-blue-500 hover:underline" href="/">
              Smart Key Property Management
            </a>{" "}
            supports landlords by bringing structure to these responsibilities.
            We help property owners stay aligned with key property management
            legal requirements, reduce unnecessary legal exposure and manage
            essential landlord legal responsibilities through organized systems
            and professional coordination. From lease requirements and
            regulatory notices to documentation and communication, our
            process-driven approach ensures compliance is handled with clarity,
            not guesswork, while coordinating with legal professionals whenever
            required.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/contact-us"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
            >
              Request a Property Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
              Why Legal Compliance Matters
            </h2>

            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Rental property regulations in New York and New Jersey are among
              the most complex in the United States. Laws governing lease
              agreements, tenant rights NYC, rent regulations,{" "}
              <a
                className="text-blue-500 hover:underline"
                href="/blogs/understanding-the-nyc-eviction-process-key-steps-and-legal-insights"
              >
                eviction procedures and property standards
              </a>{" "}
              continue to evolve under strict rental laws New York enforces.
              Managing these landlord compliance requirements without a
              structured system can quickly create risk.
            </p>
            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              In high-regulation markets like New York City, even minor
              documentation errors can create serious legal exposure. A
              structured compliance system is no longer optional it's essential
              for protecting your property and your income
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {complianceItems.map((card, index) => (
              // Feature component used
              <FeatureBlock
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Our Compliance & Risk Management Approach
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              At Smart Key Property Management, we provide structured compliance
              coordination for landlords across New York City and New Jersey.
              While we do not offer legal advice, we ensure property operations
              are organized, properly documented and aligned with current rental
              practices through consistent processes and professional
              coordination.
            </p>
          </div>
          <div className="flex text-center grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {legalCards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <FeatureBlockVertical {...card} />
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
            A consistent compliance workflow helps landlords stay organized,
            reduce risk and maintain control over property operations. At Smart
            Key, our rental property compliance process is designed to ensure
            every step is handled systematically and without gaps.
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

      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
            <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
              Why Landlords Choose Smart Key Property Management
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Smart Key provides structured landlord compliance services
              designed specifically for high-regulation markets like New York
              and New Jersey. Our approach focuses on consistency, organization
              and reducing risk while maintaining strong{" "}
              <a
                className="text-blue-500 hover:underline"
                href="/services/rent-collection-arrears-recovery"
              >
                rental property compliance
              </a>{" "}
              across operations.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
            {whyCards.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] border border-[#9ddff5] bg-white shadow-sm p-5 rounded-md flex items-center justify-center"
              >
                <h3 className="m-2 text-base font-semibold text-center">
                  {item}
                </h3>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="w-full flex justify-center mt-10">
            <a
              href="/contact-us"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            Risk Management for Rental Properties in
            <br className="hidden md:block" /> NYC and New Jersey
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Rental properties in New York City and New Jersey operate in highly
            regulated environments where even small gaps can create serious
            consequences. Effective rental property risk management is essential
            for maintaining control, avoiding disputes and staying aligned with
            evolving regulations. Without structured systems, minor compliance
            issues can quickly turn into larger legal risks rental property
            owners must deal with.
          </p>
          <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            <li>
              <strong>1. Lease disputes and tenant claims</strong>
            </li>
            <li>
              <strong>
                2. Non-compliance with rent regulations and tenant protections
              </strong>
            </li>
            <li>
              <strong>
                3. Improper notice handling and documentation gaps
              </strong>
            </li>
            <li>
              <strong>
                4. Delays in responding to compliance-related issues
              </strong>
            </li>
            <li>
              <strong>
                5. Financial losses due to preventable legal complications
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            Accurate, Transparent, and Reliable Financial Management
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Maintaining control over property finances requires accuracy,
            consistency and structured systems. With a disciplined accounting
            approach, every financial activity is recorded and reported clearly,
            giving property owners full confidence in their data.
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
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-xl font-bold leading-snug text-[#2f4f73] sm:text-2xl md:text-3xl">
              Legal Requirements for Landlords in New York and
              <br className="hidden md:block" /> Jersey
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            {riskCards.map((card, index) => (
              <div
                key={index}
                className="flex w-full max-w-[280px] flex-col items-center justify-center rounded-md border-4 p-5 text-center transition-all duration-300 sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <h3 className="text-2xl font-semibold text-[#2f4f73] sm:text-3xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/contact-us"
              className="inline-block rounded-3xl bg-[#1f83c5] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#176da6] sm:px-10 sm:py-4 sm:text-base"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            Compliance Support & Professional Coordination for Landlords
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Managing compliance across multiple locations requires clear
            coordination and consistent execution. Smart Key acts as a central
            partner for landlords, ensuring that all compliance-related
            activities are organized and aligned across New York and New Jersey
            rental operations.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            We help bring structure to communication between landlords, tenants,
            and legal professionals, reducing confusion and ensuring that every
            step is handled with clarity and accountability.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7 font-bold">
            What We Provide
          </p>
          <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            <li>
              <strong>
                1. Consistent screening criteria applied uniformly
              </strong>
            </li>
            <li>
              <strong>
                2. Documented verification and evaluation workflow
              </strong>
            </li>
            <li>
              <strong>
                3. Structured communication aligned with compliance standards
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <FAQ title="Frequently Asked Question" data={faqData} />

      {/* Footer CTA */}
      <FooterCTA
        backgroundSrc={
          "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/Footer_SamrtKey.avif"
        }
        title={"Own Property? We Make Managing It Effortless."}
        buttonText="Schedule Free Consultation"
        buttonLink="/contact-us"
      />

      {/* For SEO ranking */}
      <SEO
        title="Legal Compliance for Landlords | Property Management Legal Requirements"
        description="Smart Key ensures legal compliance for landlords, helping you meet property management legal requirements in NY & NJ with structured, reliable systems."
      />
    </main>
  );
};

export default LegalCompliancePage;
