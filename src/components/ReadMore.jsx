import React, { useState } from "react";

const ReadMore = ({ text, maxLength = 120 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) return <p>{text}</p>;

  return (
    <div className="text-gray-700">
      <p className="leading-relaxed">
        {isExpanded ? text : text.slice(0, maxLength) + "..."}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-white-600 font-semibold hover:text-white-800 transition"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
