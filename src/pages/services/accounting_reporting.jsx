import React from "react";
import FeatureBlock from "@/components/featureBlock/FeatureBlock";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import FAQ from "@/components/faq";
import { motion } from "framer-motion";
import { BarChart3,} from "lucide-react";

const includes = [
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208175/Accounting_Finance-Transaction_SmartKey_result.avif',
    title: "Financial Transaction Management & Owner Updates",
    text: "Every transaction is recorded daily and properly categorized to maintain accurate and organized financial records. This structured property management accounting approach ensures that income and expenses are always clear and up to date. Property owners also get real-time access through AppFolio, allowing full visibility into reports and ongoing financial activity.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208174/Accounting_Income-Tracking_SmartKey_result.avif',
    title: "Rent & Income Tracking",
    text: "We track rent collection consistently, monitor payments and identify delays to maintain a steady income flow. With proper rental income tracking, landlords can clearly see how and when revenue is generated.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208173/Accounting_Cost-Control_SmartKey_result.avif',
    title: "Expense Management & Cost Control",
    text: "All operational expenses are tracked and categorized, including vendor payments and recurring costs. This approach to expense management improves cost visibility and helps control spending. Monthly expense tracking for rental properties also allows comparison between actual and expected costs.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208170/Accounting_Performance-Insights_SmartKey_result.avif',
    title: "Financial Reporting, Closing & Performance Insights",
    text: "We provide monthly financial reports, including income and expense statements, supported by a structured month-end closing process. With clear property management financial reporting and monthly financial reports, owners gain better insights to make informed decisions.",
  },
  {
    icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208173/Accounting_Audit-Readiness_SmartKey_result.avif',
    title: "NY/NJ Compliance & Audit Readiness",
    text: "We maintain structured financial records aligned with local requirements to ensure compliance and audit readiness. This includes proper documentation and adherence to real estate accounting compliance standards.",
  },
];

const expenseCards = [
  {
    icon: <BarChart3 className="mx-auto text-[#1f83c5]" size={36} />,
    title: "Expense Analysis",
    text: "Expense analysis focuses on tracking and categorizing all operational costs related to property management. This includes property maintenance, utilities, vendor payments and other recurring expenses. With proper expense tracking, landlords gain clear visibility into spending patterns and can identify areas where costs can be controlled or optimized.",
  },
  {
    icon: <BarChart3 className="mx-auto text-[#1f83c5]" size={36} />,
    title: "Variance Analysis",
    text: "At Smart Key, variance analysis primarily means comparing the current bill to the previous bill, identifying any increase or decrease, and then determining whether the change is due to a price increase, higher service volume, timing differences or a one-time charge so property owners can quickly spot unusual costs and take corrective action.",
  },
];

const varianceCards = [
  {
    icon: '1',
    title: "Accurate Financial Records",
    text: "Every transaction is recorded with precision and properly categorized, reducing the risk of errors and ensuring financial data remains reliable for decision-making.",
  },
  {
    icon: '2',
    title: "Consistent Financial Tracking",
    text: "Regular tracking of income and expenses ensures that financial records stay up to date, helping property owners avoid gaps, delays or missing information.",
  },
  {
    icon: '3',
    title: "Clear Financial Visibility",
    text: "Structured reports provide a clear view of cash flow, income and expenses, allowing property owners to understand performance without relying on scattered data.",
  },
  {
    icon: '4',
    title: "Organized Financial Systems",
    text: "With the right accounting system in place, property owners gain the clarity, control, and confidence needed to manage financial performance effectively.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Setup and Onboarding",
    text: "We align your property details, financial structure and reporting requirements to set a clear foundation.",
    side: "right",
  },
  {
    no: "02",
    title: "Financial Data Organization",
    text: "All income and expense data is structured and categorized for accurate and consistent tracking.",
    side: "left",
  },
  {
    no: "03",
    title: "Daily Tracking and Updates",
    text: "Transactions are recorded regularly to maintain up-to-date financial records.",
    side: "right",
  },
  {
    no: "04",
    title: "Reconciliation and Verification",
    text: "Financial records are matched with bank statements to ensure accuracy and identify discrepancies.",
    side: "left",
  },
  {
    no: "05",
    title: "Monthly Reporting and Review",
    text: "Detailed reports are prepared and reviewed to give clear insights into financial performance.",
    side: "right",
  },
];

const faqData = [
  {
    question: "How does property management accounting help improve financial control for landlords?",
    answer:
      "Property management accounting provides clear tracking of income, expenses, and cash flow, helping landlords maintain financial control and make informed decisions based on accurate data.",
  },
  {
    question: "What type of financial data can I monitor through your reporting system?",
    answer:
      "You can monitor rent collections, expenses, vendor payments, and overall property performance through structured reports and real-time access via the owner portal.",
  },
   {
    question: "How do you ensure accuracy in financial records and reporting?",
    answer:
      "We follow a structured accounting process that includes daily tracking, proper categorization, and regular reconciliation to ensure all financial records are accurate and up to date.",
  },
   {
    question: "How are expenses tracked and managed across different properties?",
    answer:
      "Expenses are categorized, monitored and analyzed regularly to maintain cost visibility and identify areas where spending can be controlled or optimized.",
  },
  {
    question: "Can your accounting system handle multiple properties under one owner?",
    answer:
      "Yes, our system is designed to manage multiple properties efficiently, providing consolidated as well as property-level financial reporting for better oversight.",
  },
  {
    question: "How can I get started with your property management accounting services?",
    answer:
      "You can get started by contacting our team, after which we handle onboarding, system setup and financial data organization to ensure a smooth transition.",
  },
];

const AccountingReportingPage = () => {
  return (
    <main className="bg-white text-[#17395f]">

      {/* Top Hero */}
      <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208172/Accounting-Hero-Image_SmartKey.avif"
          alt="Accounting and Financial Reporting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07172a]/75"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">

          <p className="text-white/70 text-sm sm:text-base">
            Home / Accounting & Financial Reporting
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Accounting & Financial
            <br />
            Reporting
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-center">

          <h1 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Accounting & Financial Reporting for Property
            <br /> Management
          </h1>

          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Managing property finances requires accuracy, consistency and a clear system. Without proper property accounting services, it becomes difficult to track income, monitor expenses and understand the actual performance of your rental property.
          </p>
          <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
            Many landlords struggle with scattered records, delayed updates and lack of visibility into their finances. Over time, this creates confusion and makes it harder to make informed decisions. Organized financial reporting brings clarity by tracking income, expenses and overall property performance in a way that is easy to understand. This level of visibility is essential for maintaining control, improving profitability and ensuring long-term stability in property management.
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
      
      {/* What Includes */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
              What We Handle in Property Accounting
            </h2>

            <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Property accounting requires more than simple payment tracking. It includes rent records, expenses, vendor payments, owner statements and clear financial visibility.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {includes.map((card, index) => (
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

      {/* Professional Accounting */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">

          <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
            Why Professional Property Accounting Matters
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            Handling property finances without a proper system often leads to confusion, errors and inconsistent performance. With proper property accounting services, landlords gain better control over cash flow, reduce financial mistakes and improve overall property performance. Real estate accounting services reduce manual work by organizing financial data efficiently, making it easier to track income, manage expenses and maintain accurate records over time.
          </p>
          <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
            <li>
                <strong>1. Cash Flow Confusion & Income Gaps - </strong>
                Unclear tracking of rent and delayed payments can lead to inconsistent income and financial uncertainty.
            </li>
            <li>
                <strong>2. Financial Errors & Reconciliation Issues - </strong>
                Manual accounting often leads to mismatched records, missed entries and reporting inaccuracies.
            </li>
            <li>
                <strong>3. Uncontrolled Expenses & Cost Leakage - </strong>
                Lack of structured expense tracking can result in overspending and reduced profitability.
            </li>
          </ul>
        </div>
      </section>

      {/* Visibility */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">

          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Clear Financial Visibility for Your Properties
          </h2>

          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            A rental property becomes much easier when your finances are organized and easy to understand. With proper rental property accounting, every transaction from <a className="text-blue-500 hover:underline" href="/services/rent-collection-and-arrears-recovery">rent collection</a> to expense tracking is recorded clearly, giving you a complete view of your property’s financial activity.
          </p>
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            A centralized reporting system brings all financial data into one place. It helps you track income, monitor expenses and understand cash flow without relying on scattered data or manual calculations. With structured reports, property owners can quickly see how their property is performing, identify patterns and make better financial decisions with confidence.
          </p>
          <div className="w-full flex justify-center mt-10">
              <a
                href="/contact-us"
                className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
                Get Started Today
            </a>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mt-8">

            <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
              
            </h2>

            <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
              
            </p>
            
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Expense & Variance Analysis in Property Management
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Tracking financial performance is essential for maintaining control over property operations and ensuring long-term profitability. A structured approach to expense and variance analysis helps property owners understand where money is being spent and how it compares to expected performance.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              {expenseCards.map((card, index) => (
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

      {/* Variance Section */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">

          <div className="text-center">
            <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
              Accurate, Transparent, and Reliable Financial Management
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Maintaining control over property finances requires accuracy, consistency and structured systems. With a disciplined accounting approach, every financial activity is recorded and reported clearly, giving property owners full confidence in their data.
            </p>
          </div>
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

      {/* Process */}
      <section className="w-full bg-white py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-extrabold text-[#243c5a]">
            How Our Accounting Process Works
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

      {/* Final */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">

          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Why Property Owners Choose Our Accounting Services
          </h2>

          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Property owners choose <a href="/">Smart Key Property Management</a> because of a consistent and reliable approach to managing property finances. Instead of fragmented systems and manual tracking, we follow a well-defined process that ensures every financial activity is recorded, monitored and reported accurately. At Smart Key Property Management, we use platforms like AppFolio to provide real-time access to financial data. This allows property owners to stay informed without delays or dependency on manual updates, giving them full visibility into their property's financial performance.
          </p>
          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Our focus is on maintaining accuracy, consistency, and transparency across all financial records. From daily transaction tracking to monthly reporting, every step is handled with precision to reduce errors and improve reliability. With a disciplined workflow and clear reporting systems in place, Smart Key Property Management helps property owners gain better control over cash flow, reduce financial uncertainty and make confident financial decisions.
          </p>
          <div className="w-full flex justify-center mt-10">
            <a
                href="/contact-us"
                className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
                Check Pricing Plan
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

export default AccountingReportingPage;