import React from "react";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import FAQ from "@/components/faq";
import FeatureBlock from "@/components/featureBlock/FeatureBlock";
import { motion } from "framer-motion";

const includeItems = [
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208166/Lease_Task-Check_SmartKey_result.avif',
    title: "Lease Preparation & Documentation",
    text: "Lease administration involves more than preparing agreements. A structured process helps landlords manage renewals, tenant communication, documentation and lease tracking without operational gaps or missed timelines.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208165/Lease_3_SmartKey_result.avif',
    title: "Lease Renewal Coordination",
    text: "Renewal timelines are tracked proactively to avoid delays and vacancy gaps. Structured lease renewal management helps streamline tenant communication, renewal approvals and updated lease processing.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208164/Lease_4_SmartKey_result.avif',
    title: "Tenant Communication & Follow-Ups",
    text: "Consistent communication helps ensure tenants receive renewal notices, documentation requests and follow-up updates on time, reducing confusion and delayed responses.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208167/Lease_5_SmartKey_result.avif',
    title: "Compliance & Lease Tracking",
    text: "A structured lease tracking system helps monitor active leases, renewal dates and documentation status while supporting better lease compliance and operational oversight across rental properties.",
  },
];

const riskCards = [
  {
    icon: "1",
    title: "Missed Renewal Timelines",
    text: "Without organized lease tracking and proactive renewal monitoring, important deadlines can easily be missed, increasing the chances of unexpected vacancies, delayed renewals, tenant uncertainty and unnecessary interruptions in rental income.",
  },
  {
    icon: "2",
    title: "Vacancy & Income Disruptions",
    text: "Slow renewal coordination and delayed tenant communication can leave rental units vacant for longer periods, creating inconsistent cash flow, avoidable income gaps and additional operational pressure for landlords.",
  },
  {
    icon: "3",
    title: "Disorganized Lease Documentation",
    text: "Handling lease agreements, tenant records, renewal paperwork and supporting documents without a structured system often leads to missing information, administrative confusion, delayed processing and ongoing operational inefficiencies.",
  },
  {
    icon: "4",
    title: "Delayed Tenant Communication",
    text: "Late responses, inconsistent follow-ups and missed tenant notices create communication gaps that can lead to tenant frustration, renewal delays, misunderstandings and reduced operational consistency across rental properties.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Lease Setup and Data Entry",
    text: "Once a lease is signed, all tenant details, lease terms, deposits, and documentation are properly entered and organized. Accurate setup helps ensure billing, notices, and lease tracking remain consistent throughout the rental cycle.",
    side: "right",
  },
  {
    no: "02",
    title: "Ongoing Lease Administration",
    text: "During the lease term, rent tracking, tenant communication, maintenance coordination through structured property maintenance services, and compliance monitoring are managed through a structured process. Consistent administration helps reduce disputes and keeps operations organized.",
    side: "left",
  },
  {
    no: "03",
    title: "Pre-Renewal Review and Strategy (150-90 Days Before Expiry)",
    text: "Before renewal periods begin, lease performance, payment history, tenant records and market conditions are reviewed to determine the next steps. This helps prepare renewal strategies early and avoid unnecessary vacancy risks.",
    side: "right",
  },
  {
    no: "04",
    title: "Renewal Offer, Follow-Up and Decision (90-0 Days Before Expiry)",
    text: "Renewal notices are sent within the required timeline while tenant responses, follow-ups and lease decisions are actively tracked. Backup planning for re-leasing is also prepared if the tenant decides not to renew.",
    side: "left",
  },
  {
    no: "05",
    title: "Execution, Turnover, and Post-Renewal Administration",
    text: "Once finalized, lease renewals, updated records and documentation are processed and organized within the system. If a tenant moves out, turnover coordination and unit preparation are handled to support faster re-renting.",
    side: "right",
  },
];

const smartKeyCards = [
  "Proactive Renewal Tracking",
  "Organized Tenant Communication",
  "Documentation Management",
  "Compliance Oversight",
  "Coordinated Support for Landlords"
];

const faqData = [
  {
    question: "What are lease administration services for rental properties?",
    answer:
      "Lease administration services help manage lease agreements, renewal timelines, tenant communication, documentation and lease tracking throughout the rental cycle. A structured process helps landlords maintain organized operations and reduce administrative gaps.",
  },
  {
    question: "How does lease renewal management work?",
    answer:
      "Lease renewal management involves tracking lease expiration dates, coordinating tenant communication, sending renewal notices and managing updated agreements within the required timeline. This helps reduce vacancy risks and keeps rental operations more consistent.",
  },
   {
    question: "Why is lease tracking important for landlords?",
    answer:
      "Lease tracking helps landlords monitor active agreements, renewal dates, tenant records and documentation status in one organized system. Proper tracking reduces missed deadlines, operational confusion and unexpected lease-related issues.",
  },
   {
    question: "How does Smart Key handle lease renewals in NYC?",
    answer:
      "Smart Key manages lease renewals through a structured process that includes proactive timeline tracking, tenant coordination, renewal follow-ups and organized documentation handling to support smoother rental operations across NYC properties.",
  },
  {
    question: "What happens if lease renewals are delayed?",
    answer:
      "Delayed lease renewals can increase vacancy risks, create tenant uncertainty, disrupt rental income and lead to operational gaps. Without proper coordination, missed timelines often result in avoidable leasing and communication issues.",
  },
];

const LeaseAdministrationPage = () => {
  return (
    <main className="bg-white text-[#17395f]">
      
      {/* Rent Hero */}
      <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
          <img
              src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208169/Lease-Hero-Image_SmartKey.avif"
              alt="Rent Hero"
              className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#07172a]/75"></div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">
              <p className="text-white/70 text-sm sm:text-base">
                  Home / Lease Administration & Renewals
              </p>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Lease Administration & Renewals
              </h1>
          </div>
      </section>

      {/* Lease  */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Lease Administration & Renewal Services for Rental Properties in NYC
          </h1>

          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            Managing a lease for your NYC rental property goes beyond just getting it signed. It requires you to stay on top of the timelines for renewals, all tenant communications, ensuring compliance by the tenant, documentation tracking and follow-up to fit within the established timelines. You should be doing all of these things consistently to minimize the chance of delays, disputes, loss of rent, loss of rental income and tenant-related payment issues, etc. You should also set up an organizational system for these activities to help you minimize (even small) problems relating to coordination becoming bigger problems over time.
          </p>
          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            Smart Key is a premier provider of organised lease administration services. NYC property owners can rely on. Property owners can rely on Smart Key for the effective management of their leasing business by using <a href="/" className="text-blue-500 hover:underline">Smart Key Property Management</a> services created for all NYC leased properties. Smart Key's software for lease administration will assist owners with the creation of a lease, coordinating renewals, tracking upcoming lease expirations, communicating with existing tenants and maintaining lease documentation with a systematic workflow to ensure compliance. The result will yield an organized, compliant, predictable method of managing your rental business with significantly less daily administrative burden on you (as the property owner).
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

      {/* Lease Actually Includes */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          {/* Section Heading */}
          <div className="text-center">

            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              What Lease Administration Actually Includes
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Lease administration involves more than preparing agreements. A structured process helps landlords manage renewals, tenant communication, documentation and lease tracking without operational gaps or missed timelines.
            </p>

          </div>

          <div className="mt-8 space-y-4">
            {includeItems.map((card, index) => (
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

      {/* Missed Lease Renewals */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          <div className="text-center">

            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Managing Lease Renewals and Tenant Agreements Requires More Than Just Paperwork
            </h2>
          </div>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
             The management of <a className="text-blue-500 hover:underline" href="/services/rent-collection-and-arrears-recovery">rental</a> properties on a concise basis relies heavily on the rental lease administration process. Many landlords experience delays in renewal responses, communication gaps with tenants, unsuccessful documentation of lease documents and failures in lease coordination and tracking tenant interactions across multiple units, all of which can result in below-average occupancy and overall operational stability.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            The implementation of these types of best practices will help to ensure that landlords have the support they need to operate effectively, with decreased expenses as well as reduced tenant-related delay and disruption.
          </p>
        </div>
      </section>

      {/* Difficult Cards */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center">

            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Where Lease Management Becomes Difficult for <br/>Property Owners
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Without structured systems, lease handling quickly becomes difficult to manage across multiple tenants and renewal cycles. Small gaps in communication or tracking often lead to larger operational issues over time.
            </p>
          </div>
          {/* Points  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            
            {riskCards.map((card, index) => (
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
      
      {/* Process */}
      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
            How the Lease Administration Process Should<br /> Work
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

      {/* Smart Key Handles */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">

                <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
                    How Smart Key Handles Lease Administration & <br/>Renewals
                </h2>

                <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
                    Smart Key manages lease administration through a structured system designed to keep renewals, tenant communication and documentation organized across rental properties. Our process helps landlords maintain operational consistency, reduce missed timelines and simplify day-to-day lease coordination.
                </p>

                {/* Why Choose Smart Key Cards */}
                <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
                    {smartKeyCards.map((item, index) => (
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
                        href="/pricing"
                        className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
                    >
                        Pricing Plan
                    </a>
                </div>

            </div>
        </section>

      {/* Final Info */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
          
          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            What This Means for Property Owners
          </h2>
          
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Handling several properties as a landlord can be overwhelming. With the help of well-organized lease administration processes, landlords can operate with much more efficiency over time, instead of having to handle everything on their own. Organized lease administration allows for effective management of lease renewals, communication with tenants, and tracking of documentation; therefore, when landlords have organization in place, they experience fewer missed deadlines, reduced vacancy rates and more consistency with their rental income.
          </p>
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">          
            Additionally, coordinated efforts will reduce confusion in the day-to-day operations of landlords managing multiple leases, which often leads to added stress. With organized lease administration, landlords who own multiple properties will benefit from improved operational consistency across the units they own and, in turn, will provide a better overall tenant experience.
          </p>
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">  
            In addition, having a process in place makes it easier to have a more successful <a className="text-blue-500 hover:underline" href="/services/tenant-screening-and-placement">tenant screening and placement</a> process, while also ensuring that all needed documentation is accurate, available, and properly coordinated.
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

export default LeaseAdministrationPage;