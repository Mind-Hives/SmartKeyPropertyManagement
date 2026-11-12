import React from "react";
import Hero from "../components/HeroSection";
import ServiceBlock from "@/components/serviceBlock/ServiceBlock";
import ScrollingSec from "../components/scrolling/ScrollingSection.jsx";
import FooterCTA from "@/components/common/FooterCTA";
import FAQ from "../components/common/FAQ.jsx";
import { MyMap } from "@/components/ui";
import GoogleReviews from "@/components/reviews/GoogleReviews";
import SocialMediaGallery from "@/components/socialMedia/SocialMediaGallery";
import SEO from "@/components/seo/SEO";
import PropertyMap from "@/components/PropertyMap";

const Feature = ({ cardBgColor, icon, title, discription }) => {
  return (
    <div
      className={`flex flex-col items-center gap-3.5 p-6 rounded-xl shadow-sm relative border-2 transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:-translate-x-2 hover:-translate-y-2 before:absolute before:inset-0 before:rounded-xl before:[transform:translate3d(8px,8px,-1px)] ${cardBgColor ? "bg-[#dbf5fc]" : "bg-[#ffffff]"}`}
    >
      {/* Icon or Image */}
      <div className="flex h-23 w-23 shrink-0 items-center justify-center overflow-hidden rounded-lg text-[#1f83c5]">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt="Feature icons"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          icon
        )}
      </div>

      <div className="w-full min-w-0">
        <h3 className="break-words text-base font-bold text-[#2f4f73] sm:text-lg md:text-xl lg:text-2xl">
          {title}
        </h3>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {discription}
        </p>
      </div>
    </div>
  );
};

const steps = [
  {
    no: "01",
    title: "Strategic Property Review",
    text: "We look at your rental property, current leases, relationships with vendors and operational problems to create a structured property management plan that meets local compliance standards.",
    side: "right",
  },
  {
    no: "02",
    title: "Structured Onboarding & System Setup",
    text: "We set up systems for collecting rent, coordinating maintenance and keeping track of communication while also organizing lease documents, tenant records, vendor lists, access credentials and inspection details.",
    side: "left",
  },
  {
    no: "03",
    title: "Full-Service Management Execution",
    text: "We handle all of the daily tasks, such as communicating with tenants, collecting rent, overseeing repairs with documentation and making sure that all rules are followed. We also provide regular reports and updates on performance",
    side: "right",
  },
];

const faqData = [
  {
    question: "How much does property management cost?",
    answer:
      "Our property management fees start at 5% of monthly rent, with flexible packages tailored to each property. Pricing depends on unit count, service level including leasing, maintenance coordination, inspections, and compliance and overall operational complexity, so owners pay only for the services they truly need.",
  },
  {
    question: "What does a property management company do?",
    answer:
      "A property management company handles tenant screening, lease preparation, rent collection, maintenance coordination, compliance oversight, and financial reporting. Their role is to protect rental income, reduce vacancy risk, and manage daily operational responsibilities for property owners.",
  },
  {
    question: "How do property management screen tenants?",
    answer:
      "Property managers screen tenants through background checks, credit evaluation, income verification, rental history review, and lease compliance assessment. This structured tenant screening process helps reduce payment risk, prevent disputes, and secure financially responsible renters.",
  },
  {
    question: "Can a property manager help reduce vacancy?",
    answer:
      "Property managers screen tenants through background checks, credit evaluation, income verification, rental history review, and lease compliance assessment. This structured tenant screening process helps reduce payment risk, prevent disputes, and secure financially responsible renters.",
  },
  {
    question: "Do property managers handle maintenance and repairs?",
    answer:
      "Yes. Property managers coordinate routine and emergency repairs through vetted vendors. They track maintenance requests, manage costs, verify completion, and document work to protect property value and maintain tenant satisfaction.",
  },
  {
    question: "Do property managers handle legal compliance?",
    answer:
      "Yes. Property managers oversee lease enforcement, regulatory documentation, notice procedures, and compliance requirements. Structured compliance management helps landlords reduce legal exposure and maintain proper documentation standards.",
  },
];

const socialMediaPosts = [
  {
    id: 1,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919144/Insta-video-1.mp4",
    link: "https://www.instagram.com/reel/DefguYBvbsQ/",
    alt: "Company instagram post",
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919144/Insta-video-2.mp4",
    link: "https://www.instagram.com/reel/De-ZrsPgJIA/",
    alt: "Company instagram post",
  },
  {
    id: 3,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919147/Insta-video-3.mp4",
    link: "https://www.instagram.com/reel/DXw15rpsQgT/",
    alt: "Company instagram post",
  },
  {
    id: 4,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919151/Insta-video-4.mp4",
    link: "https://www.instagram.com/reel/DZDmVeHzvWS/",
    alt: "Company instagram post",
  },
  {
    id: 5,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919151/Insta-video-5.mp4",
    link: "https://www.instagram.com/reel/DbEywo5MmOp/",
    alt: "Company instagram post",
  },
  {
    id: 6,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919152/Insta-video-6.mp4",
    link: "https://www.instagram.com/reel/Dec6lKnOA0f/",
    alt: "Company instagram post",
  },
  {
    id: 7,
    video: "https://res.cloudinary.com/kj98z6s1/video/upload/v1793919160/Insta-video-7.mp4",
    link: "https://www.instagram.com/reel/DUloyt_jIsj/",
    alt: "Company instagram post",
  },
];

const HomePage = () => {
  return (
    <main className="bg-white text-[#0f2742]">
      <Hero
        backgroundType="video"
        backgroundSrc="https://res.cloudinary.com/kj98z6s1/video/upload/v1793918917/Smartkey-Hero-Video.mp4"
        title={"The Key to Hassle-Free Property Management"}
        buttonText="Schedule Free Consultation"
        buttonLink="/contact-us"
      />
        {/* Home Page Property Management */}
        <section id="our-company" className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
            <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Full-Service Property Management in NYC for Landlords
            </h1>

            <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
              Providing tenant screening, rent collection, maintenance
              coordination and full-service property management for small and
              mid-size residential properties across New York City.
            </p>
            <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
              Smart Key Property Management delivers structured, process-driven
              oversight designed to protect rental income and reduce operational
              risk. From disciplined tenant placement to proactive maintenance
              and organized financial tracking, we manage each stage of the
              rental lifecycle with consistency, accountability and clear
              communication.
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

        {/* Service Block */}
        <section className="max-w-6xl mx-auto px-5 py-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Complete Property Management Solutions For NYC Landlords
          </h2>
          <div className="mt-10 space-y-10">
            {/* Services Card */}
            <ServiceBlock
              title="Find Reliable Tenants Without Long Vacancies"
              description="Smart Key Property Management helps landlords secure reliable tenants through structured background, credit, income and rental history screening. We reduce vacancy by leveraging NYC housing programs like CityFHEPS and managing unit approvals efficiently, with rent payments processed through DSS/HRA for added stability. Our strong network of brokers and real estate agents keeps a steady flow of prospects, so properties stay occupied and cash flow remains consistent."
              image="https://res.cloudinary.com/kj98z6s1/image/upload/v1793895723/Property-manager-welcoming-approved-tenants-after-successful-tenant-screening-and-placement_result.avif"
              imageAlt="Property manager welcoming approved tenants after successful tenant screening and placement"
              buttonText="Learn More"
              buttonLink="/services/tenant-screening-and-placement"
            />
            <ServiceBlock
              reverse={true}
              title="Proactive Maintenance That Protects Property Value"
              description="We provide property maintenance services designed to protect asset value and maintain tenant satisfaction. Our team manages the full maintenance lifecycle, including repair coordination, emergency response, vendor oversight, and documented tracking. Every service request is handled through a structured process that supports accountability, cost control, and compliance standards."
              image="https://res.cloudinary.com/kj98z6s1/image/upload/v1793895722/Property-maintenance-technician-inspecting-kitchen-sink-for-rental-property-repair_result.avif"
              imageAlt="Property maintenance technician inspecting kitchen sink for rental property repair"
              buttonText="Learn More"
              buttonLink="/services/property-maintenance-and-resident-services"
            />
            <ServiceBlock
              title="Stay Legally Protected in Rental Market"
              description="Navigating landlord-tenant regulations in NYC requires precision and experience. We assist with lease enforcement, proper documentation, housing court coordination, and structured communication aligned with New York rental laws. Our compliance-focused approach helps property owners reduce legal exposure, avoid procedural mistakes, and maintain organized records throughout the tenancy lifecycle."
              image="https://res.cloudinary.com/kj98z6s1/image/upload/v1793895722/Property-manager-reviewing-lease-documents-with-tenants-for-rental-compliance_result.avif"
              imageAlt="Property manager reviewing lease documents with tenants for rental compliance"
              buttonText="Learn More"
              buttonLink="/services/legal-compliances-and-risk-management"
            />
            <ServiceBlock
              reverse={true}
              title="Reliable Rent Collection & Arrears Recovery"
              description="Smart Key Property Management ensures timely rent collection through structured tracking systems, automated reminders and consistent follow-ups. When payments become overdue, we initiate a clear arrears recovery process that includes documented notices, payment coordination, and escalation procedures when necessary. Our transparent financial reporting keeps owners fully informed while protecting steady cash flow and reducing prolonged delinquencies."
              image="https://res.cloudinary.com/kj98z6s1/image/upload/v1793895722/Property-manager-discussing-rent-payment-report-with-tenants-during-collection-review_result.avif"
              imageAlt="Property manager discussing rent payment report with tenants during collection review"
              buttonText="Learn More"
              buttonLink="/services/rent-collection-and-arrears-recovery"
            />
          </div>
        </section>

        {/* Feature Section */}
        <section className="bg-[#eff3ee] py-12 mt-8">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-xl md:text-3xl font-bold">
              Why NYC Landlords Trust Smart Key Property Management
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
              <Feature
                cardBgColor={true}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898109/Home-page-Tracking-SmartKey_result.avif"
                title="AppFolio-Powered"
                discription="Operates through AppFolio, providing real-time tracking for maintenance, rent collection, documentation and clear communication between owners and tenants."
              />

              <Feature
                cardBgColor={false}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898107/Home-page-Support-SmartKey_result.avif"
                title="24/7 Tenant & Owner Support"
                discription="Our round-the-clock support ensures urgent issues are resolved quickly, protecting rental income and preventing small problems from escalating."
              />

              <Feature
                cardBgColor={true}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898108/Home-page-Tools-SmartKey_result.avif"
                title="Fast, Cost-Controlled Maintenance"
                discription="Our trusted vendor network delivers prompt repairs, helping control expenses while maintaining property condition and tenant satisfaction."
              />

              <Feature
                cardBgColor={false}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898112/Home-page-Vendor-SmartKey_result.avif"
                title="NYC Compliance Expertise (DOB & HPD)"
                discription="We handle DOB and HPD compliance requirements, inspections and violations to keep NYC rental properties legally protected."
              />
              <Feature
                cardBgColor={true}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898107/Home-page-Acquisition-SmartKey_result.avif"
                title="Strategic Vacancy & Housing Partnerships"
                discription="We reduce vacancy through structured tenant placement, including housing voucher coordination and compliance management across New York City."
              />

              <Feature
                cardBgColor={false}
                icon="https://res.cloudinary.com/kj98z6s1/image/upload/v1793898107/Home-page-Certification-SmartKey_result.avif"
                title="Reliable Rent Tracking & Collection"
                discription="We monitor rent status, communicate with tenants and maintain accurate records to support smooth monthly collections."
              />
            </div>
          </div>
        </section>


      {/* ScrollingSec */}
      <ScrollingSec
        title="Our Property Management Process"
        description="Our property management process follows a defined, step-by-step structure designed to protect rental income and maintain operational control. From initial property review to system setup and daily execution, each stage is documented and coordinated. This structured approach ensures consistency, accountability and long-term stability for every property we manage."
        steps={steps}
      />

      <GoogleReviews duration={40} />

      <PropertyMap />

      {/* Social Media */}
      <SocialMediaGallery
        title="Liked What You See? There's More on Instagram!"
        subtitle="Get a closer look at Smart Key through real property transformations, behind-the-scenes moments, and insights you won't want to miss. Follow along!"
        cards={socialMediaPosts}
      />

      {/* FAQ */}
      <FAQ
        title="Frequently Asked Question"
        data={faqData}
        bgColor="bg-white"
        titleColor="text-[#2f4f73]"
      />

      {/* Footer CTA */}
      <FooterCTA
        title={"Own Property? We Make Managing It Effortless."}
        buttonText="Schedule Free Consultation"
        buttonLink="/contact-us"
      />

      {/* For SEO ranking */}
      <SEO
        title="Full-Service Property Management NYC | Smart Key"
        description="Full-service property management in NYC for landlords and property owners. Get support with rent collection, tenant screening, maintenance, compliance and financial reporting."
      />
    </main>
  );
};

export default HomePage;
