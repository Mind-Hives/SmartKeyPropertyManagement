
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const SocialMediaGallery = ({
  title = "See what all the talk is about!",
  subtitle = "Transformative client experience from all around the globe",
  cards = [],
}) => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector("[data-gallery-card]");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#eaf6fc] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-[#173957] sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-base text-[#647b91] sm:text-lg lg:text-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {cards.map((card, index) => (
            <a
              key={card.id || card.link || index}
              data-gallery-card
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View social media post ${index + 1}`}
              className="group relative block aspect-[2/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-900 sm:w-[48%] lg:w-[21.5%]"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.alt || `Social media post ${index + 1}`}
                loading="lazy"
                draggable="false"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                <span className="flex h-16 w-16 scale-75 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <Play size={27} fill="currentColor" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollSlider(-1)}
            aria-label="Previous cards"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1d3557] text-[#1d3557] transition hover:bg-[#03045e] hover:text-white sm:h-12 sm:w-12"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider(1)}
            aria-label="Next cards"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1d3557] text-[#1d3557] transition hover:bg-[#03045e] hover:text-white sm:h-12 sm:w-12"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SocialMediaGallery;
