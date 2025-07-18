import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Join as a Verified Specialist",
    description:
      "Upload your certification, complete your profile, and start earning by helping people directly through our platform.",
    image:
      "https://t3.ftcdn.net/jpg/05/88/72/20/360_F_588722037_6O1WX1Fg3Xqs8emLaUw1n79IqYif7ZME.jpg",
    path: "/signup/provider",
  },
  {
    title: "Provide Online Consultations",
    description:
      "Reach patients virtually through secure video, audio, or chat. Set your availability and work from anywhere.",
    image:
      "https://media.istockphoto.com/id/1413518699/photo/patient-at-home-while-on-video-conference-call-with-doctor.jpg?s=612x612&w=0&k=20&c=fLKi9j4DlDg8QGrw9FFu2S8ThJG13JyC2tVVdLtIp5s=",
  },
  {
    title: "Offer Home Lab Services",
    description:
      "If you're a licensed lab technician, partner with HealthLink to deliver sample collection and testing services at patients' homes.",
    image:
      "https://media.istockphoto.com/id/1188919243/photo/glucose-level-blood-test.jpg?s=612x612&w=0&k=20&c=H3tEGK5887xG94p4V70nj0GtBpITEcKbAMiakjzXMKc=",
  },
  {
    title: "Become a Wellness Consultant",
    description:
      "Join as a certified nutritionist, dietician, or wellness coach and provide personalized plans to our users remotely.",
    image:
      "https://d372kicx7ya6yg.cloudfront.net/upload/catalog/programs/webfeatures/healthcare-worker-consulting-patient.jpg",
  },
  {
    title: "Offer Mental Health Support",
    description:
      "Licensed therapists and counselors can use HealthLink to consult with users looking for private, online mental health support.",
    image:
      "https://st2.depositphotos.com/2429035/10836/i/450/depositphotos_108360352-stock-photo-virtual-psychotherapist-intends-to-help.jpg",
    path: "/signup/provider",
  },
];

export default function SwiperSlides() {
  return (
    <div className="bg-main-body py-8">
      <h2 className="font-secondary-font text-3xl md:text-4xl font-bold text-center mb-6 text-main-font">
        Are You a Certified Health Specialist?
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div className="flex flex-col justify-center md:flex-row md:items-center gap-4 py-2 px-15">
              {/* 🖼️ Image on the left */}
              <div className="rounded-md m-auto bg-tertiary-body flex-shrink-0 h-[280px]  w-[280px] md:h-[300px] md:w-[300px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>

              {/* 📄 Content on the right */}
              <div className="flex-1 md:pl-6 text-center md:text-left">
                <h2 className=" text-2xl md:text-2xl font-semibold mb-2 text-primary-body">
                  {slide.title}
                </h2>
                <p className="text-main-font text-sm md:text-base leading-relaxed mb-4">
                  {slide.description}
                </p>
                <Link
                  to={"/signup/provider"}
                  className="flex items-center justify-evenly gap-2 m-auto md:m-0 max-w-[250px] bg-primary-body text-white px-4 py-2 font-bold rounded-2xl hover:bg-white hover:text-main-font transition duration-200"
                >
                  Register to Offer Care <FaArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
