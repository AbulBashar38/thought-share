import React, { useState } from "react";

const ThoughtCard = (props) => {
  const { headerImage, title, thought, tags, date, authorName } = props.thought;
  const allTag = tags && tags.split(",");
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
      <img
        className="w-3/4 mx-auto"
        src={headerImage}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {showMore ? thought : thought.substring(0, 100)}
        </p>
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="px-6 pt-4 pb-2">
        {allTag &&
          allTag.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ThoughtCard;
