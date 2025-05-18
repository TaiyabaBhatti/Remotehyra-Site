import React from "react";

export default function PageTag({ text }) {
  return (
    <p className="w-fit font-semibold text-hoverGray text-lg mb-2 uppercase">
      {text}
    </p>
  );
}
