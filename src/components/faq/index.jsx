
import React, { useId, useState } from "react";

const FAQ = ({
  title = "Frequently Asked Questions",
  data = [],
  bgColor = "bg-white",
  titleColor = "text-[#2f4f73]",
  borderColor = "border-gray-300",
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqId = useId().replace(/:/g, "");

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  // Generate FAQ structured data from the same visible FAQ content
  const validFAQs = data.filter(
    (item) =>
      typeof item.question === "string" &&
      item.question.trim() &&
      typeof item.answer === "string" &&
      item.answer.trim()
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFAQs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`${bgColor} px-5 py-16 sm:px-8 lg:px-10`}>
      {/* FAQ Schema for SEO */}
      {validFAQs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <div className="mx-auto w-full max-w-5xl">
        {/* FAQ Title */}
        <h2
          className={`mb-10 text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-[42px] ${titleColor}`}
        >
          {title}
        </h2>

        {/* FAQ List */}
        <div className={`border-t ${borderColor}`}>
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `${faqId}-question-${index}`;
            const answerId = `${faqId}-answer-${index}`;

            return (
              <div
                key={item.question || index}
                className={`border-b ${borderColor}`}
              >
                {/* Question */}
                <button
                  id={questionId}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-base font-medium text-[#2f4f73] sm:text-lg md:text-xl"
                >
                  <span className="flex-1">{item.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl leading-none text-[#2f4f73]"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="pb-6 pr-8"
                >
                  <p className="max-w-4xl text-sm leading-7 text-gray-600 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
