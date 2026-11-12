import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#f8fbff] flex items-center justify-center px-5 overflow-hidden relative">
      
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-3xl text-center relative z-10">
        
        <h1 className="text-[110px] md:text-[180px] font-black text-[#183b63] leading-none tracking-tight">
          404
        </h1>

        <div className="-mt-3">
          <h2 className="text-2xl md:text-5xl font-bold text-[#183b63]">
            Page Not Found
          </h2>

          <p className="mt-5 text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed,
            renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/"
            className="bg-[#183b63] text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#234a77] transition-all duration-300"
          >
            Back To Home
          </Link>

          <Link
            to="/contact-us"
            className="border border-[#183b63] text-[#183b63] px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#183b63] hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-[250px] md:w-[350px] h-[6px] bg-[#dce9f7] rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[40%] bg-[#183b63] animate-[loading_2s_linear_infinite] rounded-full"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              left: -40%;
            }
            100% {
              left: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default NotFound;