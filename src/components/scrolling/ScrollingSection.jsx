import React from "react";
import { motion } from "framer-motion";

const ScrollingSec = ({
  title = "",
  description = "",
  steps = [],
  lineColor = "#0078d7",
  titleColor = "#243c5a",
  numberColor = "#405b7b",
  cardBorderColor = "#6ed3ff",
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl md:text-4xl font-bold"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        <p className="max-w-3xl mx-auto mt-4 text-xs md:text-sm text-[#4c647f] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-16 md:mt-24">
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2"
          style={{ backgroundColor: lineColor }}
        >
          {steps.map((_, index) => (
            <span
              key={index}
              className="absolute left-1/2 w-3 h-3 rounded-full -translate-x-1/2"
              style={{
                backgroundColor: lineColor,
                top:
                  steps.length === 1
                    ? "0%"
                    : `${(index / (steps.length - 1)) * 100}%`,
              }}
            ></span>
          ))}
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8"
            >
              <div
                className={`text-5xl md:text-6xl font-light ${
                  step.side === "right"
                    ? "md:text-right md:pr-20"
                    : "md:order-2 md:text-left md:pl-20"
                }`}
                style={{ color: numberColor }}
              >
                {step.no}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`
                  bg-blue-50 rounded-md shadow-lg shadow-blue-100 p-8 max-w-90 mx-auto md:mx-0 
                ${
                  step.side === "right"
                    ? "md:ml-12"
                    : "md:order-1 md:ml-auto md:mr-12"
                }`}
                style={{ border: `1px solid ${cardBorderColor}` }}
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
  );
};

export default ScrollingSec;