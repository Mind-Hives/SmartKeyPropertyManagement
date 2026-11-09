import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/+$/, "");

const CARDS_PER_PAGE = 6;

const HERO_IMAGE =
  "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208095/SamrtKey_Our-Portfolio-Hero-Image_result.avif";

// Convert CMS image path into full URL
const getImageUrl = (path) => {
  if (!path || typeof path !== "string") {
    return "/portfolio/placeholder.jpg";
  }

  const imagePath = path.trim();

  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  return `${API_URL}/${imagePath.replace(/^\/+/, "")}`;
};

// Build complete address from API
const getPropertyAddress = (property) => {
  const parts = [
    property.address,
    property.city,
    property.state,
    property.country,
  ].filter(Boolean);

  return parts.join(", ");
};

const PortfolioPage = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch properties from Next.js API
  useEffect(() => {
    const controller = new AbortController();

    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`${API_URL}/api/properties`, {
          signal: controller.signal,
          timeout: 15000,
        });

        console.log("Properties API:", response.data);

        // Your API returns { data: [...] }
        const propertyData = response.data?.data;

        if (Array.isArray(propertyData)) {
          setProperties(propertyData);
        } else {
          setProperties([]);
        }
      } catch (err) {
        if (axios.isCancel(err)) return;

        console.error("Failed to fetch properties:", err);
        setError("Unable to load properties. Please try again.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProperties();

    return () => controller.abort();
  }, []);

  // Pagination
  const totalPages = Math.ceil(properties.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;

  const currentCards = properties.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE,
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-white">
      {/* Portfolio Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208095/SamrtKey_Our-Portfolio-Hero-Image_result.avif"
          alt="SmartKey Property Portfolio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#10213a]/70"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pt-16 sm:px-6 sm:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300"
          >
            <Link to="/" className="transition hover:text-[#9ddff5]">
              Home
            </Link>

            <ChevronRight size={15} aria-hidden="true" />

            <span className="text-[#9ddff5]">Portfolio</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className=" px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* LOADING STATE */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-9 h-9 border-[3px] border-[#17395f]/20 border-t-[#17395f] rounded-full animate-spin mb-4" />

              <p className="text-gray-500 text-sm">Loading properties...</p>
            </div>
          )}

          {/* ERROR STATE */}
          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-red-500 text-sm">{error}</p>

              <button
                onClick={() => window.location.reload()}
                className="mt-5 px-6 py-2 bg-[#17395f] text-white rounded-full text-xs"
              >
                Try Again
              </button>
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && !error && properties.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-[#17395f] text-xl font-semibold">
                No Properties Available
              </h2>

              <p className="text-gray-500 text-sm mt-3">
                Check back soon for our latest properties.
              </p>
            </div>
          )}

          {/* PROPERTY CARDS */}
          {!loading && !error && properties.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {currentCards.map((property) => (
                  <PortfolioCard key={property.id} property={property} />
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-14">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`border text-xs px-6 py-2 rounded-full transition ${
                      currentPage === 1
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-[#2f4f73]/30 text-[#2f4f73] hover:bg-[#2f4f73] hover:text-white"
                    }`}
                  >
                    ← Previous
                  </button>

                  <span className="text-xs text-[#2f4f73]">
                    {currentPage} / {totalPages}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`border text-xs px-6 py-2 rounded-full transition ${
                      currentPage === totalPages
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-[#2f4f73]/30 text-[#2f4f73] hover:bg-[#2f4f73] hover:text-white"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

// PROPERTY CARD COMPONENT
const PortfolioCard = ({ property }) => {
  // Get property thumbnail
  const image = property.thumbnailImage || property.images?.[0] || "";

  const imageUrl = getImageUrl(image);
  const address = getPropertyAddress(property);

  return (
    <Link
      // to={`/our-portfolio/${encodeURIComponent(property.id)}`}
      className="group block overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1"
    >
      {/* PROPERTY IMAGE */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#f1f5f9]">
        <img
          src={imageUrl}
          alt={property.imageAlt || property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172a]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* PROPERTY DETAILS */}
      <div className="px-1 pb-2 pt-4">
        <h3 className="text-base font-semibold leading-snug text-[#17395f] transition-colors duration-300 group-hover:text-blue-500 sm:text-lg">
          {property.name}
        </h3>

        <div className="mt-2 flex items-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-[#7b91a8]"
            aria-hidden="true"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <p className="text-sm leading-relaxed text-[#64748b]">
            {address || property.location || "Location not available"}
          </p>
        </div>

        {/* Bottom separator */}
        <div className="mt-4 h-px w-full bg-[#e7edf3] transition-colors duration-300 group-hover:bg-blue-500" />
      </div>
    </Link>
  );
};

export default PortfolioPage;
