import React, { useState } from "react";

const goalsData = [
  {
    title: "ABS & Stretch",
    date: "Saturday, April 14 | 08:00 AM",
    tag: "30 Min/day",
  },
  {
    title: "Push Up",
    date: "Sunday, April 15 | 08:00 AM",
    tag: "50 Sets/day",
  },
  {
    title: "Yoga Practice",
    date: "Monday, April 16 | 06:30 AM",
    tag: "45 Min/day",
  },
  {
    title: "Cardio Run",
    date: "Tuesday, April 17 | 07:00 AM",
    tag: "40 Min/day",
  },
  {
    title: "Meditation",
    date: "Wednesday, April 18 | 08:00 AM",
    tag: "15 Min/day",
  },
];

const Goals = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedGoals = showAll ? goalsData : goalsData.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full md:w-[350px] flex-shrink-0 h-full transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Goals
        </h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1 transition"
        >
          {showAll ? "View Less" : "View All"}
          <span className="text-lg leading-none">{showAll ? "▲" : "›"}</span>
        </button>
      </div>

      {/* Goals List */}
      <div
        className={`space-y-4 transition-all duration-300 ${
          showAll
            ? "max-h-[350px] overflow-y-auto pr-1"
            : "max-h-[270px] overflow-hidden"
        }`}
      >
        {displayedGoals.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div>
              <h4 className="text-gray-800 font-semibold text-sm md:text-base">
                {item.title}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {item.date}
              </p>
            </div>

            <div className="bg-orange-100 text-orange-600 text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
              {item.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      {!showAll && (
        <div className="flex justify-center mt-3">
          <p className="text-xs text-gray-400">
            Showing 3 of {goalsData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Goals;
