import React from "react";
import PublicLayout from "../../layouts/PublicLayout";

const SignUpProvider = () => {
  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Professional Registration Form
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Full Name --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="eg: Vanessa Simmons"
                required
              />
            </div>

            {/* <!-- Email --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* <!-- Password --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="enter your password"
                required
              />
            </div>

            {/* <!-- Phone Number --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="eg: 0123 456 789"
                required
              />
            </div>

            {/* <!-- Gender --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Gender
              </label>
              <select
                name="gender"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* <!-- Date of Birth --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your date of birth"
                required
              />
            </div>

            {/* <!-- Address --> */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-blue-500">
                Address
              </label>
              <textarea
                name="address"
                rows="2"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
                required
              ></textarea>
            </div>

            {/* <!-- Profile Photo --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Profile Photo
              </label>
              <input
                type="file"
                name="profilePhoto"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Select your profile photo"
                required
              />
            </div>

            {/* <!-- Experience Years --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Years of Experience
              </label>
              <input
                type="number"
                name="experienceYears"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your years of experience"
                required
              />
            </div>

            {/* <!-- Professional Title --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Professional Title
              </label>
              <input
                type="text"
                name="professionalTitle"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your professional title"
                required
              />
            </div>

            {/* <!-- Specialization --> */}
            <div>
              <label className="block mb-1 font-medium text-blue-500">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="eg: Vanessa Simmons"
                required
              />
            </div>

            {/* <!-- Bio --> */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-blue-500">
                Bio
              </label>
              <textarea
                name="bio"
                rows="2"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write something about yourself"
              ></textarea>
            </div>

            {/* <!-- Certifications --> */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-blue-500">
                Certifications
              </label>
              <input
                type="file"
                name="certifications"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Choose your files"
              />
            </div>

            {/* <!-- Calendar-based Availability (Date + Time Picker) --> */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-blue-500">
                Availability (Choose Date & Time)
              </label>
              <input
                type="datetime-local"
                name="availability"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Choose your available times"
              />
            </div>

            {/* <!-- Consultation Modes --> */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-blue-500">
                Consultation Modes
              </label>
              <select
                name="consultationModes"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select mode(s)</option>
                <option>In-person</option>
                <option>Online (Live chat)</option>
                <option>Phone Call</option>
              </select>
            </div>

            {/* <!-- Submit Button --> */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-[15px] hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUpProvider;
