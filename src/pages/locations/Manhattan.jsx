import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import FAQ from "@/components/faq";
import FooterCTA from "@/components/footerCTA/FooterCTA";
import ScrollingNames from "@/components/scrollingName/ScrollingName";
import SEO from "@/components/seo/SEO";

function Manhattan() {
  const names = [
    "Astoria",
    "Long Island City",
    "Sunnyside",
    "Woodside",
    "Jackson Heights",
    "Elmhurst",
    "Flushing",
    "Forest Hills",
    "Rego Park",
    "Jamaica",
    "Kew Gardens",
    "Ridgewood",
    "Bayside",
    "Fresh Meadows",
    "Astoria",
    "Sunnyside",
    "Woodside",
    "Elmhurst",
    "Flushing",
    "Jamaica",
    "Forest Hills",
    "Bayside",
  ];

  const services = [
    {
      title: "Tenant Screening & Placement ",
      path: "/services/tenant-screening-and-placement",
      secondtitle: "That Builds Confidence",
      description:
        "A structured screening process helps landlords evaluate applicants, review qualifications and make informed tenant placement decisions with greater confidence.",
    },
    {
      title: "Rent Collection & Lease Administration ",
      path: "/services/rent-collection-and-arrears-recovery",
      secondtitle:
        "Organized rent tracking, payment follow-ups and lease coordination help landlords maintain smoother operations and better visibility into rental performance.",
    },
    {
      title: "Maintenance & Property Inspections",
      path: "/services/property-compliance-and-strategic-oversight",
      secondtitle: "",
      description:
        "Coordinated maintenance requests, routine inspections and vendor communication help protect property condition while ensuring issues are addressed efficiently.",
    },
    {
      title: "Accounting & Financial Reporting ",
      path: "/services/accounting-financial-reporting",
      secondtitle: "You Can Count On",
      description:
        "Accurate financial records, expense tracking and detailed reporting give property owners clearer insight into income, costs and overall investment performance.",
    },
  ];

  const numbers = [
    {
      title: "16 Total → 0 Open",
      description: "DOB Violations",
    },
    {
      title: "122 Total → 0 Open",
      description: "OATH/ECB Violations",
    },
    {
      title: "33 Total → 0 Open",
      description: "Complaints",
    },
    {
      title: "8 Total → 0 Open",
      description: "Jobs / Filings",
    },
  ];

  const properties = [
    {
      title: "151 West 21st Street #5E",
      address: "151 West 21st Street #5E, New York, NY 10011",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208129/6a85c511b46e28ec85288836_Manhattan_Prop2.avif",
      link: "/portfolio",
      alt: "Residential property at 151 West 21st Street #5E, New York",
    },
    {
      title: "504 West 126th Street",
      address: "504 West 126th Street, New York, NY 10027",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208127/6a85d45e55c12f1d921ab6f4_3_2.avif",
      link: "/portfolio",
      alt: "Residential property at 504 West 126th Street, New York",
    },
    {
      title: "136 William Street",
      address: "136 William St, New York, NY 10038",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208128/6a85d45cb3786f1d4edcbdda_4.avif",
      link: "/portfolio",
      alt: "Residential property at 136 William St, New York",
    },
  ];

  const whyCards = [
    "Individual Rental Units",
    "Small Apartment Buildings",
    "Mid-Size Residential Buildings",
    "Multifamily Properties",
    "Rent-Regulated Properties",
    "Mixed-Use Buildings with Residential Units",
  ];

  const faqData = [
    {
      question: "How much does property management cost in Manhattan?",
      answer:
        "Property management pricing depends on factors such as property type, number of units, required services, inspection needs, leasing support and overall management complexity. Smart Key’s plans currently begin at 5%, with options designed to match different property requirements.",
    },
    {
      question:
        "Can Smart Key manage a property if the owner lives outside New York?",
      answer:
        "Yes. Smart Key supports remote owners through local coordination, owner reporting, maintenance tracking, tenant communication and organized property updates. This allows owners to stay informed and maintain visibility without being physically present.",
    },
    {
      question: "Does Smart Key manage small apartment buildings in Manhattan?",
      answer:
        "Yes. Smart Key manages individual rental units, small apartment buildings, mid-size residential buildings, multifamily properties, market-rate rentals, rent-regulated properties and mixed-use buildings with residential units.",
    },
    {
      question: "How are maintenance requests handled?",
      answer:
        "Maintenance requests follow a structured process. The request is received, the urgency is assessed, the appropriate vendor is coordinated, owner approval is obtained when required and the work is monitored through completion with proper documentation and updates.",
    },
    {
      question:
        "How do I switch to Smart Key from another property management company?",
      answer:
        "The transition process may include reviewing the existing agreement, transferring property records, communicating changes with tenants, moving keys and access information and organizing financial and maintenance documentation. A structured transition helps make the switch smoother for owners and tenants.",
    },
  ];

  return (
    <main className="bg-white text-[#17395f]">
      {/* Manhattan Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793725688/manhattan-financial-district-with-skyscrapers-brooklyn-bridge_result.avif"
          alt="Manhattan Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07172a]/75"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pt-16 sm:px-6 sm:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300"
          >
            <Link to="/" className="transition hover:text-[#9ddff5]">
              Home
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <span className="text-[#9ddff5]">Manhattan</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Manhattan
          </h1>
        </div>
      </section>

      {/* Manhattan Property Management */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Full-Service Manhattan Property Management for Rental Property
            Owners
          </h1>

          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            A Manhattan property requires more than basic oversight. From tenant
            communication and maintenance requests to rent tracking and property
            coordination, every detail needs consistent attention. Smart Key
            Property Management provides structured{" "}
            <a
              href="/blogs/top-challenges-manhattan-landlords-face-and-how-property-managers-can-solve-them"
              className="text-blue-500 hover:underline"
            >
              Manhattan property management support
            </a>{" "}
            With organized communication, transparent reporting, proactive
            maintenance coordination and dependable follow-through, we help
            property owners maintain better visibility and smoother operations
            through trusted property management in Manhattan.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
            >
              Request a Property Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Text Loop */}
      <section className="w-full overflow-hidden bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h3 className="mb-6 text-center text-2xl font-bold leading-tight text-[#202b40] sm:mb-8 sm:text-3xl lg:text-4xl">
            Neighborhoods We Serve Across Manhattan
          </h3>

          <ScrollingNames
            names={names}
            fontSize="text-xl"
            fontWeight="font-semibold"
            gap="gap-16"
            duration={40}
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* New Service Section */}
      <section className="bg-white py-2">
        <div className="mx-auto mt-1 max-w-[1550px] px-5">
          <div className="flex flex-col items-stretch gap-6 rounded-[28px] border border-[#e7edf3] bg-[#f8fafc] p-5 shadow-[0_12px_40px_rgba(23,57,95,0.08)] md:gap-8 md:p-7 lg:flex-row lg:gap-10">
            {/* Image */}
            <div className="w-full overflow-hidden rounded-[28px] lg:w-1/2">
              <img
                src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208129/6a8491c8d0a730a800373848_Section_04-p-1080.avif"
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col p-2 sm:p-5 md:p-7 lg:w-1/2 lg:p-8">
              <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl lg:text-[42px]">
                Full-Service Property Management Services in Manhattan
              </h2>

              {/* <p className="mt-6 text-sm leading-7 text-[#416184] sm:text-base">
                      
                    </p> */}

              {/* Services */}
              <div className="mt-8 divide-y divide-[#dfe7ee]">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <Link
                      to={service.path}
                      className="group inline-flex text-base font-semibold leading-snug text-[#59249a] transition sm:text-lg"
                    >
                      <span className="group-hover:underline">
                        {service.title}
                      </span>
                    </Link>

                    <p className="group inline-flex ml-2 text-base font-semibold leading-snug text-[#416184] transition sm:text-lg">
                      {service.secondtitle}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#416184]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bronx Property Management */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
          {/* Content */}
          <div className="w-full min-w-0 lg:w-1/2">
            <h2 className="text-2xl font-semibold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
              Case Study: Improving Property Conditions at 355 W 41st St, New
              York
            </h2>

            {/* The Challenge */}
            <div className="mt-6 sm:mt-7">
              <h3 className="text-lg font-semibold text-[#416184] sm:text-xl">
                The Challenge
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                The property was dealing with multiple outstanding issues that
                required consistent tracking, repair coordination, documentation
                and follow-up. Without a structured process, these concerns
                could continue affecting property conditions and daily
                operations.
              </p>
            </div>

            <div className="mt-6 sm:mt-7">
              <h3 className="text-lg font-semibold text-[#416184] sm:text-xl">
                Our Approach
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                Smart Key focused on :
                <ul className="ml-5 mt-1 list-disc space-y-1 pl-0 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                  <li>Violation monitoring</li>
                  <li>Vendor coordination</li>
                  <li>Repair follow-ups</li>
                  <li>Agency communication</li>
                  <li>Property oversight</li>
                </ul>
              </p>
            </div>

            {/* How Smart Key Solves It */}
            <div className="mt-7 sm:mt-8">
              <h3 className="text-lg font-semibold text-[#416184] sm:text-xl">
                The Result
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                Through consistent management and proactive follow-through, the
                number of open violations decreased significantly. The property
                moved toward a more organized maintenance process with improved
                visibility and accountability.
              </p>
            </div>

            {/* Button */}
            <div className="mt-7 sm:mt-8">
              <a
                href="/services/property-maintenance-and-resident-services"
                className="inline-flex items-center justify-center rounded-full border border-[#d9e2ec] px-7 py-3 text-sm font-medium text-[#416184] transition duration-300 hover:bg-[#416184] hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full min-w-0 lg:w-1/2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208127/6a8491c9ba8892a4e1befdab_Section_06-p-1080.avif"
                alt="Residential property in the Bronx"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Under Our Management */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Section Heading */}
          <h2 className="mb-8 text-center text-2xl font-semibold leading-tight tracking-tight text-[#202b40] sm:mb-10 sm:text-3xl lg:text-4xl">
            A Look at Properties Under Our Management
          </h2>

          {/* Property Cards */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
            {properties.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group block w-full min-w-0 max-w-md overflow-hidden rounded-2xl border border-[#e7edf3] bg-white shadow-[0_8px_30px_rgba(23,57,95,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,57,95,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6482a3] sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-22px)]"
              >
                {/* Property Image */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Property Details */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="break-words text-lg font-semibold leading-snug text-[#202b40] sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-words text-sm leading-6 text-gray-600 sm:text-base">
                    {item.address}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 text-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6">
          <h2 className="w-full text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#416184]">
            Supporting Manhattan Properties of Every Size and Structure
          </h2>

          <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
            Every residential property comes with different responsibilities,
            tenant needs and operational requirements. Smart Key provides
            structured Manhattan property management support across various
            property types, adapting our approach based on building size,
            property condition, maintenance needs, leasing activity and the
            level of involvement each owner prefers.
          </p>

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
              href="/contact"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-base px-8 sm:px-10 py-4 sm:py-5 rounded-3xl hover:bg-[#176da6] transition"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title="Frequently Asked Question" data={faqData} />

      {/* Footer CTA */}
      <FooterCTA
        backgroundSrc={
          "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/Footer_SamrtKey.avif"
        }
        title={"Own Property? We Make Managing It Effortless."}
        buttonText="Schedule Free Consultation"
        buttonLink="/contact"
      />

      {/* For SEO ranking */}
      <SEO
        title="Manhattan Property Management Company | Smart Key"
        description="Professional property management in Manhattan for landlords and rental property owners. Smart Key handles tenant communication, maintenance, rent oversight and day-to-day property operations."
      />
    </main>
  );
}

export default Manhattan;
