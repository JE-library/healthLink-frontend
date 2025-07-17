import React from "react";
import PagesLayout from "../../layouts/PagesLayout";

const Contacts = () => {
  return (
    <PagesLayout>
      <div className=" bg-gradient-to-r from-blue-50 to-blue-200  px-4">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="flex flex-row items-center justify-center text-blue-500 font-serif text-[30px] mt-[15px] mb-[15px]">
            Contact Us
          </h1>
          <h3 className="flex flex-row items-center justify-center font-serif text-[20px]">
            Kindly reach us to get the fastest response and treatment
          </h3>
        </div>
        <div>
          <h1>image goes here</h1>
        </div>
      </div>

      <div>
        <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md items-center justify-center ml-[450px] mt-[25px] ">
          <label className="block text-[20px] font-medium text-blue-500 mt-[15px]">
            Name
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="eg: Vanessa"
            required
          />
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-blue-500 mt-[15px]"
          >
            Email
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-blue-500 mt-[15px]"
          >
            Subject
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your subject"
            required
          />
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-blue-500 mt-[15px] "
          >
            Message
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write something..."
            required
          />
          <button className="w-[150px] bg-blue-500 text-white mt-[30px] ml-[110px] p-[10px] justify-center rounded-[15px] hover:bg-blue-500/80 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
    </PagesLayout>
  );
};

export default Contacts;
