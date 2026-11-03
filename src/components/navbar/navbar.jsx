import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const aboutLinks = [
  { name: "Our Company", path: "" },
  { name: "Our Team", path: "/our-team" },
];

const servicesLinks = [
  { name: "Rent Collection & Arrears Recovery", path: "/services/rent-collection-and-arrears-recovery" },
  { name: "Lease Administration & Renewals", path: "/services/lease-administration-and-renewals" },
  { name: "Tenant Screening & Placements", path: "/services/tenant-screening-and-placement" },
  { name: "Accounting & Financial Reporting", path: "/services/accounting-financial-reporting" },
  { name: "Maintenance & Resident Services", path: "/services/property-maintenance-and-resident-services" },
  { name: "Compliance & Strategic Oversight", path: "/services/property-compliance-and-strategic-oversight" },
  { name: "Legal Compliances & Risk Management", path: "/services/legal-compliances-and-risk-management" },
];

const appFolioLinks = [
  {
    name: "Login AppFolio",
    path: "https://passport.appf.io/sign_in?idp_type=property&vhostless=true",
  },
];

const locations = [
  { name: "Queens", path: "/queens" },
  { name: "Bronx", path: "/bronx" },
  { name: "Manhattan", path: "/manhattan" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAppFolioOpen, setMobileAppFolioOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns and mobile menu after route navigation
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  };

  // Common active link styling
  const getNavLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-300 hover:text-[#12a8ff] ${
      isActive
        ? "text-[#12a8ff] underline decoration-[#12a8ff] underline-offset-8"
        : ""
    }`;

  // Check whether a dropdown contains the current page
  const isDropdownActive = (links) =>
    links.some((item) => item.path === location.pathname);

  // Desktop dropdown component
  
// Desktop dropdown component
const DesktopDropdown = ({ name, links, width = "min-w-40" }) => {
  const isActive = isDropdownActive(links);
  const isDropdownOpen = activeDropdown === name;

  return (
    <li
      className="relative"
      onMouseEnter={() => setActiveDropdown(name)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        type="button"
        onClick={() => toggleDropdown(name)}
        aria-expanded={isDropdownOpen}
        className={`flex items-center gap-1 font-medium transition-colors duration-300 hover:text-[#12a8ff] ${
          isActive
            ? "text-[#12a8ff] underline decoration-[#12a8ff] underline-offset-8"
            : ""
        }`}
      >
        {name}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown list */}
      <div
        className={`absolute left-0 top-full ${width} pt-5 transition-all duration-300 ${
          isDropdownOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }`}
      >
        <div className="rounded-xl bg-[#f7f4ee] p-4 shadow-2xl">
          <div
            className={`flex flex-col ${
              name === "Services" ? "gap-3 text-left" : "gap-2"
            }`}
          >
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setActiveDropdown(null)}
                className={`text-[16px] font-[500] leading-relaxed text-[#17263d] transition-colors duration-300 hover:text-[#12a8ff] ${
                  location.pathname === item.path
                    ? "text-[#12a8ff] underline decoration-[#12a8ff] underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};


  // Mobile dropdown component
  const MobileDropdown = ({
    name,
    links,
    isDropdownOpen,
    setDropdownOpen,
  }) => {
    return (
      <>
        <button
          type="button"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={`flex w-full cursor-pointer items-center justify-between transition-colors duration-300 hover:text-[#12a8ff] ${
            isDropdownActive(links) ? "text-[#12a8ff]" : ""
          }`}
          aria-expanded={isDropdownOpen}
        >
          {name}

          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="flex flex-col gap-3 pl-4">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block text-sm transition-colors duration-300 hover:text-[#12a8ff] ${
                    isActive
                      ? "text-[#12a8ff] underline decoration-[#12a8ff] underline-offset-4"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <nav
      ref={dropdownRef}
      className="absolute top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208101/SamrtKey-logo-shape_result.avif"
              alt="Smart Key Property Management"
              className="h-32 w-32 object-contain sm:h-28 sm:w-28 md:h-45 md:w-45 lg:h-56 lg:w-56"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-xl font-medium text-white lg:flex xl:gap-8">

          {/* Home */}
          <li>
            <NavLink to="/" end className={getNavLinkClass}>
              Home
            </NavLink>
          </li>

          {/* About */}
          <DesktopDropdown name="About" links={aboutLinks} />

          {/* Services */}
          <DesktopDropdown
            name="Services"
            links={servicesLinks}
            width="w-80"
          />

          {/* Pricing */}
          <li>
            <NavLink to="/pricing" className={getNavLinkClass}>
              Pricing
            </NavLink>
          </li>

          {/* Portfolio */}
          <li>
            <NavLink to="/our-portfolio" className={getNavLinkClass}>
              Portfolio
            </NavLink>
          </li>

          {/* AppFolio */}
          <DesktopDropdown name="AppFolio" links={appFolioLinks} />

          {/* Blogs */}
          <li>
            <NavLink to="/blogs" className={getNavLinkClass}>
              Blogs
            </NavLink>
          </li>

          {/* Locations */}
          <DesktopDropdown
            name="Locations"
            links={locations}
            width="w-40"
          />
        </ul>

        {/* Desktop Contact */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `rounded-full border border-white px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black xl:text-base ${
                isActive ? " text-black" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-white lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer transition-colors duration-300 hover:text-[#12a8ff]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto bg-[#07172a] px-6 py-6 text-white lg:hidden">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block transition-colors duration-300 hover:text-[#12a8ff] ${
                isActive ? "text-[#12a8ff] underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <MobileDropdown
            name="About"
            links={aboutLinks}
            isDropdownOpen={mobileAboutOpen}
            setDropdownOpen={setMobileAboutOpen}
          />

          {/* Services */}
          <MobileDropdown
            name="Services"
            links={servicesLinks}
            isDropdownOpen={mobileServicesOpen}
            setDropdownOpen={setMobileServicesOpen}
          />

          {/* Pricing */}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `block transition-colors duration-300 hover:text-[#12a8ff] ${
                isActive ? "text-[#12a8ff] underline underline-offset-4" : ""
              }`
            }
          >
            Pricing
          </NavLink>

          {/* Portfolio */}
          <NavLink
            to="/our-portfolio"
            className={({ isActive }) =>
              `block transition-colors duration-300 hover:text-[#12a8ff] ${
                isActive ? "text-[#12a8ff] underline underline-offset-4" : ""
              }`
            }
          >
            Portfolio
          </NavLink>

          {/* AppFolio */}
          <button
            type="button"
            onClick={() => setMobileAppFolioOpen(!mobileAppFolioOpen)}
            className="flex w-full cursor-pointer items-center justify-between transition-colors duration-300 hover:text-[#12a8ff]"
            aria-expanded={mobileAppFolioOpen}
          >
            AppFolio
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                mobileAppFolioOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileAppFolioOpen && (
            <div className="flex flex-col gap-3 pl-4">
              {appFolioLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors duration-300 hover:text-[#12a8ff]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Blogs */}
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `block transition-colors duration-300 hover:text-[#12a8ff] ${
                isActive ? "text-[#12a8ff] underline underline-offset-4" : ""
              }`
            }
          >
            Blogs
          </NavLink>

          {/* Locations */}
          <MobileDropdown
            name="Locations"
            links={locations}
            isDropdownOpen={mobileLocationsOpen}
            setDropdownOpen={setMobileLocationsOpen}
          />

          {/* Contact */}
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `mt-2 block rounded-full border border-white py-2 text-center transition-colors duration-300 hover:bg-white hover:text-black ${
                isActive ? "bg-white text-black" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
