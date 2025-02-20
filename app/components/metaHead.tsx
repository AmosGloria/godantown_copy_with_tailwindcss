interface MetaHeadProps {
  title: string;
  description: string;
  favicon?: string; // Optional favicon
}

export function generateMetadata({ title, description, favicon }: MetaHeadProps) {
  return {
    title,
    description,
    icons: favicon ? [{ rel: "icon", url: favicon }] : undefined,
  };
}

export default function Page({ title }: { title: string }) {
  return <h1>Welcome to {title}</h1>;
}
