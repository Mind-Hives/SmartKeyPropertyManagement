import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FooterCTA = ({
    backgroundSrc = 'https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/Footer_SamrtKey.avif',
    title,
    buttonText = "Learn More",
    buttonLink = "#",
}) => {
    return (
        <section className="relative flex aspect-[4/5] w-full items-center overflow-hidden pt-20 sm:aspect-[16/9] sm:pt-24 lg:aspect-[14/5] lg:pt-28">

            {/* Background Image */}
            <img
                src={backgroundSrc}
                srcSet={backgroundSrc}
                loading="lazy"
                alt="Cta Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/80" />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Heading */}
                    <h1 className="max-w-4xl break-words text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
                                className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/70 bg-white/10 px-4 py-2.5 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black sm:gap-3 sm:px-6 sm:py-3"
                            >
                                <span className="break-words text-sm font-medium sm:text-base">
                                    {buttonText}
                                </span>

                                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-black/20 sm:h-8 sm:w-8">
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

export default FooterCTA;