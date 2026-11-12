import SEO from "@/components/seo/SEO";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, "");
const CARDS_PER_PAGE = 6;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`${API_URL}/api/blogs`);

        console.log("API Response:", response.data);

        const blogData = response.data.data;

        if (Array.isArray(blogData)) {
          setBlogs(blogData.filter((blog) => blog.published === true));
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setError("Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;

  const currentBlogs = blogs.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793724757/worker-reading-news-with-tablet_result.avif"
          alt="Blogs"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#07172a]/75"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pt-16 sm:px-6 sm:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300"
          >
            <Link to="/" className="transition hover:text-[#9ddff5]">
              Home
            </Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span className="text-[#9ddff5]">Blogs</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Blogs
          </h1>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <p className="text-center py-16 text-gray-500">Loading blogs...</p>
          )}

          {error && <p className="text-center py-16 text-red-500">{error}</p>}

          {!loading && !error && blogs.length === 0 && (
            <p className="text-center py-16 text-gray-500">
              No published blogs found.
            </p>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
                {currentBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-14">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="border border-[#2f4f73]/30 text-[#2f4f73] text-xs px-6 py-2 rounded-full disabled:opacity-30"
                  >
                    ← Previous
                  </button>

                  <span className="text-xs text-[#2f4f73]">
                    {currentPage} / {totalPages}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="border border-[#2f4f73]/30 text-[#2f4f73] text-xs px-6 py-2 rounded-full disabled:opacity-30"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* For SEO ranking */}
      <SEO
        title="Blog | SmartKey Property Management"
        description="Explore expert insights, landlord tips, and property management guides from SmartKey Property Management your trusted partner for stress-free rental success."
      />
    </main>
  );
};

const BlogCard = ({ blog }) => {
  const image = blog.coverImage
    ? blog.coverImage.startsWith("http")
      ? blog.coverImage
      : `http://localhost:3000${blog.coverImage}`
    : "/placeholder.jpg";

  return (
    <Link to={`/blogs/${blog.slug}`}>
      <article className="bg-white shadow-md border border-gray-100 overflow-hidden group h-full">
        <div className="w-full h-[190px] overflow-hidden">
          <img
            src={image}
            alt={blog.altText || blog.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="text-[11px] text-gray-400 mb-2">
            {blog.publishDate || blog.createdAt
              ? new Date(
                  blog.publishDate || blog.createdAt,
                ).toLocaleDateString()
              : ""}
          </p>

          <h3 className="text-[#17395f] text-base font-bold leading-snug group-hover:text-blue-500 transition">
            {blog.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mt-3">
            {blog.excerpt || blog.blogDescription || ""}
          </p>

          <span className="inline-block mt-5 text-xs font-semibold text-[#17395f]">
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogPage;
