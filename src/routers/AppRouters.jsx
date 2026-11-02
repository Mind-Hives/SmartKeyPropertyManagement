import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout.jsx";
import HomePage from "../pages/Home/index.jsx";
import NotFound from "../components/notfound/index.jsx"
import PricingPage from "../pages/pricing/index.jsx";
import PortfolioPage from "../pages/portfolio/index.jsx";
import BlogPage from "../pages/blogs/index.jsx";
import ContactPage from "../pages/contactus/index.jsx";
import TeamSection from "../pages/aboutus/index.jsx";
import RentCollectionPage from "../pages/services/rent_collection.jsx";
import LeaseAdministrationPage from "../pages/services/lease_administration.jsx";
import TenantScreeningPage from "../pages/services/teant_screening.jsx";
import AccountingReportingPage from "../pages/services/accounting_reporting.jsx";
import MaintenanceServicesPage from "../pages/services/maintainance_report.jsx";
import LegalCompliancePage from "../pages/services/legal_compliance.jsx";
import PropertyComplianceSection from "../pages/services/property_compliance.jsx";
import Queens from "@/pages/locations/Queens.jsx";
import Bronx from "@/pages/locations/Bronx.jsx";
import Manhattan from "@/pages/locations/Manhattan.jsx";
import BlogDetails from "@/pages/blogs/blogDetails.jsx";
import LegalPrivacyPolicy from "@/pages/privacyPolicy/LegalPrivacyPolicy.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<TeamSection />} />

        <Route path="/services/rent-collection-and-arrears-recovery" element={<RentCollectionPage />} />
        <Route path="/services/lease-administration-and-renewals" element={<LeaseAdministrationPage />} />
        <Route path="/services/tenant-screening-and-placement" element={<TenantScreeningPage />} />
        <Route path="/services/accounting-financial-reporting" element={<AccountingReportingPage />} />
        <Route path="/services/property-maintenance-and-resident-services" element={<MaintenanceServicesPage />} />
        <Route path="/services/property-compliance-and-strategic-oversight" element={<PropertyComplianceSection />} />
        <Route path="/services/legal-compliances-and-risk-management" element={<LegalCompliancePage />} />


        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/Queens" element={<Queens />}/>
        <Route path="/Bronx" element={<Bronx />}/>
        <Route path="/Manhattan" element={<Manhattan />}/>
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPrivacyPolicy />}/>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
