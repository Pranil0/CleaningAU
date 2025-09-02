import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, desc, img }) => {
  return (
    <Link to={`/services/${id}`} className="block">
      <div
        className="bg-white text-gray-900 rounded-xl p-6 shadow-md"
        data-aos="zoom-in"
      >
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-white p-3">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-700">{desc}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;