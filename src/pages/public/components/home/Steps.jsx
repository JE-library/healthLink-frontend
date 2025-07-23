import React from "react";

const cards = [
  {
    step: 1,
    title: "Describe your issue",
    description:
      "Download our app, register, and tell us about your medical issue to get started.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7d09e7176216013.64c10a8ccfd09.png",
  },
  {
    step: 2,
    title: "Chat with a Specialist",
    description:
      "Connect with a board-certified Specialist. You can chat, send pictures, and videos.",
    image:
      "https://unblast.com/wp-content/uploads/2020/04/Chat-Dashboard-UI-Template-1.jpg",
  },
  {
    step: 3,
    title: "Get personalized care",
    description:
      "Our GP can help with your medical issues and provide prescriptions in one seamless visit.",
    image:
      "https://cdn.dribbble.com/userupload/12021138/file/original-191fe5f7cbfdc56bcf3420b962c6a655.png",
  },
];

const Steps = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6 px-2 py-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="max-w-[300px]  rounded-xl p-2 text-center flex flex-col items-center gap-2 justify-evenly"
        >
          <h2 className="font-secondary-font font-meadium text-5xl text-main-font/80 ">{card.step}</h2>
          <h3 className="text-xl font-bold text-main-font font-secondary-font">
            {card.title}
          </h3>
          <p className="text-sm text-main-font/80 mt-2">{card.description}</p>
          <div className=" h-[250px] w-[250px] bg-amber-300 rounded-md overflow-hidden shadow-2xl ">
            <img
              src={card.image}
              alt={card.title}
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
