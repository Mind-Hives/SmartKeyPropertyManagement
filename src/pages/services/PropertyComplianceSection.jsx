import React from "react";
import FAQ from "@/components/common/FAQ";
import FooterCTA from "@/components/common/FooterCTA";
import FeatureBlock from "@/components/featureBlock/FeatureBlockHorizontal";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const maintenanceItems = [
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208186/Complience_Finance-Transaction_SmartKey_result.avif",
    title: "Missed Violations & Compliance Issues",
    text: "Unaddressed violations can lead to escalating penalties, inspection failures and unnecessary regulatory complications. Ongoing monitoring helps identify issues before they become costly problems.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208187/Complience_Income-Tracking_SmartKey_result.avif",
    title: "Missed Regulatory Deadlines",
    text: "Many landlord requirements involve specific deadlines for inspections, filings, certifications and corrective actions. Missing these deadlines can result in fines and additional administrative burdens.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208185/Complience_Cost-Control_SmartKey_result.avif",
    title: "Unexpected Expenses & Penalties",
    text: "Compliance-related issues often create avoidable costs through fines, emergency repairs, legal concerns and delayed corrective work. Proactive oversight helps reduce these financial surprises.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208184/Complience_Performance-Insights_SmartKey_result.avif",
    title: "Operational & Liability Risks",
    text: "Failure to maintain proper documentation, inspections and compliance records can expose property owners to unnecessary operational risks and potential disputes.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208184/Complience_Audit-Readiness_SmartKey_result.avif",
    title: "Protecting Long-Term Property Value",
    text: "Strong compliance practices support safer, better-maintained properties while helping landlords fulfill their ongoing responsibilities",
  },
];

const coordinationCards = [
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208189/Complience_Rpa_SmartKey_result.avif",
    title: "Compliance Monitoring & Violation Resolution",
    text: "Continuous compliance monitoring allows for the identification, tracking and resolution of issues before they become larger regulatory concerns. These include HPD compliance oversight, DOB, ECB, FDNY and DEP violations, support for required filings and corrective measures.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208190/Complience_Constructor_SmartKey_result.avif",
    title: "Tenant & Property Compliance Management",
    text: "Rental Property Compliance Management Coordinating inspections, record keeping, resolving compliance issues with tenants and ensuring that the required documentation is organized and supporting lease administration and renewals. Proper documentation management makes audits, inspections and regulatory reviews easier.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208187/Complience_Tracking_SmartKey_result.avif",
    title: "Strategic Oversight & Asset Protection",
    text: "Long term property performance is all about proactive planning. This includes planning for preventive maintenance, overseeing vendors and contractors, coordinating capital improvements and planning reserves to protect assets while supporting operational stability.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208187/Complience_Tracking_SmartKey_result.avif",
    title: "Risk Management & Emergency Response",
    text: "One of the key aspects of good property management is knowing how to identify potential problems before they become costly headaches. This includes risk assessments, environmental and lead paint compliance awareness, mitigation planning and coordinated emergency response to urgent compliance issues.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208187/Complience_Tracking_SmartKey_result.avif",
    title: "Cost Control & Performance Oversight",
    text: "Strategic oversight also includes overseeing operating expenses and improving performance over the long-term. Utility reviews, insurance compliance assistance, tax assessment coordination, accounting and financial reporting, expense audits and performance reporting help property owners to make better operational decisions.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Proactive Compliance Oversight",
    text: "We continuously monitor compliance-related activities, deadlines, inspections and regulatory obligations to help identify potential issues before they become costly violations.",
    side: "right",
  },
  {
    no: "02",
    title: "Ongoing Compliance Tracking & Documentation",
    text: "Our team maintains organized records, compliance tracking systems and documentation management processes to support accurate reporting and stronger operational control.",
    side: "left",
  },
  {
    no: "03",
    title: "Vendor & Contractor Coordination",
    text: "We coordinate with qualified vendors and contractors to address corrective actions, compliance-related repairs, inspections and property improvement projects efficiently.",
    side: "right",
  },
  {
    no: "04",
    title: "Reporting & Operational Visibility",
    text: "Regular reporting helps property owners stay informed about compliance status, outstanding issues, completed actions and overall property oversight activities.",
    side: "left",
  },
  {
    no: "05",
    title: "Strategic Planning & Performance Recommendations",
    text: "Through ongoing property reviews, we provide recommendations that support long-term asset protection, risk reduction, and stronger operational performance. This approach works alongside services such as Legal Compliance, Lease Administration & Renewals, Accounting & Financial Reporting and Tenant Screening & Placement to create a more structured property management strategy.",
    side: "right",
  },
];

const whyCards = [
  "Proactive Compliance Monitoring",
  "Comprehensive Violation Management",
  "Strategic Property Oversight",
  "Risk Reduction & Asset Protection",
  "Cost Control & Financial Awareness",
  "Transparent Reporting & Owner Visibility",
];

const faqData = [
  {
    question: "How does property compliance help rental property owners?",
    answer:
      "Property compliance helps rental property owners stay aligned with regulatory requirements, inspection obligations and documentation standards. A proactive compliance approach can reduce the risk of violations, avoid costly penalties, improve operational visibility and support stronger long-term property performance.",
  },
  {
    question: "Why is compliance monitoring important for landlords?",
    answer:
      "Compliance monitoring helps landlords stay ahead of deadlines, inspections, regulatory changes and potential violations. A proactive approach can reduce costly penalties, improve operational visibility and support better long-term property management.",
  },
  {
    question: "What types of property violations does Smart Key help manage?",
    answer:
      "Smart Key assists with monitoring and coordinating the resolution of various compliance-related issues, including HPD matters, DOB, ECB, FDNY, DEP violations, inspection-related concerns and other regulatory compliance requirements affecting rental properties.",
  },
  {
    question: "How does strategic oversight help reduce operating costs?",
    answer:
      "Strategic oversight helps identify inefficiencies before they become larger expenses. Through proactive planning, vendor coordination, compliance management, expense reviews and operational monitoring, property owners can reduce avoidable costs and improve overall performance.",
  },
  {
    question: "How can proactive compliance management protect property value?",
    answer:
      "Proactive compliance management helps prevent violations, supports timely maintenance, improves operational control and reduces long-term risk. By addressing issues early and maintaining regulatory alignment, property owners are better positioned to protect and preserve property value over time.",
  },
];

const PropertyComplianceSection = () => {
  return (
    <main className="bg-white text-[#17395f]">
      {/* Property Maintenance Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208178/Maintainance-Hero-Image_SmartKey.avif"
          alt="Property Maintenance"
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

            <span className="text-[#9ddff5]">
              Property Compliance & Strategic Oversight
            </span>
          </nav>

          <span className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Property Maintenance &
            <br className="hidden sm:block" />
            Resident Services
          </span>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-center">
          <h1 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Property Compliance & Strategic Oversight Services for Rental
            Properties
          </h1>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Owning and operating rental property involves more than responding
            to violations when they appear. Effective property compliance
            requires ongoing oversight, regular monitoring, documentation
            management and proactive planning to help properties remain aligned
            with changing regulations and operational requirements. Without a
            structured approach, small compliance issues can quickly develop
            into larger risks that affect property performance, tenant
            satisfaction and long-term asset value.
          </p>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Smart Key provides organized property compliance and strategic
            oversight services designed to help landlords stay ahead of
            potential issues rather than reacting to them after they occur.
            Through ongoing compliance monitoring, property inspections, risk
            management practices and operational oversight, we help support
            rental property compliance while reducing avoidable disruptions and
            maintaining greater stability across rental portfolios.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/contact-us"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
            >
              Request a Free Property Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
              Why Property Compliance Matters for Landlords
            </h2>
            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Property compliance is not simply about resolving violations after
              they appear. It plays a direct role in protecting property value,
              controlling operating costs and helping landlords meet ongoing
              regulatory obligations. Without structured oversight, small
              compliance issues can quickly turn into larger operational and
              financial challenges.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {maintenanceItems.map((card, index) => (
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
              What Property Compliance & Strategic Oversight Includes
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Effective property compliance is more than just reacting to
              violations. It's ongoing monitoring, documentation, planning and
              oversight to ensure the properties remain compliant, protected and
              operationally stable over the long term.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              {coordinationCards.map((card, index) => (
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

      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            How Smart Key Supports Long-Term Property Performance
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

      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Why Choose Smart Key Property Management for Property Compliance &
            Strategic Oversight?
          </h2>

          {/* Why Choose Smart Key Cards */}
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

      {/* Final Info */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Protecting Property Value Through Strategic Oversight
          </h2>

          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Successful property ownership requires more than responding to
            issues as they occur. Long-term performance depends on proactive
            oversight, ongoing planning and effective compliance management.
            Staying ahead of regulatory obligations, monitoring compliance
            requirements and addressing potential concerns early helps reduce
            avoidable violations and operational disruptions. Strategic
            oversight also includes long-term asset planning, capital
            improvement coordination, vendor and contractor management and
            project supervision to help properties remain well-maintained and
            positioned for future growth.
          </p>
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Beyond operational coordination, structured oversight supports
            stronger financial performance through expense reviews, utility
            audits and the identification of cost-saving opportunities. By
            combining compliance monitoring, strategic planning and operational
            management, property owners gain better visibility into their assets
            while reducing risk and supporting long-term property value and
            performance.
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

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            A Proactive Approach Helps Protect Property Value
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Effective property compliance is not just about avoiding violations
            it plays a critical role in protecting the long-term performance and
            value of a rental property. A proactive approach allows landlords to
            identify potential issues early, maintain stronger operational
            control and make more informed decisions before small problems
            become costly challenges.
            <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
              <li>
                <strong>
                  1. Reduced risk of violations, fines and regulatory issues.
                </strong>
              </li>
              <li>
                <strong>
                  2. Better visibility into compliance status and property
                  operations.
                </strong>
              </li>
              <li>
                <strong>
                  3. Lower operating costs through proactive issue management.
                </strong>
              </li>
              <li>
                <strong>
                  4. Stronger control over documentation, inspections and
                  oversight.
                </strong>
              </li>
              <li>
                <strong>
                  5. Protects long-term property value through consistent rental
                  property compliance.
                </strong>
              </li>
              <li>
                <strong>
                  6. Supports stronger{" "}
                  <a
                    className="text-blue-500 hover:underline"
                    href="/services/tenant-screening-placement"
                  >
                    tenant screening and placement
                  </a>{" "}
                  for greater tenancy stability.
                </strong>
              </li>
            </ul>
          </p>
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
        title="Smartkey Property Compliance & Strategic Oversight"
        description="Manage your properties with confidence. Smart key provides expert property compliance services and proactive oversight to keep every detail in check."
      />
    </main>
  );
};

export default PropertyComplianceSection;
