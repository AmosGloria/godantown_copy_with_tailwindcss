import React from "react";
import Head from "next/head";

interface MetaHeadProps {
  title: string;
  description: string;
  favicon?: string; // Add optional favicon property
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description, favicon }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {favicon && <link rel="icon" href={favicon} />} {/* Add favicon link */}
    </Head>
  );
};

export default MetaHead;
