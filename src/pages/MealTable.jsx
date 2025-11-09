import React from "react";
import PremiumOffer from "./PremiumOffer";

const mealData = [
  {
    food: "Burrito",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
    img: "https://img.icons8.com/color/96/burrito.png",
  },
  {
    food: "Burger",
    meal: "Pizza Burger",
    calories: "Receiving",
    time: "01:00 AM",
    carbs: "20 gm",
    img: "https://img.icons8.com/color/96/hamburger.png",
  },
];

const MealTable = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
      {/* Left Table Section */}
      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Meal Overview
        </h3>
        <table className="min-w-full border-separate border-spacing-y-3 text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm md:text-base">
              <th className="py-3 px-4 rounded-l-lg font-semibold">Food</th>
              <th className="py-3 px-4 font-semibold">Meal</th>
              <th className="py-3 px-4 font-semibold">Calories</th>
              <th className="py-3 px-4 font-semibold">Priorities</th>
              <th className="py-3 px-4 rounded-r-lg font-semibold">Carbs</th>
            </tr>
          </thead>
          <tbody>
            {mealData.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 rounded-xl shadow-sm"
              >
                <td className="py-3 px-4 flex items-center gap-3 rounded-l-lg">
                  <img
                    src={item.img}
                    alt={item.food}
                    className="w-10 h-10 rounded-full bg-orange-100 p-2 object-contain"
                  />
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    {item.food}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm md:text-base">
                  {item.meal}
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm md:text-base">
                  {item.calories}
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm md:text-base">
                  {item.time}
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm md:text-base rounded-r-lg">
                  {item.carbs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Offer Card */}
      <PremiumOffer />
    </div>
  );
};

export default MealTable;
