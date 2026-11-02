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

const maintenanceItems = [
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9281bfc93cf72c3754e_software.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9281bfc93cf72c3754e_software-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9281bfc93cf72c3754e_software.png 512w"></img>,
    title: "Delayed Repairs & Rising Costs",
    text: "When maintenance issues are addressed late, minor problems can quickly turn into major repairs. Leaks, electrical issues, or equipment failures often become more expensive when ignored. Effective property maintenance for landlords ensures repairs are identified early and handled before costs escalate.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9289b4fccd2c7c523b6_reputation.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9289b4fccd2c7c523b6_reputation-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b1b9289b4fccd2c7c523b6_reputation.png 512w"></img>,
    title: "Tenant Satisfaction & Response Expectations",
    text: "Tenants expect maintenance requests to be handled promptly and professionally. Slow responses or unclear communication can create frustration and lead to higher tenant turnover. Organized maintenance coordination for rental properties helps ensure requests are tracked, scheduled, and resolved without unnecessary delays.",
  },
  {
    icon: <img href="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c20dbf28e2a261ffad64_earning.png" srcSet="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c20dbf28e2a261ffad64_earning-p-500.png 500w, https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69a9c20dbf28e2a261ffad64_earning.png 512w"></img>,
    title: "Protecting Property Value & Operational Stability",
    text: "Consistent maintenance protects the long-term condition of rental units and common areas. A structured approach to property management maintenance services helps landlords maintain building standards, reduce operational stress and preserve the value of their investment over time.",
  },
];

const coordinationCards = [
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19da599b41b24a3d1bb85_rpa.png"></img>,
    title: "Maintenance Request Intake & Evaluation",
    text: "Every repair begins with a structured request intake process. Tenants report maintenance issues through our system, allowing us to document the problem, review details, and begin tenant maintenance request management quickly. This organized intake process helps ensure maintenance issues are properly recorded before repair coordination begins.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19dc66d363ccd0af351ca_constructor.png"></img>,
    title: "Contractor Scheduling & Property Repair Coordination",
    text: "Once a request is reviewed, we manage property repair coordination by scheduling qualified contractors for inspection or repair. Our team communicates with vendors, confirms availability and coordinates repair timelines to ensure work is completed efficiently while minimizing disruption to tenants and property operations.",
  },
  {
    icon: <img src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/69b19ddaa80af3efb75d8fc4_tracking%20(1).png"></img>,
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
    answer: "Property maintenance services coordinate repairs, vendor scheduling, maintenance requests and repair tracking through a structured system that helps landlords manage property issues efficiently.",
  },
  {
    question: "How does Smart Key handle maintenance requests from tenants?",
    answer: "Smart Key records maintenance requests, evaluates urgency, schedules qualified contractors and tracks repairs until completion while keeping property owners informed throughout the process.",
  },
   {
    question: "What types of maintenance issues does Smart Key coordinate for rental properties?",
    answer: "Smart Key coordinates plumbing, electrical, appliance and general building repairs while managing contractor scheduling, repair progress, and completion verification for rental properties.",
  },
   {
    question: "How does maintenance coordination help reduce repair costs?",
    answer: "Early repair coordination prevents small issues from becoming expensive problems, helping landlords reduce emergency repairs and manage maintenance more efficiently.",
  },
  {
    question: "How does Smart Key coordinate contractors and repair vendors?",
    answer: "Smart Key schedules qualified contractors, coordinates repair timelines, verifies work completion and documents maintenance activity so property owners maintain clear oversight of repairs.",
  },
  {
    question: "Why is professional maintenance management important for rental properties?",
    answer: "Professional maintenance management ensures repairs are handled quickly, communication stays organized and rental properties remain well-maintained while protecting long-term property value.",
  },
];

const MaintenanceServicesPage = () => {
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
            Home / Services / Property Maintenance
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
            Property Maintenance & Resident Services for Rental
            Properties
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Maintaining a rental property requires consistent coordination, timely repairs, and organized communication between owners, <a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/services/tenant-screening-and-placement">tenants</a>  and service providers. Without a structured system, maintenance issues can quickly lead to delays, rising repair costs, and tenant dissatisfaction. Reliable property maintenance services help landlords protect property conditions while keeping operations stable and predictable. <br /><br />
            Smart Key provides professional rental property maintenance services designed specifically for residential landlords. As your property management partner, Smart Key facilitates all maintenance needs by dispatching our network of pre-vetted, experienced service providers to handle repairs efficiently and on schedule.
          </p>
          <button className="mt-7 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
            <a href="/contact">Schedule Free Consultation</a>
          </button>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Maintenance Management Matters for Rental Properties
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm text-gray-600 leading-relaxed">
            Property maintenance is not simply a repair task handled when problems appear. It directly affects tenant satisfaction, operating costs and long-term property conditions. Without structured maintenance coordination, small issues can escalate into expensive repairs and operational disruptions for property owners.
          </p>

          <div className="mt-8 space-y-4">
            {maintenanceItems.map((card, index) => (
              <div
                key={index}
                className="bg-[#dff6ff] border border-[#7ed8ff] rounded-md p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start text-left"
              >
                <div className="w-23 h-23 rounded bg-white text-[#1f83c5] flex items-center justify-center shrink-0">
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
            Our Property Maintenance Coordination System
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-600 leading-relaxed">
            Managing maintenance across rental properties requires more than responding to repair calls. <a className="text-blue-500 hover:underline" href="/">Smart Key</a> operates as a structured <strong>property maintenance company</strong> that coordinates maintenance requests, contractor scheduling and repair tracking through an organized workflow. Our system ensures maintenance issues are addressed efficiently while keeping property owners informed throughout the process.
          </p>
          <div className="flex grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {coordinationCards.map((card, index) => (
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

      <section className="px-5 py-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Why Landlords Choose Smart Key Property Management
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
              Maintenance Request Handling & Resident Support
            </h2>
            <p className="max-w-4xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
              Maintenance requests from tenants require clear reporting, timely coordination and consistent follow-through. Smart Key manages tenant maintenance request management through an organized workflow that records repair requests, communicates with residents, schedules contractors and tracks each issue until completion. Our structured approach ensures reliable maintenance coordination for tenants, helping resolve problems efficiently while keeping property owners informed and maintenance operations organized.
            </p>
            <button className="mt-8 mb-10 inline-flex items-center gap-2 bg-[#1f83c5] text-white text-xs md:text-sm px-7 py-3 rounded hover:bg-[#176da6] transition">
              <a href="/contact-us">Get in Touch</a>
            </button>
          </section>
        </div>
      </section>
      <section>
          <div>
              <FAQ 
              title="Frequently Asked Question"
              data={faqData}
              />
          </div>
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

export default MaintenanceServicesPage;