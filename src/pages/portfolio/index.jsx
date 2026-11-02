
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

        const response = await axios.get(
          `${API_URL}/api/properties`,
          {
            signal: controller.signal,
            timeout: 15000,
          }
        );

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
        setError(
          "Unable to load properties. Please try again."
        );
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
  const totalPages = Math.ceil(
    properties.length / CARDS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;

  const currentCards = properties.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
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

      {/* HERO SECTION */}
      <section className="relative h-[240px] md:h-[300px] lg:h-[420px] flex items-end overflow-hidden">
        <img
          src='https://res.cloudinary.com/kj98z6s1/image/upload/v1793208095/SamrtKey_Our-Portfolio-Hero-Image_result.avif'
          alt="SmartKey Property Portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#10213a]/70" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-10 md:pb-14">
          <p className="text-white/80 text-xs mb-3">
            Home / Portfolio
          </p>

          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto">

          {/* LOADING STATE */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-9 h-9 border-[3px] border-[#17395f]/20 border-t-[#17395f] rounded-full animate-spin mb-4" />

              <p className="text-gray-500 text-sm">
                Loading properties...
              </p>
            </div>
          )}

          {/* ERROR STATE */}
          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-red-500 text-sm">
                {error}
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-5 px-6 py-2 bg-[#17395f] text-white rounded-full text-xs"
              >
                Try Again
              </button>
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading &&
            !error &&
            properties.length === 0 && (
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                {currentCards.map((property) => (
                  <PortfolioCard
                    key={property.id}
                    property={property}
                  />
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
  // Your CMS stores thumbnailImage separately from images
  const image =
    property.thumbnailImage ||
    property.images?.[0] ||
    "";

  const imageUrl = getImageUrl(image);

  const address = getPropertyAddress(property);

  return (
    <Link
      // to={`/portfolio/${encodeURIComponent(property.id)}`}
      className="group block"
    >
      {/* PROPERTY IMAGE */}
      <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={property.imageAlt || property.name}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* PROPERTY DETAILS */}
      <div className="mt-4">
        <h3 className="text-[#2f4f73] text-sm md:text-base font-semibold group-hover:text-blue-500 transition">
          {property.name}
        </h3>

        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
          {address || property.location || ""}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioPage;
