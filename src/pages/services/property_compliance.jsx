
import React from "react";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import {
  Wrench,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
  Hammer,
  Home,
  CalendarCheck,
  Phone,
} from "lucide-react";
import SEO from "@/components/seo/SEO";

const maintenanceItems = [
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd3740406f3667a52659b2_FinanceTransaction.png"></img>,
    title: "Missed Violations & Compliance Issues",
    text: "Unaddressed violations can lead to escalating penalties, inspection failures and unnecessary regulatory complications. Ongoing monitoring helps identify issues before they become costly problems.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd38b72549797bfc5b694f_IncomeTracking.png"></img>,
    title: "Missed Regulatory Deadlines",
    text: "Many landlord requirements involve specific deadlines for inspections, filings, certifications and corrective actions. Missing these deadlines can result in fines and additional administrative burdens.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd366a835cbb54a42ceef2_CostControl.png"></img>,
    title: "Unexpected Expenses & Penalties",
    text: "Compliance-related issues often create avoidable costs through fines, emergency repairs, legal concerns and delayed corrective work. Proactive oversight helps reduce these financial surprises.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd35484594e615d1896a06_PerformanceInsights.png"></img>,
    title: "Operational & Liability Risks",
    text: "Failure to maintain proper documentation, inspections and compliance records can expose property owners to unnecessary operational risks and potential disputes.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69dd37ac9ae00ddce3a47e2d_AuditReadiness.png"></img>,
    title: "Protecting Long-Term Property Value",
    text: "Strong compliance practices support safer, better-maintained properties while helping landlords fulfill their ongoing responsibilities",
  },
];

const coordinationCards = [
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19da599b41b24a3d1bb85_rpa.png"></img>,
    title: "Compliance Monitoring & Violation Resolution",
    text: "Continuous compliance monitoring allows for the identification, tracking and resolution of issues before they become larger regulatory concerns. These include HPD compliance oversight, DOB, ECB, FDNY and DEP violations, support for required filings and corrective measures.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19dc66d363ccd0af351ca_constructor.png"></img>,
    title: "Tenant & Property Compliance Management",
    text: "Rental Property Compliance Management Coordinating inspections, record keeping, resolving compliance issues with tenants and ensuring that the required documentation is organized and supporting lease administration and renewals. Proper documentation management makes audits, inspections and regulatory reviews easier.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19ddaa80af3efb75d8fc4_tracking%20(1).png"></img>,
    title: "Strategic Oversight & Asset Protection",
    text: "Long term property performance is all about proactive planning. This includes planning for preventive maintenance, overseeing vendors and contractors, coordinating capital improvements and planning reserves to protect assets while supporting operational stability.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19ddaa80af3efb75d8fc4_tracking%20(1).png"></img>,
    title: "Risk Management & Emergency Response",
    text: "One of the key aspects of good property management is knowing how to identify potential problems before they become costly headaches. This includes risk assessments, environmental and lead paint compliance awareness, mitigation planning and coordinated emergency response to urgent compliance issues.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19ddaa80af3efb75d8fc4_tracking%20(1).png"></img>,
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
    answer: "Property compliance helps rental property owners stay aligned with regulatory requirements, inspection obligations and documentation standards. A proactive compliance approach can reduce the risk of violations, avoid costly penalties, improve operational visibility and support stronger long-term property performance.",
  },
  {
    question: "Why is compliance monitoring important for landlords?",
    answer: "Compliance monitoring helps landlords stay ahead of deadlines, inspections, regulatory changes and potential violations. A proactive approach can reduce costly penalties, improve operational visibility and support better long-term property management.",
  },
   {
    question: "What types of property violations does Smart Key help manage?",
    answer: "Smart Key assists with monitoring and coordinating the resolution of various compliance-related issues, including HPD matters, DOB, ECB, FDNY, DEP violations, inspection-related concerns and other regulatory compliance requirements affecting rental properties.",
  },
   {
    question: "How does strategic oversight help reduce operating costs?",
    answer: "Strategic oversight helps identify inefficiencies before they become larger expenses. Through proactive planning, vendor coordination, compliance management, expense reviews and operational monitoring, property owners can reduce avoidable costs and improve overall performance.",
  },
  {
    question: "How can proactive compliance management protect property value?",
    answer: "Proactive compliance management helps prevent violations, supports timely maintenance, improves operational control and reduces long-term risk. By addressing issues early and maintaining regulatory alignment, property owners are better positioned to protect and preserve property value over time.",
  },
];

const PropertyComplianceSection = () => {
  return (
    <main className="bg-white text-[#17395f]">
      <section className="relative h-[540px] overflow-hidden flex items-center">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc2fc5a5a6ed10469b92b7_maintainance.avif"
          alt="Property Maintenance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07172a]/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <p className="text-white/75 text-xs mb-4">
            Home / Services / Property Compliance & Strategic Oversight
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Property Maintenance &
            <br />
            Resident Services
          </h1>
        </div>
      </section>

      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#2f79b7] font-semibold mb-3">
            Property Maintenance & Resident Services for Rental Properties
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Property Compliance & Strategic Oversight Services for Rental Properties
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Owning and operating rental property involves more than responding to violations when they appear. Effective property compliance requires ongoing oversight, regular monitoring, documentation management and proactive planning to help properties remain aligned with changing regulations and operational requirements. Without a structured approach, small compliance issues can quickly develop into larger risks that affect property performance, tenant satisfaction and long-term asset value. <br /><br />
            Smart Key provides organized property compliance and strategic oversight services designed to help landlords stay ahead of potential issues rather than reacting to them after they occur. Through ongoing compliance monitoring, property inspections, risk management practices and operational oversight, we help support rental property compliance while reducing avoidable disruptions and maintaining greater stability across rental portfolios.
          </p>
          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/contact">Request a Free Property Consultation</a>
          </button>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Property Compliance Matters for Landlords
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Property compliance is not simply about resolving violations after they appear. It plays a direct role in protecting property value, controlling operating costs and helping landlords meet ongoing regulatory obligations. Without structured oversight, small compliance issues can quickly turn into larger operational and financial challenges.
          </p>
          <div className="mt-8 space-y-4">
            {maintenanceItems.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start text-left"
              >
                <div className="w-32 h-32 rounded bg-white text-[#1f83c5] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">
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
            What Property Compliance & Strategic Oversight Includes
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Effective property compliance is more than just reacting to violations. It's ongoing monitoring, documentation, planning and oversight to ensure the properties remain compliant, protected and operationally stable over the long term.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {coordinationCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col gap-4 items-start text-left"
              >
                <div className="w-32 h-32 flex text-[#1f83c5] items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">
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

      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Choose Smart Key Property Management for Property Compliance & Strategic Oversight?
          </h2>
          <div className="flex gap-4 mt-8">
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
          <section>
            <h2 className=" text-xl md:text-3xl font-bold">
              Protecting Property Value Through Strategic Oversight
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
              Successful property ownership requires more than responding to issues as they occur. Long-term performance depends on proactive oversight, ongoing planning and effective compliance management. Staying ahead of regulatory obligations, monitoring compliance requirements and addressing potential concerns early helps reduce avoidable violations and operational disruptions. Strategic oversight also includes long-term asset planning, capital improvement coordination, vendor and contractor management and project supervision to help properties remain well-maintained and positioned for future growth. <br /><br />
              Beyond operational coordination, structured oversight supports stronger financial performance through expense reviews, utility audits and the identification of cost-saving opportunities. By combining compliance monitoring, strategic planning and operational management, property owners gain better visibility into their assets while reducing risk and supporting long-term property value and performance.
            </p>
            <button className="mt-8 mb-10 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
              <a href="/contact">Start Lease Process</a>
            </button>
          </section>
        </div>
      </section>
      <section className="px-5 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            A Proactive Approach Helps Protect Property Value
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-md text-gray-600 leading-relaxed">
            Effective property compliance is not just about avoiding violations it plays a critical role in protecting the long-term performance and value of a rental property. A proactive approach allows landlords to identify potential issues early, maintain stronger operational control and make more informed decisions before small problems become costly challenges. <br /><br />
            <ul className="font-bold text-md text-left list-disc ml-39">
              <li>Reduced risk of violations, fines and regulatory issues.</li>
              <li>Better visibility into compliance status and property operations.</li>
              <li>Lower operating costs through proactive issue management.</li>
              <li>Stronger control over documentation, inspections and oversight.</li>
              <li>Protects long-term property value through consistent rental property compliance.</li>
              <li>Supports stronger <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/services/tenant-screening-and-placement">tenant screening and placement</a> for greater tenancy stability.</li>
            </ul>
          </p>
        </div>
      </section>
      
              <FAQ 
              title="Frequently Asked Question"
              data={faqData}
              />
            <Hero 
            title={"Own Property? We Make Managing It Effortless."}
            buttonText="Schedule Free Consultation"
            backgroundType="image"
            backgroundSrc={"https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/68dc4ab5f573a246b9215237_Footer%20main.avif"}
            buttonLink="/contact"
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