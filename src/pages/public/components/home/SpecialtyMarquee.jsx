const specialties = [
  "Nutritionists",
  "Therapists",
  "Pharmacists",
  "Dermatologists",
  "Lab Technicians",
  "Physiotherapists",
];

const SpecialtyMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-white py-12 font-secondary-font">
      <div className="inline-block animate-marquee ">
        {[...specialties, ...specialties].map((item, index) => (
          <span
            key={index}
            className="sm:text-8xl text-6xl font-bold text-main-body hover:text-primary-body mx-2 inline-block cursor-pointer transition duration-400"
          >
            +   {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyMarquee;
