"use client"; // Ensures the component runs on the client side

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/NavBar";
import LatestPosts from "./lastestPost";
import Footer from "../components/footer/page";
import { FaSearch } from "react-icons/fa"; // Import search icon

// Define the BlogPost type for TypeScript
interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  date?: string;
  category?: string;
}

// Define available categories
const categories = [
  { name: "All", value: "all" },
  { name: "Everything Crypto", value: "everything-crypto" },
  { name: "Ins & Outs with Dantown", value: "ins-outs" },
  { name: "Dantown Academy", value: "academy" },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [error, setError] = useState<string | null>(null);
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false); // Toggle state

  const underlineRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    async function fetchPosts() {
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
        if (Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (error) {
        const typedError = error as Error;
        console.error("Error fetching blog posts:", typedError.message);
        setError(typedError.message);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    const categoryIndex = categories.findIndex((c) => c.value === selectedCategory);
    const buttonElement = categoryRefs.current[categoryIndex];

    if (buttonElement && underlineRef.current) {
      underlineRef.current.style.width = `${buttonElement.offsetWidth}px`;
      underlineRef.current.style.left = `${buttonElement.offsetLeft}px`;
    }
  }, [selectedCategory]);

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  // Limit the displayed posts when "See Less" is clicked
  const displayedPosts = showAllPosts ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <>
      {/* Wrap Navbar inside a gradient background */}
      <div className="bg-gradient-radial from-gray-100 to-white">
        <Navbar />
      </div>

      <div className="relative h-screen bg-gradient-radial from-gray-100 to-white flex flex-col justify-start p-5 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute w-[350px] h-[350px] top-[-1%] left-[10%] rounded-full bg-cyan-50 shadow-lg"></div>
        <div className="absolute w-[230px] h-[230px] top-[35%] left-[40%] rounded-full bg-blue-100 shadow-lg"></div>
        <div className="absolute w-[150px] h-[150px] top-[12%] left-[59%] rounded-full bg-blue-100"></div>
        <div className="absolute w-[350px] h-[350px] top-[20%] left-[65%] rounded-full bg-cyan-50 shadow-lg"></div>

        {/* Blog Header */}
        <p className="text-lg font-bold text-gray-800 ml-[7%] mt-[11%] relative z-10">
          OUR BLOG
        </p>
        <h1 className="font-black text-4xl text-gray-800 ml-[7%] mt-4 relative z-10">
          STAY IN TOUCH WITH OUR <span className="block">LATEST BLOG</span>
        </h1>
      </div>

      {/* Category Navigation Bar */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full max-w-4xl px-5 py-3 relative">
          <div className="flex space-x-6 relative">
            {categories.map((category, index) => (
              <button
                key={category.value}
                ref={(el) => {
                  categoryRefs.current[index] = el;
                }}
                onClick={() => setSelectedCategory(category.value)}
                className={`relative text-lg font-semibold pb-2 transition ${
                  selectedCategory === category.value ? "text-blue-600 font-bold" : "text-gray-700"
                } hover:text-blue-600`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <FaSearch className="text-gray-600 cursor-pointer text-xl" />
        </div>

        {/* Horizontal Line with Bold Underline Effect */}
        <div className="relative w-full max-w-4xl border-b-2 border-gray-300">
          <div
            ref={underlineRef}
            className="absolute bottom-[-2px] h-[3px] bg-gray-800 transition-all duration-300 ease-in-out"
          ></div>
        </div>
      </div>

      {/* All Posts Section */}
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black text-gray-800">All Posts</h1>
          <button
            onClick={() => setShowAllPosts(!showAllPosts)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {showAllPosts ? "See Less" : "See More"}
          </button>
        </div>

        {error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : displayedPosts.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post, index) => (
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
          <p className="text-center text-gray-600">No blog posts available for this category.</p>
        )}
      </div>

      {/* Latest Posts Section */}
      <LatestPosts />

      <Footer />
    </>
  );
}
