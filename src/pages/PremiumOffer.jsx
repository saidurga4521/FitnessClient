import React from "react";

const PremiumOffer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-2xl shadow-lg p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between mt-8 w-full md:w-[380px]">
      {/* Left Text Section */}
      <div className="relative z-10 max-w-sm">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          50% off on <span className="text-yellow-300">Premium Membership</span>
        </h3>
        <p className="text-sm text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-lg transition">
          Upgrade
        </button>
      </div>

      {/* Right Image */}
      <div className="relative mt-6 md:mt-0">
        <img
          src="https://img.freepik.com/free-photo/full-shot-strong-athletic-couple-sportswear-posing-together_23-2148760714.jpg"
          alt="Premium Fitness Couple"
          className="w-40 md:w-44 object-contain drop-shadow-xl"
        />
      </div>

      {/* Decorative Circle */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
    </div>
  );
};

export default PremiumOffer;
