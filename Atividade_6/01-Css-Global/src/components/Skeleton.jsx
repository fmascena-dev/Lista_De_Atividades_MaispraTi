import React from "react";
import "../styles/Skeleton.css";

export default function Skeleton({
  width = "100%",
  height = "1em",
  style = {},
}) {
  return (
    <span
      className="skeleton"
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-live="polite"
    />
  );
}
