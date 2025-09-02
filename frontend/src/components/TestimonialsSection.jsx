import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "https://i.pravatar.cc/150?img=1",
    name: "Emily Johnson",
    review:
      "The cleaning team was amazing! My house looks brand new. Highly recommend their services.",
    rating: 5,
  },
  {
    img: "https://i.pravatar.cc/150?img=2",
    name: "Michael Smith",
    review:
      "Very professional and punctual. They cleaned my office thoroughly and efficiently.",
    rating: 5,
  },
  {
    img: "https://i.pravatar.cc/150?img=3",
    name: "Sophia Williams",
    review:
      "Excellent work on my carpets and sofa. Everything looks spotless now.",
    rating: 5,
  },
  {
    img: "https://i.pravatar.cc/150?img=4",
    name: "David Brown",
    review:
      "Friendly staff and top-notch cleaning services. Will definitely book again.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between text-center h-full min-h-[280px] transition-all hover:shadow-lg">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-[#4977E5] object-cover"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      } mx-0.5`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 flex-1">
                  "{testimonial.review}"
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-auto">
                  {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
