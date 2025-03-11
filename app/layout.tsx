import "./globals.css";
import React from "react";

export const metadata = {
  title: "Dantown - Secure Virtual Dollar Cards & Payments",
  description:
    "Create a virtual dollar card for just $1 with zero funding fees. No transaction limits. Accepted everywhere, anytime, securely.",
  icons: {
    icon: "/godantownLogo.png", // Path to the favicon/logo in the public directory
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag to ensure mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
