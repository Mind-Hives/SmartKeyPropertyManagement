import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import FAQ from "@/components/common/FAQ";
import FooterCTA from "@/components/common/FooterCTA";
import ScrollingNames from "@/components/scrolling/ScrollingName";
import SEO from "@/components/seo/SEO";

function Bronx() {
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
        "Our tenant screening and placement process includes thorough applicant verification to help you place qualified tenants and reduce the risk of future tenancy issues.",
    },
    {
      title: "Rent Collection & Lease Administration ",
      path: "/services/rent-collection-and-arrears-recovery",
      secondtitle: "That Keeps Income on Track ",
      description:
        "We handle rent collection services in the Bronx, arrears recovery and lease administration to help keep payments organized and your rental income flowing consistently.",
    },
    {
      title: "Maintenance & Property Inspections",
      path: "/services/property-compliance-and-strategic-oversight",
      secondtitle: "",
      description:
        "From routine maintenance to emergency repairs, we coordinate every service request with trusted vendors to keep your property well maintained and your residents satisfied.",
    },
    {
      title: "Accounting & Financial Reporting ",
      path: "/services/accounting-financial-reporting",
      secondtitle: "You Can Count On",
      description:
        "Stay informed with accurate accounting records and detailed financial reports that give you a clear understanding of your rental property's performance.",
    },
  ];

  const properties = [
    {
      title: "1743 Taylor Ave",
      address: "1743 Taylor Ave, Bronx, NY 10460",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208124/6a6ccb14354d3a7eb4404878_Bronx_prop2_result.avif",
      link: "/our-portfolio",
      alt: "Residential property at 1743 Taylor Ave, Bronx",
    },
    {
      title: "559 Claremont Pkwy",
      address: "559 Claremont Pkwy, Bronx, NY 10457",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208125/6a6ccb16e2b1816f5cedd80b_Bronx_prop3_result.avif",
      link: "/our-portfolio",
      alt: "Residential property at 559 Claremont Pkwy, Bronx",
    },
    {
      title: "362 E 173rd St",
      address: "362 E 173rd St, Bronx, NY 10457",
      image:
        "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208123/68642b8551c947ec2d0679cf_hero_section_result.avif",
      link: "/our-portfolio",
      alt: "Residential property at 362 E 173rd St, Bronx",
    },
  ];

  const faqData = [
    {
      question:
        "What property management services do you provide in the Bronx?",
      answer:
        "Smart Key Property Management offers comprehensive property management services in the Bronx, including tenant screening and placement, rent collection, lease administration, maintenance coordination, property inspections, financial reporting, compliance oversight and vendor management. Our goal is to help landlords protect their investments while reducing the day-to-day responsibilities of managing rental properties.",
    },
    {
      question:
        "How does Smart Key screen tenants for Bronx rental properties?",
      answer:
        "Our tenant screening process includes application reviews, background and credit checks, income verification, rental history verification and other qualification assessments. We focus on placing reliable tenants who are more likely to pay rent on time and care for your property, helping reduce vacancies and long-term management issues.",
    },
    {
      question: "How are maintenance requests and emergency repairs handled?",
      answer:
        "We coordinate both routine maintenance and emergency repairs through our trusted vendor network. Maintenance requests are addressed promptly and we keep property owners informed throughout the process to help protect the property's condition and maintain tenant satisfaction.",
    },
    {
      question:
        "Can Smart Key manage multiple rental properties across the Bronx?",
      answer:
        "Yes. Whether you own a single rental home, a multi-family property or a growing investment portfolio, Smart Key Property Management provides scalable property management solutions tailored to your needs. We manage properties across Bronx neighborhoods while delivering consistent communication and detailed reporting.",
    },
    {
      question:
        "Why should I hire a professional property management company in the Bronx?",
      answer:
        "Hiring a professional property management company helps reduce landlord stress while improving operational efficiency. Smart Key handles tenant placement, rent collection, maintenance coordination, compliance responsibilities and financial reporting, allowing property owners to save time, protect their investments and maximize long-term rental income.",
    },
  ];

  return (
    <main className="bg-white text-[#17395f]">
      {/* Bronx Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208122/6a6395ce80d2691903f841da_Smartkey_Website_Hero_Images.avif"
          alt="Bronx Hero"
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

            <span className="text-[#9ddff5]">Bronx</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bronx
          </h1>
        </div>
      </section>

      {/* Bronx Property Management */}
      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Full-Service Property Management Services in the Bronx,New York
          </h1>

          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            Owning a rental property in the Bronx comes with important
            responsibilities, but managing every tenant request, maintenance
            issue, rent payment and compliance requirement doesn't have to fall
            on your shoulders alone. At{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Smart Key Property Management
            </a>
            , we provide trusted property management services in the Bronx that
            help landlords keep their rentals running smoothly while protecting
            long-term value.
          </p>
          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            Whether you're managing a single investment property or a growing
            portfolio, our local team takes care of the day-to-day details with
            the professionalism, transparency and attention your property
            deserves so you can spend less time managing and more time planning
            what's next.
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
            Neighborhoods We Proudly Serve Across the Bronx
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
                src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208123/6a6921c126b08e9d4447b45d_2-p-1080.avif"
                alt="Property management in Queens"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col p-2 sm:p-5 md:p-7 lg:w-1/2 lg:p-8">
              <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl lg:text-[42px]">
                Complete Property Management Support for Bronx Landlords
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
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl lg:text-[42px]">
              Protect Your Investment Before Small Problems Become Costly
              Repairs
            </h2>

            {/* The Challenge */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#416184] sm:text-2xl">
                The Challenge
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#416184] sm:text-base">
                If you own a rental property in the Bronx, you have to expect
                the unexpected. A leaking pipe can become water damaged
                overnight, a delayed repair can lead to frustrated tenants and
                small maintenance issues can quickly become costly problems if
                not taken care of in time. Before long, you're managing
                contractors, fielding maintenance calls and trying to keep
                everything running while juggling your own schedule. That's a
                lot for a landlord to handle alone.
              </p>
            </div>

            {/* How Smart Key Solves It */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#416184] sm:text-2xl">
                How Smart Key Solves It
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#416184] sm:text-base">
                That's where Smart Key Property Management comes in. You won't
                have to chase vendors, worry about repair requests or wonder if
                something was missed. We partner with trusted local
                professionals for routine inspections, preventative maintenance
                and emergency repairs to keep your rental in top shape. We keep
                you informed, maintain care for your residents and keep your
                property moving forward so you can enjoy the benefits of
                ownership without the day-to-day responsibility.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="/services/property-maintenance-and-resident-services"
                className="inline-flex items-center justify-center rounded-full border border-[#d9e2ec] px-7 py-3 text-sm font-medium text-[#416184] transition hover:bg-[#416184] hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208123/6a724e9e457f242d7acbe536_Building_2.0_1.avif"
                alt="Property in the Bronx"
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

      <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            From Tenant Headaches to Hassle-Free Property Management
          </h1>

          <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
            Managing a rental property doesn't have to mean dealing with late
            rent payments, maintenance emergencies, tenant concerns or endless
            paperwork. At Smart Key Property Management, we handle every aspect
            of your Bronx rental with professionalism and care from finding
            qualified tenants and coordinating maintenance to collecting rent
            and protecting your investment so you can enjoy a more profitable,
            stress-free ownership experience.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#1f83c5] text-white font-semibold text-sm sm:text-base px-7 sm:px-10 py-4 rounded-3xl hover:bg-[#176da6] transition"
            >
              Contact Us
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

      <SEO
        title="Bronx Property Management Company | Smart Key"
        description="Professional property management in the Bronx for landlords and rental property owners. Smart Key handles tenant screening, maintenance, rent collection and day-to-day property operations."
      />
    </main>
  );
}

export default Bronx;
