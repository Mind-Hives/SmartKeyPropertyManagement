
import React from "react";

const FeatureBlockHorizontal = ({ icon, title, text }) => {
    return (
        <div className="flex w-full min-w-0 flex-col items-start gap-6 rounded-xl border border-[#9ddff5] bg-[#f0faff] p-4 shadow-[0_4px_16px_rgba(23,57,95,0.06)] sm:flex-row sm:items-start sm:p-5">

            {/* Icon or Image */}
            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg  text-[#1f83c5]">
                {typeof icon === "string" ? (
                    <img
                        src={icon}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    icon
                )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
                <h3 className="break-words text-base font-semibold text-[#2f4f73] sm:text-lg">
                    {title}
                </h3>

                <p className="mt-1 break-words text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                    {text}
                </p>
            </div>

        </div>
    );
};

export default FeatureBlockHorizontal;
