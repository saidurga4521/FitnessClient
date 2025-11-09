import React, { useState } from "react";

const scheduleData = [
  {
    day: "Monday",
    title: "Stretch",
    time: "At 08:00",
    tag: "20 Sets",
    img: "https://img.freepik.com/free-photo/fit-young-woman-doing-side-stretch-yoga-pose-home_144627-49378.jpg",
  },
  {
    day: "Tuesday",
    title: "Back Stretch",
    time: "At 08:00",
    tag: "10 Round",
    img: "https://img.freepik.com/free-photo/side-view-fit-woman-doing-backbend-exercise-mat_23-2148678643.jpg",
  },
  {
    day: "Wednesday",
    title: "Yoga",
    time: "At 08:00",
    tag: "20 min",
    img: "https://img.freepik.com/free-photo/young-woman-doing-yoga-living-room_144627-45417.jpg",
  },
  {
    day: "Thursday",
    title: "Plank Hold",
    time: "At 07:30",
    tag: "5 min",
    img: "https://img.freepik.com/free-photo/fit-woman-doing-core-workout-plank-exercise_144627-33209.jpg",
  },
  {
    day: "Friday",
    title: "Meditation",
    time: "At 08:30",
    tag: "15 min",
    img: "https://img.freepik.com/free-photo/relaxed-young-woman-practicing-meditation-yoga-home_144627-49251.jpg",
  },
];

const MySchedule = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? scheduleData : scheduleData.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full md:w-[350px] flex-shrink-0 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          My Schedule
        </h3>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-fuchsia-600 font-medium hover:text-fuchsia-700 flex items-center gap-1 transition-colors"
        >
          {showAll ? "View Less" : "View All"}
          <span className="text-lg">{showAll ? "▲" : "›"}</span>
        </button>
      </div>

      {/* Schedule List */}
      <div
        className={`space-y-4 transition-all duration-300 ${
          showAll
            ? "max-h-[350px] overflow-y-auto"
            : "max-h-[310px] overflow-hidden"
        }`}
      >
        {displayedData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-gray-800 font-semibold text-sm md:text-base">
                  {item.day}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm font-medium">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            </div>

            <div className="bg-orange-100 text-orange-600 text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
              {item.tag}
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-3">
          <p className="text-xs text-gray-400">
            Showing 3 of {scheduleData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default MySchedule;
