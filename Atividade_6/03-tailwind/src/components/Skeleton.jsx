import React from "react";

export default function Skeleton({ variant = "rect", style, className = "" }) {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 skeleton-animation overflow-hidden";
  
  const variantClasses = {
    rect: "w-full h-full rounded-lg",
    text: "h-4 w-full rounded",
    circle: "rounded-full"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style} 
      role="presentation" 
    />
  );
}