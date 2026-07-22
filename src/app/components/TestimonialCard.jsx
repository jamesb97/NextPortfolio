import React from "react";

const TestimonialCard = ({ name, description, image }) => {
  return (
    <div className="bg-[#181818] rounded-xl p-6 my-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={`${name} avatar`}
        className="h-20 w-20 rounded-full object-cover mb-4"
      />
      <p className="text-[#ADB7BE] mb-4">{description}</p>
      <h5 className="text-xl font-semibold text-white">{name}</h5>
    </div>
  );
};

export default TestimonialCard;
