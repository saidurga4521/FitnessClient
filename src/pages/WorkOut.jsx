import React from "react";
import { FiActivity, FiTrendingUp } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import MySchedule from "./MySchedule";
import Progress from "./Progress";
import MealTable from "./MealTable";

const WorkOut = () => {
  return (
    <section className="p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 items-start">
        {/* Left: Workout Section */}
        <div>
          {/* Top Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-700 text-white shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/75 to-transparent z-10"></div>
            <img
              src="https://img.freepik.com/free-photo/sporty-woman-doing-fitness-exercise_23-2147671026.jpg"
              alt="fitness banner"
              className="absolute right-0 top-0 h-full w-full object-cover opacity-50"
            />
            <div className="relative z-20 p-6 md:p-10 max-w-xl drop-shadow-md">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
                Track Your Daily Activities
              </h2>
              <p className="text-white/95 text-sm md:text-base leading-relaxed font-light">
                Keep an eye on your daily progress — track your workouts,
                calories, and steps in one place. Stay motivated and consistent
                toward your fitness goals.
              </p>
            </div>
          </div>

          {/* Activity Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workout */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FiActivity className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold">Workout</h3>
              </div>
              <p className="text-2xl font-bold">4 hrs</p>
              <div className="mt-3">
                <div className="h-16 w-full bg-white/20 rounded-lg overflow-hidden">
                  <div className="h-full bg-white/40 w-3/4 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Calories */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaFire className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold">Calories</h3>
              </div>
              <p className="text-2xl font-bold">1800 kcal</p>
              <div className="mt-3">
                <div className="h-16 w-full bg-white/20 rounded-lg overflow-hidden">
                  <div className="h-full bg-white/40 w-1/2 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold">Steps</h3>
              </div>
              <p className="text-2xl font-bold">2200 steps</p>
              <div className="mt-3">
                <div className="h-16 w-full bg-white/20 rounded-lg overflow-hidden">
                  <div className="h-full bg-white/40 w-2/3 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Schedule Section */}
        <MySchedule />
      </div>
      <Progress />
      <MealTable />
    </section>
  );
};

export default WorkOut;
