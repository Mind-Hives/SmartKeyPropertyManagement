import React from "react";

// Default reviews
const defaultReviews = [
  {
    id: 1,
    name: "Shanaya",
    rating: 5,
    review:
      "Excellent service and very professional. The team at Smart Key Management has always been very responsive, organized, and makes the entire process smooth and stress-free from start to finish. Highly recommend for anyone looking for reliable property management services.",
    date: "May 14, 2026",
    source: "Google",
  },
  {
    id: 2,
    name: "Pathik",
    rating: 5,
    review:
      "I had an amazing experience with Smart Key property management team! They are professional, responsive, and always handle maintenance requests promptly. Their attention to detail ensures everything runs smoothly, and they make renting stress-free.",
    date: "April 9, 2026",
    source: "Google",
  },
  {
    id: 3,
    name: "Vedangi - White Wave",
    rating: 5,
    review:
      "I had an excellent experience with Smart Key Property Management. Their team is professional, responsive, and truly cares about both property owners and tenants.",
    date: "April 9, 2026",
    source: "Google",
  },
  {
    id: 4,
    name: "Victoria",
    rating: 5,
    review:
      "One of the best apartments I have lived in the Bronx, the landlord is super reliable and understanding. The management handles all necessary problems on time.",
    date: "April 1, 2026",
    source: "Google",
  },
  {
    id: 5,
    name: "Sara",
    rating: 5,
    review:
      "I am very satisfied with the work team. Everyone is always willing to help solve the problems we have and respond quickly to any questions.",
    date: "April 1, 2026",
    source: "Google",
  },
  {
    id: 6,
    name: "Erika Bueno",
    rating: 5,
    review:
      "My husband and I can highly recommend this company due to the great experience we've encountered with them. Smart Key has made our property management seamless.",
    date: "April 1, 2026",
    source: "Google",
  },
  {
    id: 7,
    name: "Colby Franklin",
    rating: 5,
    review:
      "Amazing!!! The entire team is simply amazing. They have went above and beyond to make sure my children and I had what we needed and comfortable in our home.",
    date: "April 1, 2026",
    source: "Google",
  },
  {
    id: 8,
    name: "Ashley Araujo",
    rating: 5,
    review:
      "It has been a comfortable, quiet, and well-maintained place, which has made my stay here very enjoyable. It truly feels like home.",
    date: "April 1, 2026",
    source: "Google",
  },
  {
    id: 9,
    name: "Sandrine Abbe",
    rating: 5,
    review:
      "It's a very professional company. Fast, attentive to the customer's needs, respects appointments, respectful.",
    date: "April 1, 2026",
    source: "Google",
  },
];

// Google logo
const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="h-7 w-7" aria-label="Google">
    <path
      fill="#4285F4"
      d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15z"
    />
    <path
      fill="#34A853"
      d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44z"
    />
    <path
      fill="#FBBC05"
      d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8z"
    />
    <path
      fill="#EA4335"
      d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12z"
    />
  </svg>
);

const GoogleReviews = ({
  reviews = defaultReviews,
  title = "What Makes Property Owners Stay With Us?",
  subtitle = "Property management is more than collecting rent. Discover why owners trust Smart Key for reliable service and peace of mind.",
  duration = 40,
}) => {
  if (!reviews.length) return null;

  // Duplicate reviews for seamless infinite animation
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-[#eaf6fc] py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1f83c5] sm:text-sm">
          Google Reviews
        </span>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#173957] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647b91] sm:text-base">
          {subtitle}
        </p>
      </div>

      {/* Reviews Carousel */}
      <div className="google-reviews-container relative mt-12 w-full overflow-hidden">
        <div
          className="animate-google-reviews flex w-max gap-5 sm:gap-6"
          style={{ animationDuration: `${duration}s` }}
        >
          {duplicatedReviews.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              aria-hidden={index >= reviews.length}
              className="flex min-h-[320px] w-[300px] shrink-0 flex-col rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(23,57,95,0.08)] sm:min-h-[340px] sm:w-[350px] sm:p-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-xl text-[#FBBF24]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>
                    {starIndex < item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              {/* Reviewer Name */}
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {item.name}
              </h3>

              {/* Review Text */}
              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                {item.review}
              </p>

              {/* Google Footer */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <GoogleLogo />

                <div>
                  <p className="text-sm font-bold text-gray-800">Google</p>

                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    Reviews ★★★★★
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Left Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#eaf6fc] to-transparent sm:w-12 md:w-20"
        />

        {/* Right Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#eaf6fc] to-transparent sm:w-12 md:w-20"
        />
      </div>
    </section>
  );
};

export default GoogleReviews;
