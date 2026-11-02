import React from 'react';
import { Link } from 'react-router';
import ScrollingNames from '@/components/scrollingName/ScrollingName';
import FooterCTA from '@/components/footerCTA/FooterCTA';
import FAQ from '@/components/faq';


function Queens() {

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
            title: "Rent Collection & Arrears Support",
            path: "/services/rent-collection-and-arrears-recovery",
            description: "Organized payment tracking, tenant follow-ups and reporting help owners maintain better visibility into rental income.",
        },
        {
            title: "Property Maintenance Coordination",
            path: "/services/property-maintenance-and-resident-services",
            description: "Maintenance requests, vendor communication, repair tracking and updates are coordinated to keep properties running smoothly.",
        },
        {
            title: "Tenant Screening & Placement",
            path: "/services/tenant-screening-and-placement",
            description: "A structured screening process helps owners review applicants, verify information and coordinate smoother tenant placement.",
        },
        {
            title: "Lease Administration & Renewals",
            path:"/services/lease-administration-and-renewals",
            description: "Lease documentation, renewal timelines and tenant communication are managed through an organized process.",
        },
        {
            title: "Property Accounting & Financial Reporting",
            path: "/services/accounting-financial-reporting",
            description: "Clear income tracking, expense records and reporting provide owners better visibility into property performance.",
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
            title: "179-15 144th Ave",
            address: "179-15 144th Ave, Queens, NY 11434",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54b9faa40b5b2b09ca8ea_prop_three.avif',
            link: "/portfolio",
            alt: "Residential property at 179-15 144th Avenue, Queens",
        },
        {
            title: "186-11 122nd Ave",
            address: "186-11 122nd Ave, Queens, NY 11413",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54ba2519406c2520d5223_prop_two.avif',
            link: "/portfolio",
            alt: "Residential property at 186-11 122nd Avenue, Queens",
        },
        {
            title: "114-33 194th St",
            address: "114-33 194th St, Queens, NY 11412",
            image: 'https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ab54ba3402dff61b3346cc0_prop_one.avif',
            link: "/portfolio",
            alt: "Residential property at 114-33 194th Street, Queens",
        },
    ];

    const whyCards = [
        "Management Starting at 5%",
        "Custom Pricing Options",
        "24/7 Owner & Tenant Support",
        "Professional applicant communication",
        "AppFolio-Powered Management",
        "Pre-Vetted Maintenance Network",
        "NYC Compliance Coordination",
    ];

    const faqData = [
        {
            question: "How much does property management cost in Queens?",
            answer: "Property management costs depend on the property type, services required and level of support needed. Smart Key's property management plans start at 5%, with different options available based on each property's operational requirements.",
        },
        {
            question: "What services does a Queens property management company provide?",
            answer: "A professional property management company can support landlords with rent collection, tenant communication, maintenance coordination, tenant screening, lease administration, financial reporting, property inspections and compliance-related coordination.",
        },
        {
            question: "Can Smart Key manage a single rental unit in Queens?",
            answer: "Yes. Smart Key supports residential property owners with individual rental units as well as larger residential properties. The management approach is adapted based on the property's needs, tenant requirements and level of support required.",
        },
        {
            question: "Can you manage a Queens property if I live outside New York?",
            answer: "Yes. Remote owners can benefit from local property coordination, tenant communication, maintenance tracking, financial reporting and regular updates. Smart Key provides the systems and support needed to maintain visibility without requiring the owner to be physically present.",
        },
        {
            question: "Does Smart Key handle property maintenance in Queens?",
            answer: "Yes. Smart Key coordinates maintenance requests, vendor communication, repair tracking and property oversight to help owners address issues efficiently while keeping them informed throughout the process.",
        },
    ];


  return (
    <main className='bg-white text-[#17395f]'>
        {/* Queens Hero */}
        <section className="relative aspect-[16/6] overflow-hidden flex items-center pt-20 sm:pt-24 md:pt-28">
            <img
                src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ac7a8c506a4f7be62e43421_Hero%20Image%20(1).avif"
                alt="Queens Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#07172a]/75"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 flex flex-col">
                <p className="text-white/70 text-sm sm:text-base">
                    Home / Queens
                </p>

                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Queens
                </h1>
            </div>
        </section>

        {/* Queens Property Management */}
        <section className="bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-20">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">

                <h1 className="w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Queens Property Management for Rental Property Owners
                </h1>

                <p className="w-full max-w-5xl mt-8 text-base sm:text-lg md:text-xl leading-relaxed">
                    <a
                        href="/"
                        className="text-blue-500 hover:underline"
                    >
                        Smart Key Property Management
                    </a>
                    provides reliable Queens property management support for residential
                    landlords who need organized operations, responsive communication and
                    consistent property oversight. From tenant coordination and rent
                    collection to maintenance, lease administration and reporting, we
                    help keep rental properties running smoothly. Our approach to property
                    management in Queens NY focuses on transparency, proactive coordination
                    and dependable support tailored to each property's needs.
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
                    Neighborhoods We Serve Across Queens
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
                            src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ac7a8c790984bfcf4683bcd_Section%203.avif"
                            alt="Property management in Queens"
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex w-full flex-col p-2 sm:p-5 md:p-7 lg:w-1/2 lg:p-8">
                        <h2 className="text-3xl font-semibold leading-tight text-[#416184] sm:text-4xl lg:text-[42px]">
                            Full-Service Property Management in Queens
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-[#416184] sm:text-base">
                            Smart Key brings the essential responsibilities of rental
                            management together through one organized process. From tenant
                            coordination and financial tracking to maintenance and compliance
                            support, we help residential owners maintain smoother property
                            operations with clear communication.
                        </p>

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

       
{/* Another Info Card */}
<section className="bg-white py-12 md:py-20">
  <div className="mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-5">

    {/* Main Card */}
    <div className="grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-[28px] border border-[#e7edf3] bg-[#f8fafc]  shadow-[0_12px_40px_rgba(23,57,95,0.08)] md:p-8 lg:grid-cols-[1.15fr_1.1fr_140px] lg:gap-6 lg:p-">

      {/* Left: Content */}
      <div className="flex flex-col justify-center py-4 lg:py-8 lg:pl-1">
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#416184]">
          ● Property Management Success
        </p>

        <h2 className="text-2xl font-bold leading-tight text-[#416184] sm:text-3xl xl:text-4xl">
          From Open Violations to Zero: A Real Example of Proactive Property Management
        </h2>

        <p className="mt-5 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
          Property compliance requires more than identifying issues—it requires
          consistent attention, coordination, and follow-through. At 120-28 218th
          St, Jamaica, NY 11411, Smart Key stepped in to create a more organized
          process for tracking violations, coordinating repairs and improving
          overall property oversight.
        </p>

        <p className="mt-3 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
          By maintaining regular monitoring, coordinating the necessary work,
          and following up on outstanding items, Smart Key helped bring the
          property's open compliance issues down to zero.
        </p>

        <a
          href="/services/legal-compliances-and-risk-management"
          className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-[#416184] underline underline-offset-4 transition hover:text-[#1f83c5]"
        >
          LEARN MORE <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Center: Image */}
      <div className="relative min-h-[280px] overflow-hidden rounded-xl ">
        <img
          src="https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6ac7a8c8072fd293dce0abe3_Section%204.avif"
          alt="Property management house in Queens"
          loading="lazy"
          className="absolute inset-0 h-full  object-cover"
        />
      </div>

      {/* Right: Statistics */}
      <div className="flex flex-col justify-center divide-y divide-[#dfe7ee] " >
        {numbers.map((item) => (
          <div
            key={item.title}
            className="py-5 first:pt-0 last:pb-0 lg:py-7"
          >
            <span className="block font-bold leading-none text-[#416184] sm:text-lg lg:text-2xl ">
              {item.title}
            </span>

            <p className="mt-3 leading-5 text-[#718ba8] font-bold ">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


        {/* Another Card */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* Card 1: The Challenge */}
                    <div className="bg-[#f8fafc] p-6 sm:p-8 md:p-10 rounded-[24px] border border-[#e7edf3] shadow-[0_12px_40px_rgba(23,57,95,0.04)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(23,57,95,0.08)]">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#416184] text-center mb-4 sm:mb-6">
                                The Challenge
                            </h3>

                            <p className="text-sm sm:text-base leading-relaxed text-[#416184] text-center max-w-xl mx-auto">
                                The property required a more organized approach to managing compliance concerns, including outstanding DOB violations, OATH/ECB violations, complaints and related penalties. Resolving these issues required consistent monitoring, documentation, repair coordination and communication with the appropriate departments.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Smart Key's Approach */}
                    <div className="bg-[#f8fafc] p-6 sm:p-8 md:p-10 rounded-[24px] border border-[#e7edf3] shadow-[0_12px_40px_rgba(23,57,95,0.04)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(23,57,95,0.08)]">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#416184] text-center mb-4 sm:mb-6">
                                Smart Key's Approach
                            </h3>

                            <p className="text-sm sm:text-base leading-relaxed text-[#416184] text-center max-w-xl mx-auto">
                                Smart Key followed a structured process focused on tracking outstanding issues, coordinating with contractors and vendors, monitoring repair progress, maintaining proper documentation and communicating with relevant agencies. Through consistent oversight and follow-up, the team ensured that compliance matters received the necessary attention and moved toward resolution.
                            </p>
                        </div>
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
                    Why Queens Landlords Choose Smart Key
                </h2>

                <p className="w-full max-w-5xl mt-6 text-sm sm:text-base leading-7 text-[#416184]">
                    Smart Key combines clear pricing, responsive support and structured property management to help Queens landlords manage their rentals with greater control and confidence.
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
        <section>
            <div>
                <FAQ 
                title="Frequently Asked Question"
                data={faqData}
                />
            </div>
        </section>

        {/* Footer CTA */}
        <FooterCTA 
        backgroundSrc={'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/Footer_SamrtKey.avif'}
        title={'Own Property? We Make Managing It Effortless.'}
        buttonText='Schedule Free Consultation'
        buttonLink='/contact'
        />

    </main>
  )
}

export default Queens
