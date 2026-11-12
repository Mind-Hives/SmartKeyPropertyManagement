
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = ({
  backgroundSrc,
  title,
  buttonText = "Learn More",
  buttonLink = "",
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={backgroundSrc}
      >
        Your browser does not support the video element.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          {/* Title */}
          <h1 className="max-w-4xl break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            {title}
          </h1>

          {/* Button */}
          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-6 sm:mt-8"
            >
              <a
                href={buttonLink}
                className="group inline-flex max-w-full items-center gap-2 sm:gap-3 rounded-full border border-white/70 bg-white/10 px-4 py-2.5 sm:px-6 sm:py-3 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
              >
                <span className="text-sm sm:text-base font-medium break-words">
                  {buttonText}
                </span>

                <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-black/20">
                  <ArrowRight size={18} />
                </span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
