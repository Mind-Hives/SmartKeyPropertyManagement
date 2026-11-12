import React from "react";

const ScrollingNames = ({
  names = [],
  fontSize = "text-lg",
  fontWeight = "font-medium",
  textColor = "text-slate-700",
  gap = "gap-12",
  duration = 30,
  pauseOnHover = true,
}) => {
  if (!names.length) return null;

  return (
    <div
      className={`scrolling-names relative w-full overflow-hidden py-3 ${
        pauseOnHover ? "pause-on-hover" : ""
      }`}
    >
      <div
        className="scrolling-names-track flex w-max animate-marquee-forward"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className={`flex shrink-0 items-center ${gap} pr-12`}
          >
            {names.map((name, index) => (
              <span
                key={`${group}-${index}-${name}`}
                className={`shrink-0 whitespace-nowrap ${fontSize} ${fontWeight} ${textColor}`}
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Subtle edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-white to-transparent sm:w-6 md:w-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-white to-transparent sm:w-6 md:w-8"
      />
    </div>
  );
};

export default ScrollingNames;