import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import SEO from "@/components/seo/SEO";

const leaders = [
  {
    name: "KAMLESH PATEL",
    role: "Founder",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208154/697b7a1759e92e8dbd789a8e_Pankaj_Founder.avif",
    desc: "Founder and CEO of Smart Key Property Management, leading with a focus on efficiency, trust, and landlord-first service.",
    phNumber:"+1 (201) 442-9946",
    email:"kamlesh@smartkeypropertymanagement.com"
  },
  {
    name: "ROY",
    role: "Head Of Department",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208143/697b7a5f1328ab3b578385b9_Roy.avif",
    desc: "Head of Department managing client support, property operations, and internal coordination.",
        phNumber:"+1 (646) 992-8471",
    email:"roy@smartkeypropertymanagement.com"
  },
  {
    name: "LEO",
    role: "Senior Project Manager",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208153/697b7a657c2fa73c6989c508_Leo.avif",
    desc: "Project Manager responsible for process planning, execution, and client service delivery.",
        phNumber:"+1 (646) 927-1278",
    email:"leo@smartkeypropertymanagement.com"
  },
  {
    name: "ALEX",
    role: "Operations Lead",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208145/697b7a76f43280b655e442dc_Alex.avif",
    desc: "Operations Lead managing daily workflows, team coordination, and service execution.",
        phNumber:"+1 (646) 693-0986",
    email:"alex@smartkeypropertymanagement.com"
  },
  {
    name: "SCOTT",
    role: "Accounts Lead",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208148/697b7a94295697111e492350_Scoot.avif",
    desc: "Accounts Lead handling reporting, rent tracking, reconciliation, and financial workflows.",
        phNumber:"+1 (646) 502-6367",
    email:"scott@smartkeypropertymanagement.com"
  },
  {
    name: "GARY K.",
    role: "Collection Lead",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208141/697ce47f8fbbb11689874625_Gary_K.avif",
    desc: "Collection Lead managing tenant rent collections, reminders, and payment follow-ups.",
        phNumber:"+1 (646) 412-5838",
    email:"gary@smartkeypropertymanagement.com"
  },
  {
    name: "DARYL",
    role: "Legal Compliance and Risk Executive",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208148/69f0d99be442dd51f269303b_Dayrl_image.avif",
    desc: "Handles legal notices, compliance, risk management, and documentation support.",
        phNumber:"+1 (718) 568-8219",
    email:"daryl@smartkeypropertymanagement.com"
  },
  {
    name: "DANNY",
    role: "Marketing Lead",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208154/697b7a6f1056d24360fed3a7_Danny.avif",
    desc: "Marketing Lead supporting brand presence, campaigns, and property marketing.",
        phNumber:"+1 (646) 693-0988",
    email:"danny@smartkeypropertymanagement.com"
  },
  {
    name: "LINDA",
    role: "Sales Representative",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208152/697b7a7febc4c89079513bdb_linda.avif",
    desc: "Sales Representative assisting clients with service questions, onboarding, and consultations.",
        phNumber:"+1 (646) 412-5559",
    email:"linda@smartkeypropertymanagement.com"
  },
];

const teamGroups = [
  {
    title: "Our Collections Team",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208147/6a0cc80d59b644e60f3b6b98_1.avif",
  },
  {
    title: "Our Operations Team",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208150/6a0dcdcce4010f4f5dcd0e38_Third_Group_img.avif",
  },
  {
    title: "Our Accounts Team",
    image: "https://res.cloudinary.com/kj98z6s1/image/upload/v1793208145/6a0dcdc8a567c9f5ab0943d7_Second_Group_Img.avif",
  },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("leaders");

  return (
    <main className="bg-white">
      <section className="bg-[#3e5c76] pt-48 pb-24 px-5 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-medium leading-tight">
          "Meet the Experts Behind Smart Key
          <br className="hidden md:block" />
          Property Management"
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <p className="mt-4 text-sm leading-6 text-[#416184] sm:text-base sm:leading-7">
          Our team at Smart Key Property Management consists of seasoned experts
          with a range of specialties in lease notices, customer relations,
          administration, and property management. We are dedicated to providing
          outstanding service, open communication, and practical support that
          guarantees long-term growth for your investments.
        </p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setActiveTab("leaders")}
            className={`px-6 py-2 rounded text-sm transition ${
              activeTab === "leaders"
                ? "bg-[#24486d] text-white"
                : "border border-[#24486d] text-[#24486d]"
            }`}
          >
            Our Experts
          </button>

          <button
            onClick={() => setActiveTab("groups")}
            className={`px-6 py-2 rounded text-sm transition ${
              activeTab === "groups"
                ? "bg-[#24486d] text-white"
                : "border border-[#24486d] text-[#24486d]"
            }`}
          >
            Our Teams
          </button>
        </div>

        {activeTab === "leaders" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mt-10">
            {leaders.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        ) : (
          <section className="pt-12 space-y-16">
            {teamGroups.map((group, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-2xl font-semibold text-[#17263d] mb-8 text-center underline">
                  {group.title}
                </h2>

                <div className="w-full rounded-md overflow-hidden bg-white">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full max-h-[480px] object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </section>
        )}
      </section>

      {/* For SEO ranking */}
      <SEO 
      title="Introducing Our Team | Smartkey Property Management NYC"
      description="Learn about the skilled people who run Smartkey Property Management. Our team is committed to helping property owners in NYC succeed by giving them expert help."
      />
    </main>
  );
};

const TeamCard = ({ member }) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-[#17263d] mb-3 uppercase">
        {member.name}
      </h3>

      <div className="bg-[#f3f3f3] rounded overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[300px] object-cover object-top"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-base font-bold text-[#17263d]">
          {member.role}
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          {member.desc}
        </p>

        <div className="mt-3 space-y-1 text-xs text-gray-600">

          <p className="">
            <a className="flex items-center gap-2" href={`tel:${member.phNumber}`}>
            <Phone size={13} /> Call Me
            </a>
          </p>

          <p className="">
            <a className="flex items-center gap-2" href={`mailto:${member.email}`}>
            <Mail size={13} /> Mail Me
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default TeamSection;