import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = ({
  backgroundType = "image",
  backgroundSrc,
  title,
  buttonText = "Learn More",
  buttonLink = "#",
}) => {
  const heroHeight =
    backgroundType === "video"
      ? "min-h-screen"
      : "min-h-[520px] sm:min-h-[580px] lg:min-h-[650px]";

  return (
    <section
      className={`relative ${heroHeight} w-full overflow-hidden flex items-center`}
    >
      {/* Background */}
      {backgroundType === "video" ? (
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
      ) : (
        <img
          src={backgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          {/* Title */}
          <span className="max-w-4xl break-words text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </span>

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

export default Hero;
