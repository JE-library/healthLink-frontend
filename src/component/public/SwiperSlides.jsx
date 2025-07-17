import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "🌿 The Power of Being Outside",
    description:
      "Spending time outdoors can reduce stress, improve your immune system, and boost your mood. Exposure to natural light also helps regulate sleep cycles.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "🗣️ Socializing for Health",
    description:
      "Connecting with others reduces feelings of isolation and helps mental clarity. Support networks play a key role in long-term health and happiness.",
    image: "/Frontend/Images-nutrition/water.jpg",
  },
  {
    title: "🥗 Eating Healthy",
    description:
      "A nutrient-rich diet supports energy, digestion, and disease prevention. Eat colorful vegetables, healthy fats, and lean proteins daily for best results.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
  },
];

export default function SwiperSlides() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 font-[var(--default-font-family)] text-[var(--color-main-font)]">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="bg-[--color-secondary-body] rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 min-h-[280px]"
          >
            {/* 🖼️ Image on the left */}
            <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-[300px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-md w-full h-auto object-cover"
              />
            </div>

            {/* 📄 Content on the right */}
            <div className="flex-1 md:pl-6 text-left">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[var(--color-primary-body)]">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                {slide.description}
              </p>
              <a
                href="#"
                className="inline-block bg-[var(--color-main-body)] text-white px-5 py-2 rounded-full text-sm hover:bg-[var(--color-primary-body)] transition duration-300"
              >
                Read more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
