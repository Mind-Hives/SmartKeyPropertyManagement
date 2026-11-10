import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const CONTACT_API = import.meta.env.VITE_CONTACT_API_URL || "/api/send-email";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name and phone number.",
      });
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(CONTACT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          type: "contact",
        }),
      });

      const contentType = response.headers.get("content-type") || "";

if (!contentType.includes("application/json")) {
  throw new Error("Invalid API response: Expected JSON.");
}

const data = await response.json();

if (!response.ok || data.success !== true) {
  throw new Error(
    data.error || data.message || "Unable to send your message."
  );
}

      setStatus({
        type: "success",
        message:
          data.message || "Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208095/Contact-Us_SmartKey.avif"
          alt="Contact us"
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
            <span className="text-[#9ddff5]">Contact Us</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <h2 className="text-[#1d2d44] text-4xl md:text-5xl font-semibold leading-tight">
              Question not answered yet?
              <br />
              We are here to help!
            </h2>

            <p className="mt-5 text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              Send us your details and our team will get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 p-6 md:p-8 space-y-5"
          >
            {status.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#1d2d44] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#1d2d44] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#1d2d44] focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1d2d44] mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm outline-none resize-none focus:border-[#1d2d44] focus:bg-white transition"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d2d44] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2f4f73] transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  Sending...
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
