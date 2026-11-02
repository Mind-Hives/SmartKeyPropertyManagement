
import React from "react";
import { Helmet } from "react-helmet-async";

const Schema = ({ data }) => {
  if (!data) return null;

  const schemas = Array.isArray(data) ? data : [data];

  const validSchemas = schemas.filter(
    (schema) =>
      schema &&
      typeof schema === "object" &&
      !Array.isArray(schema)
  );

  if (validSchemas.length === 0) return null;

  return (
    <Helmet>
      {validSchemas.map((schema, index) => (
        <script
          key={`${schema["@type"] || "schema"}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </Helmet>
  );
};

export default Schema;
