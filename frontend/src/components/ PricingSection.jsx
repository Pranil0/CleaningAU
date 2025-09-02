import React from "react";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: 20,
      features: [
        "Weekly Home Cleaning",
        "Dusting & Vacuuming",
        "Bathroom & Kitchen Touch-ups",
        "24/7 Dedicated Support",
      ],
      buttonText: "Get Now",
    },
    {
      title: "Premium Plan",
      price: 60,
      features: [
        "Everything in Basic",
        "Deep Carpet Cleaning",
        "Full Service + Priority Booking",
        "24/7 Dedicated Support",
      ],
      buttonText: "Get Now",
    },
  ];

  const PlanCard = ({ title, price, features, buttonText }) => (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center border">
      <h3 className="text-xl font-bold text-[#5B74E7] mb-2">{title}</h3>
      <p className="text-4xl font-bold text-gray-900">
        ${price} <span className="text-base font-medium text-gray-500">/ Month</span>
      </p>
      <hr className="my-6" />
      <ul className="space-y-4 text-gray-700 text-base text-left">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-[#5B74E7] text-white py-3 rounded-full font-medium hover:bg-[#3b65cc] transition">
        {buttonText} →
      </button>
    </div>
  );

  return (
    <div className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Text */}
        <div className="bg-[#F3F6FF] rounded-2xl p-8 flex flex-col justify-center space-y-6 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5B74E7]">
            Save 30% Monthly
          </h3>
          <p className="text-gray-700 font-medium">
            Save 30% Every Month with Our Cleaning Plans
          </p>
          <ul className="space-y-3 text-gray-600 list-disc list-inside">
            <li>Affordable Packages – More Cleaning, Less Cost</li>
            <li>Get More Shine for Less – Flexible Monthly Options</li>
            <li>Regular Cleaning, Big Savings – Choose Your Plan</li>
          </ul>
        </div>

        {/* Right Side Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-1/2">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
