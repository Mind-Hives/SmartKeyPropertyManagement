import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import NotFound from "../components/common/NotFound.jsx"
import PricingPage from "../pages/PricingPage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import BlogPage from "../pages/blogs/BlogPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import TeamSection from "../pages/aboutus/TeamSection.jsx";
import RentCollectionPage from "../pages/services/RentCollectionPage.jsx";
import LeaseAdministrationPage from "../pages/services/LeaseAdministrationPage.jsx";
import TenantScreeningPage from "../pages/services/TenantScreeningPage.jsx";
import AccountingReportingPage from "../pages/services/AccountingReportingPage.jsx";
import MaintenanceServicesPage from "../pages/services/MaintenanceServicesPage.jsx";
import LegalCompliancePage from "../pages/services/LegalCompliancePage.jsx";
import PropertyComplianceSection from "../pages/services/PropertyComplianceSection.jsx";
import Queens from "@/pages/locations/Queens.jsx";
import Bronx from "@/pages/locations/Bronx.jsx";
import Manhattan from "@/pages/locations/Manhattan.jsx";
import BlogDetails from "@/pages/blogs/BlogDetails.jsx";
import LegalPrivacyPolicy from "@/pages/legal/PrivacyPolicy.jsx";
import TermsAndComditions from "@/pages/legal/TermsAndConditions.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<TeamSection />} />

        <Route path="/services/rent-collection-arrears-recovery" element={<RentCollectionPage />} />
        <Route path="/services/lease-administration-renewals" element={<LeaseAdministrationPage />} />
        <Route path="/services/tenant-screening-placement" element={<TenantScreeningPage />} />
        <Route path="/services/accounting-financial-reporting" element={<AccountingReportingPage />} />
        <Route path="/services/property-maintenance-resident-services" element={<MaintenanceServicesPage />} />
        <Route path="/services/property-compliance-strategic-oversight" element={<PropertyComplianceSection />} />
        <Route path="/services/legal-compliances-risk-management" element={<LegalCompliancePage />} />


        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/our-portfolio" element={<PortfolioPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/Queens" element={<Queens />}/>
        <Route path="/Bronx" element={<Bronx />}/>
        <Route path="/Manhattan" element={<Manhattan />}/>
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPrivacyPolicy />}/>
        <Route path="/terms-and-conditions" element={<TermsAndComditions />}/>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
