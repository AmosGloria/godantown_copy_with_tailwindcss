"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define the CryptoPost type for TypeScript
interface CryptoPost {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  category?: string;
}

export default function EverythingCryptoBlog() {
  const [cryptoPosts, setCryptoPosts] = useState<CryptoPost[]>([]);
  const [showAllCryptoPosts, setShowAllCryptoPosts] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCryptoPosts() {
      try {
        const res = await fetch("https://app.dantownms.com/api_v2/all-blogs", {
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid JSON response. API might not be returning JSON.");
        }

        const data = await res.json();
        console.log("API Response:", data); // Debugging: Check full API response

        if (Array.isArray(data.data)) {
          // Log all titles found in the API response
          const titlesFound = data.data.map((post: CryptoPost) => post.title);
          console.log("Titles Found:", titlesFound);

          // Filter only posts where the title contains "crypto"
          const filteredCryptoPosts = data.data.filter(
            (post: CryptoPost) =>
              post.title &&
              post.title.toLowerCase().includes("crypto") // Check if "crypto" is in the title
          );

          console.log("Filtered Crypto Posts:", filteredCryptoPosts); // Debugging

          setCryptoPosts(filteredCryptoPosts);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (error) {
        const typedError = error as Error;
        console.error("Error fetching Everything Crypto blog posts:", typedError.message);
        setError(typedError.message);
      }
    }

    fetchCryptoPosts();
  }, []);

  // Toggle between showing only 3 posts or all posts
  const displayedCryptoPosts = showAllCryptoPosts ? cryptoPosts : cryptoPosts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-black text-gray-800">Everything Crypto</h1>

        {/* See More / See Less Toggle Button */}
        {cryptoPosts.length > 3 && (
          <div className="text-right mt-6">
            <button
              onClick={() => setShowAllCryptoPosts(!showAllCryptoPosts)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {showAllCryptoPosts ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>

      {/* Blog Posts */}
      {error ? (
        <div className="text-center text-red-600 font-semibold">{error}</div>
      ) : cryptoPosts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCryptoPosts.map((post, index) => (
            <li key={post.slug || index} className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition">
              <Link href={`/blog/${post.slug}`} className="text-xl font-bold text-gray-900 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">
          No blog posts with &quot;crypto&quot; in the title found.
        </p> 
      )}
    </div>
  );
}
