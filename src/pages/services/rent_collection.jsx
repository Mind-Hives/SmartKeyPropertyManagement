import React from "react";
import { motion } from "framer-motion";
import FeatureBlock from "@/components/featureBlock/FeatureBlock";
import FAQ from "@/components/faq";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import FeatureBlockVertical from "@/components/featureBlock/FeatureBlockVertical";


const costCards = [
    {
        key: 1,
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208193/Rent_Deal_SmartKey_result.avif',
        title: "Rent-Regulated Properties & Legal Requirements",
        text: "In NYC, rent-regulated properties require specialized handling. These properties, governed by rent control and stabilization laws, come with additional compliance requirements that landlords must meet. Smart Key Property Management ensures all rent collection processes align with local regulations, helping you avoid potential legal pitfalls.",
    },
    {
        key: 2,
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208196/Rent_Money_SmartKey_result.avif',
        title: "Timely Rent Collection & Tenant Relations",
        text: ["Smart Key's rent collection services for landlords streamline the payment process, ensuring landlords receive payments on time. By prioritizing ",<a className="text-blue-500 hover:underline" href="https://www.smartkeypropertymanagement.com/services/tenant-screening-and-placement" target="_blank" rel="noreferrer">tenant communication </a>,"and consistent follow-ups, we help mitigate the risk of late payments and disruptions in cash flow. "],
    },
    {
        key: 3,
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208191/Rent_Lender_SmartKey_result.avif',
        title: "Stay Compliant with Landlord Legal Responsibilities",
        text: "Landlords are subject to strict rental property compliance laws. Smart Key works alongside legal professionals to keep your rent collection practices compliant with landlord legal responsibilities. Whether you're managing rent-regulated properties or market-rate properties, our comprehensive approach covers all necessary documentation and ensures timely execution.",
    },
];

const benefits = [
    {
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208194/Rent_House-Program_SmartKey_result.avif',
        title: "Efficient Rent Collection with Housing Programs",
        text: "At Smart Key Property Management, we understand that rent collection isn't always straightforward, especially when it involves tenants receiving assistance through housing programs. That's why we specialize in rental assistance coordination to ensure that all tenants eligible for government housing support, such as CityFHEPS/HRA and Section-8, pay on time and meet their financial obligations.",
    },
    {
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208192/Rent_Handshake_SmartKey_result.avif',
        title: "Partnership with Housing Programs for Timely Payments",
        text: "Our collaboration with housing programs NYC ensures smooth rent collection by streamlining the process and handling the paperwork required for rent collection housing programs. We make it easy for landlords by working directly with housing authorities to facilitate timely rent payments and avoid unnecessary delays in rent disbursement.",
    },
    {
        icon: 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208190/Rent_Secure-Shield_SmartKey_result.avif',
        title: "Clearing Arrears and Protecting Your Revenue",
        text: "Arrears recovery can be complicated, but with Smart Key's streamlined rent collection process, we help clear outstanding payments efficiently. Through our coordination with government-assisted programs, we protect landlords from revenue loss while adhering to regulatory standards. Our approach eliminates the risk of eviction delays, ensuring a stable cash flow and continued compliance.",
    },
];

const processSteps = [
    {
        no: "01",
        title: "Rent Tracking & Monitoring",
        text: "We consistently monitor rent payments, tracking due dates and identifying late payments early. This allows us to address issues before they escalate into larger arrears.",
        side: "right",
    },
    {
        no: "02",
        title: "Tenant Communication & Early Intervention",
        text: "We maintain proactive communication with tenants, sending reminders and addressing payment issues promptly. Early intervention reduces the risk of prolonged payment delays.",
        side: "left",
    },
    {
        no: "03",
        title: "Arrears Identification & Prioritization",
        text: "We identify overdue payments and prioritize arrears based on urgency, ensuring that high-risk tenants are addressed first. This targeted approach ensures faster resolution.",
        side: "right",
    },
    {
        no: "04",
        title: "Legal Coordination",
        text: "In cases of non-payment, we work with experienced legal professionals to manage eviction proceedings and ensure that all documentation is compliant with local laws. This minimizes the risk of legal complications.",
        side: "left",
    },
    {
        no: "05",
        title: "Payment Confirmation & Documentation",
        text: "Once payments are received, we confirm and document them promptly. Clear records are maintained for transparency, ensuring both landlords and tenants are kept informed.",
        side: "right",
    },
];

const whyCards = [
    "Structured Compliance Systems",
    "Legal Coordination",
    "Timely Rent Collection",
    "Transparent Reporting",
    "Efficient Arrears Management",
    "Experienced Legal Support",
];

const faqData = [
  {
    question: "What is the rent collection process for landlords in NYC?",
    answer:
      "Rent collection for landlords in NYC involves setting clear payment terms, tracking tenant payments and ensuring timely collection through structured systems. Compliance with NYC rental laws is crucial to avoid disputes.",
  },
  {
    question: "How does Smart Key help landlords recover overdue rent in New York and New Jersey?",
    answer:
      "Smart Key efficiently manages overdue rent through structured communication, legal coordination and consistent follow-ups. We ensure landlords stay informed and reduce the risk of revenue loss through proactive arrears recovery strategies.",
  },
   {
    question: "What are the common legal requirements for landlords in New York and New Jersey regarding rent collection?",
    answer:
      "Landlords in New York and New Jersey must adhere to specific rent collection regulations, including proper notice periods, eviction laws, and rent receipt requirements. Compliance ensures smooth operations and avoids legal complications.",
  },
   {
    question: "How do housing programs like CityFHEPS impact rent collection for landlords in NYC?",
    answer:
      "Housing programs like CityFHEPS provide rental assistance and ensure consistent payment through direct government funding. Smart Key manages the process, ensuring landlords receive timely rent payments while staying compliant with housing program guidelines.",
  },
  {
    question: "Why is risk management important for landlords when collecting rent in NYC and New Jersey?",
    answer:
      "Effective risk management minimizes the chances of late payments, legal disputes, and tenant evictions. It protects landlords' financial interests and ensures a steady cash flow by proactively addressing potential risks in rent collection.",
  },
   {
    question: "How does Smart Key ensure compliance with rent-regulated properties in NYC?",
    answer:
      "Smart Key ensures compliance with rent-regulated properties by coordinating with legal professionals, staying updated on rent stabilization laws, and ensuring all documentation is accurate, reducing legal risks for landlords in NYC.",
  },
];

const RentCollectionPage = () => {
    return (
        <main className="bg-white text-[#17395f]">

            {/* Rent Hero */}
            <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
                <img
                    src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208195/Rent-Hero-Image_SmartKey.avif"
                    alt="Rent Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#07172a]/75"></div>

                <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">
                    
                    <p className="text-white/70 text-sm sm:text-base">
                        Home / Rent Collection
                    </p>

                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Rent Collection & Arrears Recovery
                    </h1>
                </div>
            </section>

            {/* Rent Property Management */}
            <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
                <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-center">

                    <h1 className="w-full max-w-7xl text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                        Rent Collection & Arrears Recovery for Landlords in NYC and New Jersey
                    </h1>

                    <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
                        Rent collection is a fundamental aspect of property management that directly influences rental income and long-term business stability. In highly-regulated markets like New York City and New Jersey, managing rent payments requires much more than a basic tracking system it demands a robust, compliance-driven approach to ensure timely payments and avoid costly legal disputes.
                    </p>
                    <p className="w-full max-w-6xl mt-8 text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed">
                        At <a href="/" className="text-blue-500 hover:underline">Smart Key Property Management</a>, we assist landlords in navigating the complexities of rental property compliance. With ever-evolving landlord legal responsibilities in both NYC and NJ, it's essential to have a structured system that not only tracks rent but also addresses overdue payments in a compliant and efficient manner. We work closely with legal professionals to ensure that all arrears recovery actions adhere to local regulations, are well-organized and are fully documented. This process helps minimize financial risks, maintains consistent cash flow and ensures transparency for both landlords and tenants, so everyone stays informed and aligned throughout the lease cycle.
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

            {/* Cost Section */}
            <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
                <div className="mx-auto w-full max-w-5xl">
                    
                    {/* Section Heading */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl lg:text-4xl">
                            NYC Rent Collection Basics
                        </h2>

                        <p className="mx-auto mt-3 max-w-6xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
                            Managing rent collection in NYC and New Jersey is crucial for maintaining a profitable and legally compliant property portfolio.
                        </p>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                        {costCards.map((card, index) => (
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

            {/* Benefits */}
            <section className="bg-white px-5 py-10 sm:px-8 sm:py-12">
                <div className="mx-auto w-full max-w-5xl">
                    
                    {/* Section Heading */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-[#2f4f73] sm:text-2xl md:text-3xl">
                            How Smart Key Efficiently Works with Housing Programs to Collect Rent and Clear Arrears
                        </h2>

                        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                            Smart Key Property Management partners with housing programs like CityFHEPS/HRA and Section-8 to streamline rent collection and clear arrears. We ensure timely payments and protect landlords from potential revenue loss.
                        </p>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                        <div className="flex flex-wrap justify-center gap-6">
                            {benefits.map((feature, index) => (
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

            {/* Process */}
            <section className="w-full bg-white py-14 md:py-20 px-5">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold text-[#243c5a]">
                        Our Rent Collection & Arrears Recovery Process
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
                                    className={`text-5xl md:text-6xl font-light text-[#405b7b] ${step.side === "right"
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
                                    className={`bg-white border border-[#6ed3ff] rounded-md shadow-lg shadow-blue-100 p-6 max-w-[310px] mx-auto md:mx-0 ${step.side === "right"
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

            {/* Risk Management */}
            <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                <div className="mx-auto w-full max-w-5xl">

                    <h2 className="text-center text-2xl font-bold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
                        Risk Management for Rental Properties in NYC and New Jersey
                    </h2>

                    <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                        Risk management is crucial for landlords to protect their rental income and prevent{" "}
                        <a
                            href="/services/legal-compliances-and-risk-management"
                            className="font-semibold hover:underline text-[#1f83c5]"
                        >
                            legal complications
                        </a>
                        . By identifying and addressing risks early, landlords can reduce financial losses and avoid costly disputes. Smart Key's structured approach to risk management ensures a proactive strategy, from early detection to efficient resolution of issues related to rent collection and arrears recovery.
                    </p>

                    <ul className="mt-5 space-y-3 pl-26 pr-26 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                        <li>
                            <strong>1. Legal Risk Mitigation - </strong>
                            We help identify potential legal issues early, minimizing the risk of costly litigation and disputes.
                        </li>
                        <li>
                            <strong>2. Early Issue Detection - </strong>
                            Our proactive approach allows us to spot and address risks before they escalate into significant problems.
                        </li>
                        <li>
                            <strong>3. Tenant Payment Risk - </strong>
                            We monitor tenant payment behaviors to reduce the risk of late payments and non-payment.
                        </li>
                        <li>
                            <strong>4. Eviction Prevention - </strong>
                            By identifying problematic tenants early, we help avoid evictions and the associated costs and delays.
                        </li>
                    </ul>

                </div>
            </section>


            {/* CTA */}
            <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
                <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
                    
                    <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
                        Compliance Support & Professional Coordination for Landlords
                    </h2>

                    <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
                        Smart Key provides landlords with comprehensive compliance support and professional coordination, ensuring full alignment with legal requirements and operational best practices. Our team works closely with legal professionals to tackle any compliance challenges, helping landlords navigate the complexities of rental property management without risk. From ensuring all documentation is complete and accurate to coordinating with legal experts for dispute resolution, we offer peace of mind by handling the intricate details of property management. With Smart Key, landlords can trust that their property operations will remain compliant, organized, and legally secure throughout the rental lifecycle.
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

export default RentCollectionPage;