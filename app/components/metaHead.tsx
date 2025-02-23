import Head from 'next/head';

interface MetaHeadProps {
  title: string;
  description: string;
  favicon?: string;
}

export function generateMetadata({ title, description, favicon }: MetaHeadProps) {
  return {
    title,
    description,
    icons: favicon ? [{ rel: 'icon', url: favicon }] : undefined,
  };
}

export default function Page({ title, description }: MetaHeadProps) {
  const metadata = generateMetadata({ title, description });

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons && metadata.icons.map((icon, idx) => (
          <link key={idx} rel={icon.rel} href={icon.url} />
        ))}
      </Head>
      {/* Render page content */}
    </>
  );
}
