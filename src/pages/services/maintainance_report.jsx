import React from "react";
import FAQ from "@/components/faq";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import FeatureBlock from "@/components/featureBlock/FeatureBlock";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const maintenanceItems = [
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208183/Maintenance_Software_SmartKey_result.avif",
    title: "Delayed Repairs & Rising Costs",
    text: "When maintenance issues are addressed late, minor problems can quickly turn into major repairs. Leaks, electrical issues, or equipment failures often become more expensive when ignored. Effective property maintenance for landlords ensures repairs are identified early and handled before costs escalate.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208181/Maintenance_Reputation_SmartKey_result.avif",
    title: "Tenant Satisfaction & Response Expectations",
    text: "Tenants expect maintenance requests to be handled promptly and professionally. Slow responses or unclear communication can create frustration and lead to higher tenant turnover. Organized maintenance coordination for rental properties helps ensure requests are tracked, scheduled, and resolved without unnecessary delays.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208177/Maintenance_Earning_SmartKey_result.avif",
    title: "Protecting Property Value & Operational Stability",
    text: "Consistent maintenance protects the long-term condition of rental units and common areas. A structured approach to property management maintenance services helps landlords maintain building standards, reduce operational stress and preserve the value of their investment over time.",
  },
];

const coordinationCards = [
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208182/Maintenance_Rpa_SmartKey_result.avif",
    title: "Maintenance Request Intake & Evaluation",
    text: "Every repair begins with a structured request intake process. Tenants report maintenance issues through our system, allowing us to document the problem, review details, and begin tenant maintenance request management quickly. This organized intake process helps ensure maintenance issues are properly recorded before repair coordination begins.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208180/Maintenance_Constructor_SmartKey_result.avif",
    title: "Contractor Scheduling & Property Repair Coordination",
    text: "Once a request is reviewed, we manage property repair coordination by scheduling qualified contractors for inspection or repair. Our team communicates with vendors, confirms availability and coordinates repair timelines to ensure work is completed efficiently while minimizing disruption to tenants and property operations.",
  },
  {
    icon: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208179/Maintenance_Tracking_SmartKey_result.avif",
    title: "Repair Tracking & Owner Communication",
    text: "Throughout the repair process, maintenance progress is tracked and documented to ensure work moves forward without delays. Property owners receive clear updates on repair status, vendor activity and completion timelines, creating a transparent maintenance workflow that supports organized property management operations.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Streamlined Maintenance with AppFolio",
    text: "At Smart Key Property Management, we utilize AppFolio as our centralized maintenance hub to ensure every service request is handled with speed, transparency, and accountability. When a resident submits a maintenance issue through their secure online portal or via text and phone AppFolio automatically generates a digital work order, eliminating the need for manual tracking or paper trails.",
    side: "right",
  },
  {
    no: "02",
    title: "Assessment & Prioritization",
    text: "Once a request is received, the issue is reviewed and categorized based on urgency and repair complexity. This evaluation process supports effective maintenance management for rental units, allowing urgent problems to be addressed quickly while scheduling routine repairs in a structured timeline.",
    side: "left",
  },
  {
    no: "03",
    title: "Vendor Coordination",
    text: "After assessment, our team schedules qualified contractors to inspect or repair the issue. Before starting any repair or maintenance work, we confirm the details with the property owner to ensure they are fully updated and approve the necessary maintenance. This stage supports efficient rental property repair management, ensuring vendors are coordinated properly and repairs are handled by professionals with the right expertise.",
    side: "right",
  },
  {
    no: "04",
    title: "Repair Completion Verification",
    text: "Once work is completed, the repair is verified to confirm the issue has been properly resolved. This step ensures that maintenance tasks meet expected standards before the request is officially closed.",
    side: "left",
  },
  {
    no: "05",
    title: "Documentation & Owner Updates",
    text: "All maintenance activity is documented and summarized for property owners. Repair details, vendor activity and completion updates are recorded to maintain clear visibility into ongoing maintenance operations.",
    side: "right",
  },
];

const whyCards = [
  "Organized maintenance coordination",
  "Tenant Communication Support",
  "Reliable vendor network",
  "Clear documentation and reporting",
  "Structured workflow that reduces operational stress",
];

const faqData = [
  {
    question: "How do property maintenance services work for landlords?",
    answer:
      "Property maintenance services coordinate repairs, vendor scheduling, maintenance requests and repair tracking through a structured system that helps landlords manage property issues efficiently.",
  },
  {
    question: "How does Smart Key handle maintenance requests from tenants?",
    answer:
      "Smart Key records maintenance requests, evaluates urgency, schedules qualified contractors and tracks repairs until completion while keeping property owners informed throughout the process.",
  },
  {
    question:
      "What types of maintenance issues does Smart Key coordinate for rental properties?",
    answer:
      "Smart Key coordinates plumbing, electrical, appliance and general building repairs while managing contractor scheduling, repair progress, and completion verification for rental properties.",
  },
  {
    question: "How does maintenance coordination help reduce repair costs?",
    answer:
      "Early repair coordination prevents small issues from becoming expensive problems, helping landlords reduce emergency repairs and manage maintenance more efficiently.",
  },
  {
    question: "How does Smart Key coordinate contractors and repair vendors?",
    answer:
      "Smart Key schedules qualified contractors, coordinates repair timelines, verifies work completion and documents maintenance activity so property owners maintain clear oversight of repairs.",
  },
  {
    question:
      "Why is professional maintenance management important for rental properties?",
    answer:
      "Professional maintenance management ensures repairs are handled quickly, communication stays organized and rental properties remain well-maintained while protecting long-term property value.",
  },
];

const MaintenanceServicesPage = () => {
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

            <span className="text-[#9ddff5]">Property Maintenance</span>
          </nav>

          <span className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Property Maintenance &
            <br className="hidden sm:block" />
            Resident Services
          </span>
        </div>
      </section>

      <section className="px-5 pt-14 pb-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Property Maintenance & Resident Services for Rental Properties
          </h1>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Maintaining a rental property requires consistent coordination,
            timely repairs, and organized communication between owners{" "}
            <a
              className="text-blue-500 hover:underline"
              href="/services/tenant-screening-and-placement"
            >
              tenants
            </a>{" "}
            and service providers. Without a structured system, maintenance
            issues can quickly lead to delays, rising repair costs, and tenant
            dissatisfaction. Reliable property maintenance services help
            landlords protect property conditions while keeping operations
            stable and predictable.
          </p>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Smart Key provides professional rental property maintenance services
            designed specifically for residential landlords. As your property
            management partner, Smart Key facilitates all maintenance needs by
            dispatching our network of pre-vetted, experienced service providers
            to handle repairs efficiently and on schedule.
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

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
              Why Maintenance Management Matters for Rental Properties
            </h2>
            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Property maintenance is not simply a repair task handled when
              problems appear. It directly affects tenant satisfaction,
              operating costs and long-term property conditions. Without
              structured maintenance coordination, small issues can escalate
              into expensive repairs and operational disruptions for property
              owners.
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
              Our Property Maintenance Coordination System
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Managing maintenance across rental properties requires more than
              responding to repair calls.{" "}
              <a className="text-blue-500 hover:underline" href="/">
                Smart Key
              </a>{" "}
              operates as a structured{" "}
              <strong>property maintenance company</strong> that coordinates
              maintenance requests, contractor scheduling and repair tracking
              through an organized workflow. Our system ensures maintenance
              issues are addressed efficiently while keeping property owners
              informed throughout the process.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              {coordinationCards.map((feature, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <FeatureBlockVertical {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            Our Maintenance Process
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
        <div className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Why Landlords Choose Smart Key Property Management
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
            Maintenance Request Handling & Resident Support
          </h2>

          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Maintenance requests from tenants require clear reporting, timely
            coordination and consistent follow-through. Smart Key manages tenant
            maintenance request management through an organized workflow that
            records repair requests, communicates with residents, schedules
            contractors and tracks each issue until completion. Our structured
            approach ensures reliable maintenance coordination for tenants,
            helping resolve problems efficiently while keeping property owners
            informed and maintenance operations organized.
          </p>
          <div className="w-full flex justify-center mt-10">
            <a
              href="/contact-us"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
              Get in Touch
            </a>
          </div>
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
        title="Property Management Maintenance Services NYC | Smart Key"
        description="Keep rental repairs organized with Smart Key’s property management maintenance services in NYC, including tenant requests, vendor coordination, repair tracking and owner updates."
      />
    </main>
  );
};

export default MaintenanceServicesPage;
