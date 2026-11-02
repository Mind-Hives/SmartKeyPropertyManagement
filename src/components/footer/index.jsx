
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#162238] text-white font-sans">
      <div className="max-w-[1780px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 lg:pt-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 pb-12 border-b border-white/15">

          {/* Company Info */}
          <div>
            <img
              src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/SamrtKey-logo-shape_result.avif"
              alt="Smart Key Property Management"
              className="w-[150px] mb-5"
            />

            <p className="text-[13px] leading-7 text-[#a9bdd2] max-w-[310px]">
              Smart Key Property Management manages small to mid-size rental
              properties with dedicated local support for peace of mind and
              long-term value.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/smartkey_property_management" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#162238] transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com/profile.php?id=61587468783938" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#162238] transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="https://x.com/SmartkeyPM" aria-label="X" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#162238] transition-all duration-300">
                <span className="text-sm font-semibold">𝕏</span>
              </a>
              <a href="https://www.linkedin.com/company/smartkey-property-management" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#162238] transition-all duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[15px] font-bold mb-6">Quick Links</h4>

            <div className="flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["Pricing", "/pricing"],
                ["Contact Us", "/contact-us"],
                ["Legal & Policies", "/privacy-policy"],
                ["Blogs", "/blogs"],
              ].map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  className="w-fit text-[13px] text-[#a9bdd2] hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[15px] font-bold mb-6">Get in Touch</h4>

            <div className="space-y-5 text-[13px] text-[#a9bdd2]">

              <a href="tel:+16464325559" className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>+1 (646) 432-5559</span>
              </a>

              <a href="mailto:info@smartkeypropertymanagement.com" className="flex items-start gap-3 hover:text-white transition-colors break-all">
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span>info@smartkeypropertymanagement.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p className="leading-6">
                  New Jersey - 64 Van Buren St Little Ferry, NJ 07643, USA
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p className="leading-6">
                  New York - 20 West 47th Street, Suite 607, New York, NY 10036
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 py-10 lg:py-12 border-b border-white/15">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
              Do You Own a Property? Let Us Handle It for You.
            </h3>

            <p className="text-[13px] md:text-sm text-[#a9bdd2] leading-6 max-w-[650px]">
              Find out how Smart Key can simplify your property management by
              setting up a free consultation.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-3 w-fit bg-white text-[#162238] text-[13px] font-bold px-7 py-3.5 rounded-full hover:bg-[#dff6ff] hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 text-[11px] text-[#a9bdd2]">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} Smart Key Property Management. All Rights Reserved.
          </p>

          <p className="text-center">
            Designed and Developed by{" "}
            <span className="text-white font-semibold"><a className="hover:text-amber-200" href="https://mindhives.co/">@MindHives</a></span>
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="text-center pb-6">
          <Link
            to="/privacy-policy"
            className="text-[11px] text-[#a9bdd2] hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
