import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  CheckCircle2,
  Percent,
  House,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Wallet,
  FileText,
  Wrench,
  UserRoundPlus,
  Gavel,
  BookOpen,
  UserRound,
  Building2,
  ClipboardCheck,
  Trash2,
  CircleHelp,
  Phone,
  ArrowRight,
  MessageCircle,
  LockKeyhole,
  Check,
  Loader2,
  X,
} from "lucide-react";

/* ==========================================
   CONFIGURATION
========================================== */

const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "";
const QUOTE_API = import.meta.env.VITE_PRICING_API_URL || "/api/send-email";

/* ==========================================
   CORE PLAN FEATURES
========================================== */

const coreFeatures = [
  "Rent Collection",
  "Maintenance Coordination",
  "Utility Billing & Management",
  "Bookkeeping & Financial Reports",
  "Property Inspection: 1hr./month",
  "Tenant Communication",
  "Real-time Legal Assistance",
  "Re-Leasing & Lease Renewals",
  "New Tenant Onboarding",
  "Property Insurance Assistance",
];

/* ==========================================
   ADDITIONAL SERVICES
========================================== */

const services = [
  {
    id: "rent",
    label: "Rent and Arrear Collection",
    icon: Wallet,
  },
  {
    id: "leasing",
    label: "Re-Leasing & Lease Renewals",
    icon: FileText,
  },
  {
    id: "vendor",
    label: "Maintenance and Vendor Coordination",
    icon: Wrench,
  },
  {
    id: "onboarding",
    label: "New Tenant Onboarding",
    icon: UserRoundPlus,
  },
  {
    id: "eviction",
    label: "Eviction Process Support & Legal Coordination",
    icon: Gavel,
  },
  {
    id: "utility",
    label: "Utility Billing & Management",
    icon: House,
  },
  {
    id: "bookkeeping",
    label: "Bookkeeping & Financial Reports",
    icon: BookOpen,
  },
  {
    id: "manager",
    label: "Dedicated On-ground Property Manager",
    icon: UserRound,
    children: ["1 hr/month", "3 hrs/month", "5 hrs/month"],
  },
  {
    id: "agencies",
    label: "Coordination with City Agencies/Attorneys",
    icon: Building2,
  },
  {
    id: "hearings",
    label: "Coordinate Hearings and Violation Resolutions",
    icon: Gavel,
  },
  {
    id: "cleanup",
    label: "Post-Construction Cleanup",
    icon: Trash2,
  },
  {
    id: "dhcr",
    label: "DHCR Filing & Compliance",
    icon: ClipboardCheck,
  },
  {
    id: "maintenance",
    label: "Property Maintenance",
    icon: Wrench,
    children: [
      "Garbage Collection",
      "Pest Control",
      "Snow Removal",
      "Grass or Tree Cutting",
    ],
  },
  {
    id: "other",
    label: "Other",
    icon: CircleHelp,
  },
];

/* ==========================================
   INTERNAL STYLES
========================================== */

const internalStyles = `
  .sk-pricing {
    font-family: inherit;
  }

  .sk-pricing * {
    box-sizing: border-box;
  }

  .sk-pricing .sk-service-scroll {
    scrollbar-width: thin;
    scrollbar-color: #a3a3a3 transparent;
  }

  .sk-pricing .sk-service-scroll::-webkit-scrollbar {
    width: 7px;
  }

  .sk-pricing .sk-service-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .sk-pricing .sk-service-scroll::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 10px;
  }

  .sk-pricing .sk-service-scroll::-webkit-scrollbar-thumb:hover {
    background: #777;
  }

  .sk-pricing .sk-form-input {
    width: 100%;
    height: 44px;
    padding: 0 13px;
    background: #f7f9fd;
    color: #172846;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 12px;
    outline: none;
    transition: all .2s ease;
  }

  .sk-pricing .sk-form-input::placeholder {
    color: #a0adc3;
  }

  .sk-pricing .sk-form-input:focus {
    background: #fff;
    border-color: #7ba7ef;
    box-shadow: 0 0 0 3px rgba(67,129,232,.08);
  }

  .sk-pricing .sk-service-row {
    transition: background .18s ease;
  }

  .sk-pricing .sk-service-row:hover {
    background: #f4f7fc;
  }

  .sk-pricing .sk-service-dropdown {
    animation: skDropIn .18s ease-out;
  }

  @keyframes skDropIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .sk-pricing .sk-card {
    background: #fff;
    border: 1px solid #edf0f5;
    border-radius: 15px;
    box-shadow: 0 5px 24px rgba(18, 40, 75, .025);
  }

  .sk-pricing .sk-primary-btn {
    background: #192944;
    color: white;
    border: 0;
    border-radius: 5px;
    transition: background .2s ease;
    cursor: pointer;
  }

  .sk-pricing .sk-primary-btn:hover {
    background: #2c4267;
  }

  .sk-pricing .sk-primary-btn:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  .sk-pricing .sk-service-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border-radius: 30px;
    background: #eef4ff;
    padding: 7px 10px;
    color: #315fa7;
    font-size: 11px;
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .sk-pricing .sk-service-scroll {
      max-height: 280px;
    }

    .sk-pricing .sk-form-input {
      font-size: 14px;
    }
  }
`;

/* ==========================================
   CORE PLAN CARD
========================================== */

function CorePlan({ onGetStarted }) {
  return (
    <div className="sk-card px-6 py-8 md:px-7 md:py-9">
      <div className="flex flex-col items-center text-center">
        <Star size={40} fill="#ffc83d" color="#e2a51a" strokeWidth={1.5} />

        <span className="mt-4 px-4 py-1 rounded-full bg-[#e9f7ed] text-[#349261] text-[11px]">
          Our Core Plan
        </span>

        <h2 className="mt-4 text-[#142644] text-[27px] font-semibold">
          Core Plan
        </h2>

        <p className="mt-1 text-[#8090aa] text-[13px]">Only</p>

        <h3 className="mt-1 text-[#172846] text-[19px] font-bold">
          5% of Monthly Rent
        </h3>

        <p className="mt-4 text-[#8290aa] text-[12px] leading-6 max-w-[240px]">
          Professional property management that covers the essentials—at a great
          value.
        </p>
      </div>

      <div className="mt-10">
        <p className="text-center uppercase tracking-[0.17em] text-[#7b8ba5] text-[10px] font-semibold mb-4">
          Pricing Structure
        </p>

        <div className="space-y-3">
          <div className="bg-[#eff9f2] rounded-xl px-4 py-4 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 rounded-full bg-[#36ac72] flex items-center justify-center text-white">
              <Percent size={17} />
            </div>

            <div>
              <p className="text-[#6b7c92] text-[11px]">
                If your rent roll is $6,000 or more
              </p>
              <p className="text-[#172846] text-[13px] font-bold">
                5% of Monthly Rent
              </p>
            </div>
          </div>

          <div className="bg-[#eef4ff] rounded-xl px-4 py-4 flex items-center gap-3">
            <div className="w-9 h-9 shrink-0 rounded-full bg-[#4381e8] flex items-center justify-center text-white">
              <House size={17} />
            </div>

            <div>
              <p className="text-[#6b7c92] text-[11px]">
                If your rent roll is less than $6,000
              </p>
              <p className="text-[#172846] text-[13px] font-bold">
                Flat monthly fee of $300 per property
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-11">
        <p className="text-center uppercase tracking-[0.17em] text-[#7b8ba5] text-[10px] font-semibold mb-5">
          Core Plan Includes
        </p>

        <div className="space-y-3.5">
          {coreFeatures.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[#203859] shrink-0 mt-[2px]"
              />
              <span className="text-[12px] text-[#596982] leading-5">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onGetStarted}
        className="sk-primary-btn mt-9 w-full uppercase tracking-[0.05em] text-[12px] font-bold py-4"
      >
        Get Started
      </button>
    </div>
  );
}

/* ==========================================
   SERVICE DROPDOWN
   - MULTI-SELECT
   - TWO NESTED DROPDOWNS
========================================== */

function ServiceDropdown({ selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [expanded, setExpanded] = useState({
    manager: false,
    maintenance: false,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  const toggleService = (id) => {
    onChange((prev) => {
      const updated = { ...prev };

      if (updated[id]) {
        delete updated[id];
      } else {
        updated[id] = true;
      }

      return updated;
    });
  };

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Only one manager duration can be selected
  const selectManager = (hours) => {
    onChange((prev) => {
      const next = { ...prev };

      if (next.manager === hours) {
        delete next.manager;
      } else {
        next.manager = hours;
      }

      return next;
    });
  };

  // Multiple maintenance services can be selected
  const toggleMaintenance = (item) => {
    onChange((prev) => {
      const current = Array.isArray(prev.maintenance) ? prev.maintenance : [];

      const updated = current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item];

      const next = { ...prev };

      if (updated.length) {
        next.maintenance = updated;
      } else {
        delete next.maintenance;
      }

      return next;
    });
  };

  const selectedCount = Object.values(selected).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value),
  ).length;

  return (
    <div ref={dropdownRef} className="relative">
      {/* MAIN DROPDOWN BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full h-11 bg-[#f6f8fc] hover:bg-[#f0f4fb] text-left px-4 rounded-md flex items-center justify-between border border-transparent focus:border-[#a4bdf0] transition"
      >
        <span className="text-[12px] text-[#8c9ab4]">
          {selectedCount > 0
            ? `${selectedCount} service${selectedCount > 1 ? "s" : ""} selected`
            : "Choose services to add..."}
        </span>

        {isOpen ? (
          <ChevronUp size={16} className="text-[#8fa1bf]" />
        ) : (
          <ChevronDown size={16} className="text-[#8fa1bf]" />
        )}
      </button>

      {/* DROPDOWN PANEL */}
      {isOpen && (
        <div className="sk-service-dropdown absolute left-0 right-0 top-[calc(100%+5px)] z-40 bg-white rounded-lg shadow-[0_14px_36px_rgba(16,35,60,0.12)] border border-[#edf0f5] overflow-hidden">
          <div className="sk-service-scroll max-h-[330px] overflow-y-auto overscroll-contain p-2">
            {services.map((service) => {
              const Icon = service.icon;

              const hasChildren = Boolean(service.children?.length);

              const isExpanded = Boolean(expanded[service.id]);

              const isSelected = Boolean(selected[service.id]);

              return (
                <div key={service.id}>
                  <button
                    type="button"
                    onClick={() =>
                      hasChildren
                        ? toggleExpanded(service.id)
                        : toggleService(service.id)
                    }
                    className={`sk-service-row w-full flex items-center gap-3 px-3 py-3 text-left rounded-md ${
                      isSelected || isExpanded ? "bg-[#f1f5fb]" : ""
                    }`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className="text-[#4381f2] shrink-0"
                    />

                    <span className="flex-1 text-[12px] text-[#253958] leading-5">
                      {service.label}
                    </span>

                    {hasChildren ? (
                      isExpanded ? (
                        <ChevronUp size={15} className="text-[#7387a7]" />
                      ) : (
                        <ChevronDown size={15} className="text-[#7387a7]" />
                      )
                    ) : (
                      <span
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-[#4381f2] border-[#4381f2] text-white"
                            : "border-[#d3daea]"
                        }`}
                      >
                        {isSelected && <Check size={12} />}
                      </span>
                    )}
                  </button>

                  {/* MANAGER HOURS SUBDROPDOWN */}
                  {service.id === "manager" && isExpanded && (
                    <div className="pl-8 pr-2 py-1 space-y-1">
                      {service.children.map((hours) => {
                        const checked = selected.manager === hours;

                        return (
                          <button
                            type="button"
                            key={hours}
                            onClick={() => selectManager(hours)}
                            className={`w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-[12px] ${
                              checked
                                ? "bg-[#edf3ff] text-[#2865cf]"
                                : "text-[#60708c] hover:bg-[#f4f7fc]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                checked
                                  ? "border-[#4381f2]"
                                  : "border-[#cbd5e1]"
                              }`}
                            >
                              {checked && (
                                <span className="w-2 h-2 bg-[#4381f2] rounded-full" />
                              )}
                            </span>

                            {hours}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* PROPERTY MAINTENANCE SUBDROPDOWN */}
                  {service.id === "maintenance" && isExpanded && (
                    <div className="pl-8 pr-2 py-1 space-y-1">
                      {service.children.map((item) => {
                        const checked = (selected.maintenance || []).includes(
                          item,
                        );

                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleMaintenance(item)}
                            className={`w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-[12px] ${
                              checked
                                ? "bg-[#edf3ff] text-[#2865cf]"
                                : "text-[#60708c] hover:bg-[#f4f7fc]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                checked
                                  ? "bg-[#4381f2] border-[#4381f2] text-white"
                                  : "border-[#cbd5e1]"
                              }`}
                            >
                              {checked && <Check size={12} />}
                            </span>

                            {item}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================
   QUOTE FORM
========================================== */

function QuoteForm({ formRef }) {
  const [selected, setSelected] = useState({});
  const [otherDetails, setOtherDetails] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const removeService = (id) => {
    setSelected((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    setMessage("");
    setSuccess(false);

    if (selected.other && !otherDetails.trim()) {
      setMessage("Please describe your other service requirement.");
      return;
    }

    const selectedServices = services
      .filter((service) => selected[service.id])
      .map((service) => {
        if (service.id === "manager") {
          return `${service.label}: ${selected.manager}`;
        }

        if (service.id === "maintenance") {
          return `${service.label}: ${selected.maintenance.join(", ")}`;
        }

        if (service.id === "other") {
          return `Other: ${otherDetails}`;
        }

        return service.label;
      });

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      plan: "Core Plan",
      services: selectedServices,
      type: "quote",
    };

    // API submission
    if (QUOTE_API) {
      try {
        setSubmitting(true);

        const response = await fetch(QUOTE_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || "Unable to submit your quote request.");
        }

        setSuccess(true);
        setMessage(
          data.message || "Your quote request has been submitted successfully.",
        );

        setForm({
          name: "",
          email: "",
          phone: "",
        });
        setSelected({});
        setOtherDetails("");
      } catch (error) {
        setMessage(error.message || "Something went wrong.");
      } finally {
        setSubmitting(false);
      }

      return;
    }

    // Email fallback
    if (CONTACT_EMAIL) {
      const subject = "SmartKey Custom Property Management Quote";

      const body = [
        `Full Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Plan: ${payload.plan}`,
        "",
        "Selected Services:",
        ...selectedServices.map((service) => `- ${service}`),
      ].join("\n");

      window.location.href =
        `mailto:${CONTACT_EMAIL}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      setMessage("Your email application will open with your quote details.");

      return;
    }

    setMessage(
      "Quote submission is not configured. Set VITE_PRICING_API_URL or VITE_CONTACT_EMAIL in your environment.",
    );
  };

  return (
    <div ref={formRef} className="sk-card p-6 md:p-8 lg:p-9">
      <div className="text-center">
        <h2 className="text-[#142644] text-[20px] md:text-[22px] font-semibold flex items-center justify-center gap-2">
          <SlidersHorizontal size={21} className="text-[#4381e8]" />
          Add Only What You Need.
        </h2>

        <p className="text-[#8493ae] text-[12px] leading-6 max-w-[410px] mx-auto mt-2">
          Customize your management plan with additional services. Tell us what
          you need and we'll send you a tailored quote.
        </p>
      </div>

      <form onSubmit={submitForm} className="mt-10">
        {/* STEP 1 */}
        <div>
          <label className="block uppercase tracking-[0.12em] text-[#253958] text-[10px] font-bold mb-4">
            Step 1: Select Additional Services
          </label>

          <ServiceDropdown selected={selected} onChange={setSelected} />

          {/* OTHER SERVICE INPUT */}
          {selected.other && (
            <div className="mt-4">
              <label className="block text-[12px] text-[#253958] mb-2">
                Other Service Requirements
              </label>

              <textarea
                rows={3}
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
                placeholder="Describe your requirements..."
                className="w-full bg-[#f7f9fd] rounded-md border border-[#e8edf5] p-3 text-[12px] outline-none focus:border-[#4381e8]"
              />
            </div>
          )}

          {/* SELECTED SERVICES */}
          {Object.keys(selected).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {services
                .filter((service) => selected[service.id])
                .map((service) => (
                  <span key={service.id} className="sk-service-chip">
                    {service.label}

                    <button
                      type="button"
                      aria-label={`Remove ${service.label}`}
                      onClick={() => removeService(service.id)}
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
            </div>
          )}
        </div>

        {/* STEP 2 */}
        <div className="mt-9">
          <label className="block uppercase tracking-[0.12em] text-[#253958] text-[10px] font-bold mb-5">
            Step 2: Your Contact Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label
                htmlFor="sk-name"
                className="block text-[#253958] text-[12px] mb-2"
              >
                Full Name
              </label>

              <input
                id="sk-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter your name"
                className="sk-form-input"
              />
            </div>

            <div>
              <label
                htmlFor="sk-email"
                className="block text-[#253958] text-[12px] mb-2"
              >
                Email Address
              </label>

              <input
                id="sk-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="Enter your email"
                className="sk-form-input"
              />
            </div>

            <div>
              <label
                htmlFor="sk-phone"
                className="block text-[#253958] text-[12px] mb-2"
              >
                Phone Number
              </label>

              <input
                id="sk-phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="sk-form-input"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={submitting}
                className="sk-primary-btn w-full h-11 font-bold text-[12px] tracking-wide uppercase flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 size={16} className="animate-spin" />}
                Get My Custom Quote
              </button>
            </div>
          </div>

          {message && (
            <p
              role="status"
              className={`text-[12px] text-center mt-5 ${
                success ? "text-green-600" : "text-amber-700"
              }`}
            >
              {message}
            </p>
          )}

          <p className="flex items-center justify-center gap-2 text-center text-[#a0adc3] text-[11px] mt-6">
            <LockKeyhole size={13} />
            Your information will be used to respond to your quote request.
          </p>
        </div>
      </form>
    </div>
  );
}

/* ==========================================
   PORTFOLIO CTA
========================================== */

function PortfolioCTA() {
  return (
    <div className="sk-card relative overflow-hidden px-6 md:px-10 py-10 md:py-12 text-center">
      <div className="absolute -right-9 -top-12 w-28 h-28 rounded-full bg-[#f3f4ff]" />
      <div className="absolute -left-8 -bottom-10 w-24 h-24 rounded-full bg-[#f3f4ff]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="h-14 w-14 rounded-full bg-[#e8f0ff] text-[#4e83dc] flex items-center justify-center">
          <MessageCircle size={25} strokeWidth={1.7} />
        </div>

        <h2 className="mt-5 text-[#142644] text-[20px] md:text-[22px] font-semibold leading-snug">
          Have Multiple Properties or Looking for Portfolio Management?
        </h2>

        <p className="text-[#8493ae] text-[12px] leading-6 max-w-[450px] mt-2">
          We offer tailored portfolio management solutions for landlords with
          multiple properties. Let's discuss your needs directly.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5 mt-6">
          <a
            href="tel:+1 (646) 432-5559"
            className="inline-flex items-center gap-2 bg-[#4381e8] text-white rounded-lg px-6 py-3 text-[12px] font-semibold hover:bg-[#326ed0] transition"
          >
            <Phone size={16} />
            {CONTACT_PHONE ? "Call Us Now" : "Contact Us"}
          </a>

          <a
            href="mailto:info@smartkeypropertymanagement.com"
            className="inline-flex items-center gap-2 text-[#4381e8] text-[12px] font-semibold hover:underline"
          >
            Click Here to Email Us
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   MAIN PRICING PAGE
========================================== */

export default function PricingPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="sk-pricing bg-white">
      {/* ALL CUSTOM CSS IS INSIDE THIS FILE */}
      <style>{internalStyles}</style>

      {/* Pricing and Packages Hero */}
      <section className="relative flex h-[300px] items-center overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          src="https://res.cloudinary.com/kj98z6s1/image/upload/v1793208102/Price-Package_Price.avif"
          alt="Pricing and Packages"
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

            <span className="text-[#9ddff5]">Pricing and Packages</span>
          </nav>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Pricing and Packages
          </h1>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-white py-16 md:py-24 px-5">
        <div className="max-w-[1120px] mx-auto">
          {/* SECTION HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-[#142644] text-3xl md:text-[38px] font-semibold leading-tight">
              Property Management
              <br />
              Pricing & Plans in NYC
            </h2>

            <p className="text-[#8d9bb3] text-sm mt-4">
              Simple pricing. Transparent management. Tailored to your needs.
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_minmax(0,1fr)] gap-5 lg:gap-6 items-start">
            {/* LEFT */}
            <CorePlan onGetStarted={scrollToForm} />

            {/* RIGHT */}
            <div className="flex flex-col gap-6 md:gap-10 min-w-0">
              <QuoteForm formRef={formRef} />

              <PortfolioCTA />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
