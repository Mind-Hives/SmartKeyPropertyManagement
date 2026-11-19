import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  robots = "index, follow",
}) => {
  const siteUrl = "https://www.smartkeypropertymanagement.com";

  // Generate a valid absolute canonical URL.
  const canonicalUrl = canonical
    ? new URL(canonical, `${siteUrl}/`).href
    : undefined;

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Canonical URL */}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
    </Helmet>
  );
};

export default SEO;