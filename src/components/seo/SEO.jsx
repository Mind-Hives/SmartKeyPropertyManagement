
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  robots = "index, follow",
}) => {
  const siteUrl = "www.smartkeypropertymanagement.com";

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Canonical URL */}
      {canonical && (
        <link
          rel="canonical"
          href={`${siteUrl}${canonical}`}
        />
      )}
    </Helmet>
  );
};

export default SEO;
