
import React from "react";

const ServiceBlock = ({
    title,
    description,
    image,
    imageAlt = "Property management",
    reverse = false,
    buttonText = "Read More",
    buttonLink = "#",
}) => {
    return (
        <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-4">
            <div className="mx-auto w-full max-w-7xl">
                {/* Service Container */}
                <div className="flex flex-col gap-5 rounded-2xl border border-[#e7edf3] bg-white p-5 shadow-[0_8px_30px_rgba(23,57,95,0.08)] sm:gap-6 sm:p-7 lg:flex-row lg:items-center lg:gap-8 lg:p-8">

                    {/* Content */}
                    <div
                        className={`flex w-full min-w-0 flex-col items-start text-left lg:w-1/2 ${
                            reverse ? "lg:order-2" : "lg:order-1"
                        }`}
                    >
                        <h3 className="text-2xl font-semibold leading-tight text-[#416184] sm:text-3xl lg:text-4xl">
                            {title}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
                            {description}
                        </p>

                        {/* Button */}
                        <a
                            href={buttonLink}
                            target={"_blank"}
                            // rel={"noopener"}
                            className="mt-5 inline-flex items-center justify-center rounded-full border border-[#d9e2ec] px-6 py-3 text-sm font-medium text-[#416184] transition duration-300 hover:bg-[#416184] hover:text-white sm:mt-6"
                        >
                            {buttonText}
                        </a>
                    </div>

                    {/* Image */}
                    <div
                        className={`w-full min-w-0 lg:w-1/2 ${
                            reverse ? "lg:order-1" : "lg:order-2"
                        }`}
                    >
                        <div className="aspect-[12/9] w-full overflow-hidden rounded-xl sm:rounded-xl">
                            <img
                                src={image}
                                srcSet={image}
                                alt={imageAlt}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceBlock;
