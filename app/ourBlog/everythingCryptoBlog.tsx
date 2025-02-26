"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Footer from "../components/footer/page";

interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  date?: string;
  category?: string;
}

interface EverythingCryptoBlogProps {
  cryptoPosts: BlogPost[];
  goBack: () => void;
}

export default function EverythingCryptoBlog({ cryptoPosts, goBack }: EverythingCryptoBlogProps) {
  return (
    <>
      {/* Navbar */}
      <div className="bg-gradient-radial from-gray-100 to-white">
        <Navbar />
      </div>

      {/* Page Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-black text-gray-800">Everything Crypto</h1>
        <p className="text-lg text-gray-600 mt-2">Stay updated with the latest in the crypto world.</p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-black text-gray-800">Crypto Blogs</h2>
          <button
            onClick={goBack}
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to All Blogs
          </button>
        </div>

        {cryptoPosts.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoPosts.map((post, index) => (
              <li
                key={post.slug || index}
                className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-bold text-gray-900 hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 mt-2">
                  {post.excerpt || post.description || "No summary available"}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Published: {post.date || "Unknown Date"}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No crypto blog posts available.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
