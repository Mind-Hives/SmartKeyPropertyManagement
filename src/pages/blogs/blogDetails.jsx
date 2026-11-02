
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { Link, useParams } from "react-router-dom";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/+$/, "");

const HERO_IMAGE =
  "https://cdn.prod.website-files.com/685ee05b8ece331bff83d4b9/6a6395ce80d2691903f841da_Smartkey%20Website%20Hero%20Images.avif";

const getImageUrl = (path) => {
  if (!path || typeof path !== "string") return "";

  const imagePath = path.trim();

  // Already an absolute image URL
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  // Protocol-relative URL
  if (imagePath.startsWith("//")) {
    return `https:${imagePath}`;
  }

  // Convert relative CMS path to absolute URL
  return `${API_URL}/${imagePath.replace(/^\/+/, "")}`;
};


// Format blog publication date.
const formatDate = (date) => {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// Normalize text when comparing headings.
const normalizeText = (text) =>
  (text || "")
    .replace(/^H1:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

// Prepare HTML saved by the CMS.
const prepareBlogHtml = (html, title) => {
  if (!html || typeof html !== "string") return "";

  // Sanitize CMS HTML before working with it.
  const cleanHtml = DOMPurify.sanitize(html);

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, "text/html");

  // Remove duplicate H1 if the content starts
  // with the same title already shown above.
  const firstElement = doc.body.firstElementChild;

  if (
    firstElement?.tagName === "H1" &&
    normalizeText(firstElement.textContent) === normalizeText(title)
  ) {
    firstElement.remove();
  }

  // Ensure images from CMS use the correct backend.
  doc.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");

    if (src) {
      img.setAttribute("src", getImageUrl(src));
    }

    img.setAttribute("loading", "lazy");
  });

  // External links open in a new tab.
  doc.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href");

    if (!href) return;

    if (/^https?:\/\//i.test(href)) {
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Sanitize again after URL normalization.
  return DOMPurify.sanitize(doc.body.innerHTML);
};

export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch individual blog.
  useEffect(() => {
    if (!id) {
      setError("Invalid blog ID.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");
        setBlog(null);

        const response = await axios.get(
          `${API_URL}/api/blogs/${encodeURIComponent(id)}`,
          {
            signal: controller.signal,
            timeout: 15000,
          }
        );

        console.log("Blog details:", response.data);

        const result = response.data;
        const record = result?.data ?? result?.blog ?? result;

        if (!record || !record.id || record.published === false) {
          throw new Error("Blog not found");
        }

        if (!controller.signal.aborted) {
          setBlog(record);
          setOpenFaq(null);
        }
      } catch (err) {
        if (axios.isCancel(err) || controller.signal.aborted) {
          return;
        }

        console.error("Blog API error:", err);

        setError(
          err.response?.status === 404
            ? "Blog not found."
            : "Unable to load this blog. Please try again."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchBlog();

    return () => controller.abort();
  }, [id]);

  // Format HTML only when blog content changes.
  const formattedContent = useMemo(() => {
    if (!blog) return "";

    return prepareBlogHtml(
      blog.content || "",
      blog.title || ""
    );
  }, [blog]);

  // FAQ data from Next.js CMS.
  const faqs = useMemo(() => {
    if (!blog || !Array.isArray(blog.faqs)) return [];

    return blog.faqs.filter(
      (item) =>
        item &&
        typeof item.question === "string" &&
        typeof item.answer === "string" &&
        item.question.trim() &&
        item.answer.trim()
    );
  }, [blog]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-9 h-9 border-[3px] border-[#17395f]/20 border-t-[#17395f] rounded-full animate-spin mx-auto mb-4" />

          <p className="text-[#17395f] text-sm">
            Loading blog...
          </p>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-5">
        <h1 className="text-[#17395f] text-3xl font-bold mb-3">
          Blog Not Found
        </h1>

        <p className="text-gray-500 text-sm mb-6 text-center">
          {error || "This blog is currently unavailable."}
        </p>

        <Link
          to="/blogs"
          className="bg-[#17395f] text-white px-6 py-3 rounded-full text-sm hover:bg-[#2f4f73] transition"
        >
          Back to Blogs
        </Link>
      </main>
    );
  }

  const publishDate =
    blog.publishedAt ||
    blog.publishDate ||
    blog.createdAt;

  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[220px] md:h-[300px] flex items-end overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#06172a]/80" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 pb-10">
          <nav
            aria-label="Breadcrumb"
            className="text-white/80 text-xs leading-relaxed"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link to="/blogs" className="hover:text-white">
              Blog
            </Link>

            <span className="mx-2">/</span>

            <span className="text-white">
              {blog.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-5 py-14 md:py-20">

        {/* Article Header */}
        <header className="text-center mb-10">
          <p className="text-[#6c87a6] text-xs mb-4">
            {formatDate(publishDate)}
          </p>

          <h1 className="text-[#17395f] text-3xl md:text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
        </header>

        
{/* MAIN BLOG IMAGE */}
{blog.coverImage && (
  <figure className="mb-12 md:mb-16">
    <img
      src={getImageUrl(blog.coverImage)}
      alt={blog.imageAlt || blog.title}
      className="block w-full h-auto max-h-[500px] object-cover rounded-md"
      loading="eager"
      onLoad={() => {
        console.log(
          "Blog image loaded:",
          getImageUrl(blog.coverImage)
        );
      }}
      onError={(event) => {
        console.error("Blog image failed to load:", {
          originalPath: blog.coverImage,
          resolvedUrl: event.currentTarget.src,
        });
      }}
    />
  </figure>
)}


        {/* HTML Blog Content */}
        <div
          className="blog-article"
          dangerouslySetInnerHTML={{
            __html: formattedContent,
          }}
        />

      </article>

      {/* FAQ SECTION */}
      {faqs.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-5">

            <h2 className="text-center text-[#36567a] text-3xl md:text-4xl font-medium mb-12 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>

            <div className="divide-y divide-gray-200">

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={index} className="py-5">

                    <button
                      type="button"
                      className="w-full flex justify-between items-start text-left gap-6"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#273d58] text-sm md:text-base leading-relaxed">
                        {faq.question}
                      </span>

                      <span className="text-[#36567a] text-xl shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 text-sm text-gray-600 leading-7 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}

    </main>
  );
}
