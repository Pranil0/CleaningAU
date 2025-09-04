import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, desc, img }) => {
  return (
    <Link to={`/services/${id}`} className="block h-full">
      <div
        className="group bg-white text-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300 hover:bg-[#5B74E7] hover:text-white h-full flex flex-col"
        data-aos="zoom-in"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-white p-3 transition duration-300 group-hover:bg-[#5B74E7]">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-sm leading-relaxed group-hover:text-white text-center flex-grow">
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
