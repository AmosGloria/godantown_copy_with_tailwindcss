"use client";

import React from "react";
import styles from "./LoadingSkeleton.module.css";

interface LoadingSkeletonProps {
  duration?: number; // Optional duration for the animation
  size?: number; // Optional size for the circle
  color?: string; // Optional color for the circle
  backgroundColor?: string; // Optional background color for the surface
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  duration = 1.5, // Default animation duration
  size = 60, // Default circle size
  color = "navy", // Default circle color
  backgroundColor = "white", // Default background color
}) => {
  return (
    <div
      className={styles.overlay}
      style={
        {
          "--background-color": backgroundColor,
          "--animation-duration": `${duration}s`,
          "--circle-size": `${size}px`,
          "--circle-color": color,
        } as React.CSSProperties
      }
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default LoadingSkeleton;
