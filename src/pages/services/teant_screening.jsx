import React from "react";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import FeatureBlock from "@/components/featureBlock/FeatureBlock";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";
import FAQ from "@/components/faq";
import { motion } from "framer-motion";


const professionalItems = [
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208197/Tenant_economic_SmartKey_result.avif',
    title: "Late Payments & Cash Flow Disruption",
    text: "Inconsistent or delayed rent payments affect predictable cash flow and can quickly create financial strain. Proper income verification and credit evaluation help identify applicants with a reliable payment history before a lease is signed.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208201/Tenant_legal-system_SmartKey_result.avif',
    title: "Evictions & Legal Exposure",
    text: "Evictions are costly, time-consuming and legally sensitive. Reviewing eviction history, rental conduct and compliance factors reduces the risk of future disputes and unnecessary legal proceedings.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208200/Tenant_earning_SmartKey_result.avif',
    title: "High Turnover & Hidden Costs",
    text: "Frequent tenant turnover increases vacancy loss, marketing expenses and unit preparation costs. Placing qualified, stable tenants from the start reduces avoidable turnover and protects overall property performance.",
  },
];

const vacancyCards = [
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208202/Tenant_Multi-Agent-System_SmartKey_result.avif',
    title: "Active Broker & Agent Network",
    text: "We maintain relationships with real estate professionals who generate consistent rental inquiries, helping reduce downtime between tenancies. This active referral pipeline supports steady applicant flow and limits prolonged vacancy exposure.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208197/Tenant_Workflow_SmartKey_result.avif',
    title: "Housing Voucher Workflow Familiarity",
    text: "We understand documentation, inspection coordination and approval steps associated with programs such as CityFHEPS, helping minimize preventable delays. Familiarity with required paperwork and agency timelines allows us to move applications forward efficiently.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208200/Tenant_payment_SmartKey_result.avif',
    title: "Coordinated Approval & Payment Processes",
    text: "For eligible placements, we navigate agency workflows such as DSS/HRA to support smoother lease execution and more predictable rent flow. Clear coordination reduces administrative bottlenecks and supports timely onboarding.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Application Review & Pre-Qualification",
    text: "At Smart Key, we begin by reviewing each rental application for completeness, accuracy and eligibility before moving into full screening. Our pre-qualification process helps filter incomplete or unqualified submissions early, ensuring only serious, properly documented applicants advance through evaluation.",
    side: "right",
  },
  {
    no: "02",
    title: "Credit & Financial Verification",
    text: "We carefully assess credit history, payment behavior and outstanding obligations to evaluate financial reliability. By reviewing credit data in detail, we identify consistent repayment patterns and assess overall financial responsibility before recommending ",
    side: "left",
  },
  {
    no: "03",
    title: "Income & Employment Confirmation",
    text: "Our team verifies documented income sources and employment status to confirm the applicant’s ability to meet monthly rent obligations. Stable, verifiable income is a critical part of reducing potential payment disruption during the lease term.",
    side: "right",
  },
  {
    no: "04",
    title: "Rental & Eviction History Review",
    text: "We examine prior rental performance, landlord references and eviction records to better understand tenancy behavior. Reviewing past occupancy patterns allows us to identify potential risk indicators before placement decisions are finalized.",
    side: "left",
  },
  {
    no: "05",
    title: "Background Screening",
    text: "Where permitted by law, we conduct background screening in alignment with regulatory standards. Our process supports compliance-focused evaluation while maintaining consistent, objective screening criteria across applicants.",
    side: "right",
  },
];

const whyCards = [
  "Clear applicant summary with verification notes",
  "Owner retains final approval",
  "Organized documentation",
  "Professional applicant communication",
  "Structured workflow",
  "Compliance awareness",
];

const faqData = [
  {
    question: "How does the Smart Key screen potential tenants?",
    answer:
      "Smart Key uses a structured tenant screening checklist that includes credit review, income verification, rental history, eviction history, and background screening as permitted. Owners receive a clear applicant summary with verification details to support the final approval decision.",
  },
  {
    question: "How does Smart Key help fill vacant rental units quickly?",
    answer:
      "Our tenant placement process reduces rental vacancy through fast lead response, pre-screening, efficient showings, and quick turnaround once applications are complete, helping qualified tenants move in faster.",
  },
   {
    question: "Does Smart Key follow Fair Housing rules during tenant screening?",
    answer:
      "Yes. Our tenant screening process follows fair housing requirements and applies consistent criteria, avoiding discrimination based on protected classes while aligning with applicable federal, state, and local regulations.",
  },
   {
    question: "What happens if an applicant is denied after a background or credit report?",
    answer:
      "If a decision involves consumer report information, appropriate adverse-action communication is provided along with steps for the applicant to review or dispute the report, based on applicable regulations.",
  },
  {
    question: "How does Smart Key handle multiple rental applications at once?",
    answer:
      "We follow a structured workflow to review completed applications, verify documentation, and present qualified candidates clearly to the owner for a transparent approval decision.",
  },
  {
    question: "Who makes the final approval decision on a rental application at Smart Key?",
    answer:
      "The property owner makes the final approval decision. Smart Key provides an organized screening summary with verification details to support that choice.",
  },
];

const TenantScreeningPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Teana Hero */}
      <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793205077/Tenant_Screening_SmartKey.avif"
          alt="Tenant Screening"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07172a]/75"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">
          
          <p className="text-white/70 text-sm sm:text-base">
            Home / Services / Tenant Screening
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Tenant Screening & <br /> Placements
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Tenant Screening & Placement Services <br /> for Residential
            Landlords
          </h2>

          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Placing the wrong tenant can lead to missed rent, costly turnover and avoidable legal complications. <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/">Smart Key Property Management</a> approaches tenant screening services and placement with a structured, disciplined process designed to protect rental income and reduce unnecessary vacancy.
          </p>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            To ensure the highest quality of residents, we utilize AppFolio's advanced tenant screening services, which provide instant, data-driven insights including credit, criminal, and eviction history to help us make secure, informed leasing decisions; please note that these screenings incur an additional per-applicant fee, which is processed directly through the platform.
          </p>
          <div className="mt-8 flex justify-center">
            <a
                href="/contact-us"
                className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
            >
                Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
      
      {/* Professional Screening */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
              Why Professional Tenant Screening Matters
            </h2>

            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Tenant screening is not a routine administrative step; it directly impacts rental income stability, legal exposure and long-term property performance. A weak screening process increases the likelihood of financial disruption and operational stress for property owners.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {professionalItems.map((card, index) => (
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

      {/* Vacancy Section */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Reduce Vacancy With Structured Tenant Placement
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Vacancy reduces <a className="text-blue-500 hover:underline" href="/services/rent-collection-and-arrears-recovery">rental collection</a> and increases operating pressure. Sapproaches tenant placement with a system designed to keep units occupied while maintaining strict screening standards. Our placement workflow prioritizes consistent lead flow, timely communication and structured coordination to minimize unnecessary downtime between tenancies.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              {vacancyCards.map((card, index) => (
                <div
                    key={index}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                    <FeatureBlockVertical {...card} />
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Tenant Screening Process
          </h2>
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

      {/* Why Choose */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">

          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Why Choose Smart Key Property Management for
            <br /> Tenant Screening?
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Smart Key Property Management delivers structured tenant screening with documented verification, organized reporting, professional applicant communication and <a className="text-blue-500 hover:underline" href="/services/property-compliance-and-strategic-oversight">compliance-focused workflows</a>. Property owners retain final approval while we manage the evaluation process with consistency and transparency.
          </p>
          
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

      {/* Compliance */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">

          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            Compliance & Fair Housing Alignment
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Tenant screening must follow defined regulatory standards and fair housing compliance requirements. Smart Key applies consistent evaluation criteria to every applicant and documents each step of the screening process to support transparency and defensibility. Our tenant screening compliance procedures are structured to reduce risk exposure while maintaining objective, non-discriminatory review practices aligned with applicable housing regulations. 
          </p>
          <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            <li>
                <strong>1. Consistent screening criteria applied uniformly </strong>
            </li>
            <li>
                <strong>2. Documented verification and evaluation workflow </strong>
            </li>
            <li>
                <strong>3. Structured communication aligned with compliance standards </strong>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">

          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Move-In Coordination & Lease Execution
          </h2>
          
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Approval is only part of the process. Smart Key ensures the transition from screening to tenancy is organized and documented. Lease preparation and execution are finalized with clear terms and proper documentation. Move-in funds are confirmed before possession is granted. Tenant onboarding communication sets expectations early, reducing misunderstandings and operational friction from day one. This structured move-in process supports smoother lease commencement and long-term tenancy stability.
          </p>

          <div className="w-full flex justify-center mt-10">
            <a
                href="/contact-us"
                className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
                Start Lease Process
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ 
          title="Frequently Asked Question"
          data={faqData}
      />
      
      {/* Footer CTA */}
      <FooterCTA 
          backgroundSrc={'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/Footer_SamrtKey.avif'}
          title={'Own Property? We Make Managing It Effortless.'}
          buttonText='Schedule Free Consultation'
          buttonLink='/contact-us'
      />
    </main>
  );
};

export default TenantScreeningPage;