"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define the BlogPost type
interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  date?: string;
  category?: string;
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        let allPosts: BlogPost[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await fetch(
            `https://app.dantownms.com/api_v2/all-blogs?page=${page}&limit=100`
          );

          if (!res.ok) {
            throw new Error(`API Error: ${res.status} ${res.statusText}`);
          }

          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Invalid JSON response. API might not be returning JSON.");
          }

          const data = await res.json();
          console.log(`Fetched Page ${page}:`, data.data);

          if (!Array.isArray(data.data)) {
            throw new Error("API response is not an array.");
          }

          allPosts = [...allPosts, ...data.data];

          // If the API returns fewer posts than the limit, it's the last page
          if (data.data.length < 100) {
            hasMore = false;
          } else {
            page++;
          }
        }

        console.log("All Fetched Posts:", allPosts);
        setPosts(allPosts);
      } catch (error) {
        const typedError = error as Error;
        console.error("Error fetching blog posts:", typedError.message);
        setError(typedError.message);
      }
    }

    fetchAllPosts();
  }, []);

  // Function to parse the API's custom date format: "05 Feb 2025 02:51pm"
  const parseDate = (dateStr: string): Date | null => {
    try {
      const dateRegex = /^(\d{1,2})\s([A-Za-z]{3})\s(\d{4})\s(\d{1,2}):(\d{2})(am|pm)$/i;
      const match = dateStr.match(dateRegex);

      if (!match) {
        console.error("Invalid date format:", dateStr);
        return null;
      }

      const [, day, month, year, hour, minutes, period] = match;

      const months: { [key: string]: number } = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
      };

      if (!(month in months)) {
        console.error("Invalid month in date:", dateStr);
        return null;
      }

      let hours = parseInt(hour, 10);
      const mins = parseInt(minutes, 10);

      if (period.toLowerCase() === "pm" && hours < 12) hours += 12;
      if (period.toLowerCase() === "am" && hours === 12) hours = 0;

      return new Date(Number(year), months[month], Number(day), hours, mins);
    } catch (error) {
      console.error("Error parsing custom date format:", dateStr, error);
      return null;
    }
  };

  // Get the date range (from today to two months ago)
  const today = new Date();
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(today.getMonth() - 2);

  // **Step 1: Parse and sort all posts by date (newest first)**
  const sortedPosts = posts
    .map((post) => ({
      ...post,
      parsedDate: post.date ? parseDate(post.date) : null,
    }))
    .filter((post) => post.parsedDate !== null) // Remove posts with invalid dates
    .sort((a, b) => (b.parsedDate as Date).getTime() - (a.parsedDate as Date).getTime());

  // **Step 2: Filter posts from the last two months**
  const latestPosts = sortedPosts.filter((post) => {
    const postDate = post.parsedDate as Date;
    return postDate >= twoMonthsAgo && postDate <= today;
  });

  console.log("Filtered Latest Posts (Two Months):", latestPosts);

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-black text-gray-800 mb-6">Latest Posts</h2>

      {error ? (
        <div className="text-center text-red-600 font-semibold">{error}</div>
      ) : latestPosts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post: BlogPost, index: number) => (
            <li
              key={index}
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
        <p className="text-center text-gray-600">No recent posts available.</p>
      )}
    </div>
  );
}
