"use client";

import React from "react";

interface LoadingSkeletonProps {
  duration?: number; // Optional animation duration
  size?: number; // Optional circle size
  color?: string; // Optional circle color
  backgroundColor?: string; // Optional background color
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  duration = 1.5, // Default animation duration
  size = 60, // Default circle size
  color = "navy", // Default circle color
  backgroundColor = "white", // Default background color
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{
        backgroundColor, // Dynamic background color for a plain empty space
      }}
    >
      <div
        className="rounded-full animate-pulse"
        style={{
          width: size,
          height: size,
          backgroundColor: color, // Dynamic circle color
          animationDuration: `${duration}s`,
        }}
      ></div>
    </div>
  );
};

export default LoadingSkeleton;
