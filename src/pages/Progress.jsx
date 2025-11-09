import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Goals from "./Goals";

const data = [
  { day: "Mon", Workout: 30, Calories: 55, Steps: 70 },
  { day: "Tue", Workout: 40, Calories: 35, Steps: 50 },
  { day: "Wed", Workout: 70, Calories: 50, Steps: 40 },
  { day: "Thu", Workout: 60, Calories: 75, Steps: 45 },
  { day: "Fri", Workout: 30, Calories: 50, Steps: 65 },
  { day: "Sat", Workout: 30, Calories: 55, Steps: 65 },
  { day: "Sun", Workout: 30, Calories: 55, Steps: 65 },
];

const Progress = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 items-stretch">
      {/* Left: Chart Section */}
      <div className="bg-white rounded-2xl shadow-md p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Goal Progress
          </h3>
          <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition">
            Weekly <span className="text-lg leading-none">▾</span>
          </button>
        </div>

        {/* Chart (flexes to fill available height) */}
        <div className="w-full flex-1">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="day" tick={{ fill: "#888" }} />
                <YAxis tick={{ fill: "#888" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    border: "1px solid #eee",
                  }}
                />
                <Legend verticalAlign="bottom" height={30} />
                <Bar dataKey="Workout" fill="#06b6d4" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Calories" fill="#fb923c" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Steps" fill="#a78bfa" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right: Goals Section */}
      <div className="h-full">
        <Goals />
      </div>
    </div>
  );
};

export default Progress;
