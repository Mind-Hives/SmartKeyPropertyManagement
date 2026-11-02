
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  image,
  robots = "index, follow",
  ogType = "website",
  siteName = "Smart Key Property Management",
}) => {
  const siteUrl = "https://smartkeypropertymanagement.com";

  const canonicalUrl = canonical
    ? new URL(canonical, siteUrl).href
    : undefined;

  const imageUrl = image
    ? new URL(image, siteUrl).href
    : undefined;

  return (
    <Helmet>
      {/* Page Title */}
      {title && <title>{title}</title>}

      {/* Basic SEO */}
      {description && (
        <meta name="description" content={description} />
      )}

      <meta name="robots" content={robots} />

      {/* Canonical URL */}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {title && (
        <meta property="og:title" content={title} />
      )}

      {description && (
        <meta property="og:description" content={description} />
      )}

      {canonicalUrl && (
        <meta property="og:url" content={canonicalUrl} />
      )}

      {imageUrl && (
        <meta property="og:image" content={imageUrl} />
      )}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      {title && (
        <meta name="twitter:title" content={title} />
      )}

      {description && (
        <meta name="twitter:description" content={description} />
      )}

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}
    </Helmet>
  );
};

export default SEO;
