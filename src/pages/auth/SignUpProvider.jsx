import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { apiProviderSignup } from "../../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUpProvider = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "certifications" && value.length > 0) {
        Array.from(value).forEach((file) => formData.append("certifications", file));
      } else if (key === "profilePhoto") {
        formData.append("profilePhoto", value[0]);
      } else {
        formData.append(key, value);
      }
    });

    try {
      const res = await apiProviderSignup(formData);
      toast.success("User Registered Successfully!");
      navigate("/provider-dashboard");
    } catch (error) {
      toast.error(error?.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Service Provider Registration Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <span className="text-red-400">{errors.fullName.message}</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-400">{errors.email.message}</span>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Phone Number</label>
              <input
                type="tel"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="eg: 0123 456 789"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <span className="text-red-400">{errors.phoneNumber.message}</span>}
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
              />
              {errors.password && <span className="text-red-400">{errors.password.message}</span>}
            </div>

            {/* Gender */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Gender</label>
              <select
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <span className="text-red-400">{errors.gender.message}</span>}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Date of Birth</label>
              <input
                type="date"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("dateOfBirth", { required: "Date of birth is required" })}
              />
              {errors.dateOfBirth && <span className="text-red-400">{errors.dateOfBirth.message}</span>}
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Address</label>
              <textarea
                rows="2"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
                {...register("address", { required: "Address is required" })}
              ></textarea>
              {errors.address && <span className="text-red-400">{errors.address.message}</span>}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("profilePhoto")}
              />
              {errors.profilePhoto && <span className="text-red-400">{errors.profilePhoto.message}</span>}
            </div>

            {/* Certifications */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Certifications (optional)</label>
              <input
                type="file"
                multiple
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("certifications")}
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Availability</label>
              <input
                type="datetime-local"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("availability")}
              />
              {errors.availability && <span className="text-red-400">{errors.availability.message}</span>}
            </div>

            {/* Consultation Modes */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Consultation Modes</label>
              <select
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("consultationModes")}
              >
                <option value="">Select mode(s)</option>
                <option value="in-person">In-person</option>
                <option value="online">Online (Live chat)</option>
                <option value="phone">Phone Call</option>
              </select>
              {errors.consultationModes && <span className="text-red-400">{errors.consultationModes.message}</span>}
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">Years of Experience</label>
              <input
                type="number"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. 3"
                {...register("experienceYears", { required: "Years of experience is required" })}
              />
              {errors.experienceYears && <span className="text-red-400">{errors.experienceYears.message}</span>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "bg-gray-300 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-700"
                } w-full text-white py-2 rounded transition`}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUpProvider;































// import React from "react";
// import PublicLayout from "../../layouts/PublicLayout";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router";
// import { apiProviderSignup } from "../../services/auth";
// import { toast } from "react-toastify";
// import { useState } from "react";

// const SignUpProvider = () => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//     const payload = {
//       fullName: data.fullName,
//       email: data.email,
//       password: data.password,
//       phoneNumber: data.phoneNumber,
//       dateOfBirth: data.dateOfBirth,
//       address: data.address,
//       profilePhoto: data.profilePhoto,
//       experienceYears: data.experienceYears,
//       professionalTitle: data.professionalTitle,
//       specialization: data.specialization,
//       bio: data.bio,
//       certifications: data.certifications,
//       availability: data.availability,
//       consulataionModes: data.consultationModes,
//     };
//     // console.log(payload)
//     setIsSubmitting(true);

//     try {
//       const res = await apiProviderSignup(payload);
//       console.log(res);
//       toast.success("User Registered Successfully!");
//       navigate("/provider-dashboard");
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.message || "An Error Occured.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const isError = Object.keys(errors).length > 0;
//   return (
//     <PublicLayout>
//       <div className="bg-gradient-to-r from-blue-50 to-blue-200">
//         <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md fade-in">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
//             Professional Registration Form
//           </h2>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* <!-- Full Name --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="eg: Vanessa Simmons"
//                 {...register("fullName", { required: "Fullname is required" })}
//               />
//               {errors?.fullName && (
//                 <span className="text-red-400">
//                   {errors?.fullName?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Email --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your email"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors?.email && (
//                 <span className="text-red-400">{errors?.email?.message}</span>
//               )}
//             </div>

//             {/* <!-- Password --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="enter your password"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password must be at least 8 characters",
//                   },
//                 })}
//               />
//               {errors?.password && (
//                 <span className="text-red-400">
//                   {errors?.password?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Phone Number --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="eg: 0123 456 789"
//                 {...register("phoneNumber", {
//                   required: "Phone number is required",
//                 })}
//               />
//               {errors?.phoneNumber && (
//                 <span className="text-red-400">
//                   {errors?.phoneNumber?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Gender --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Gender
//               </label>
//               <select
//                 id="gender"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 {...register("gender", { required: "gender is required" })}
//               >
//                 <option value="">Select gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* <!-- Date of Birth --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your date of birth"
//                 {...register("dateOfBirth", {
//                   required: "Date of birth is required",
//                 })}
//               />
//               {errors?.dateOfBirth && (
//                 <span className="text-red-400">
//                   {errors?.dateOfBirth?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Address --> */}
//             <div className="md:col-span-2">
//               <label className="block mb-1 font-medium text-blue-500">
//                 Address
//               </label>
//               <textarea
//                 id="address"
//                 rows="2"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your address"
//                 {...register("address", { required: "Address is required" })}
//               ></textarea>
//               {errors?.address && (
//                 <span className="text-red-400">{errors?.address?.message}</span>
//               )}
//             </div>

//             {/* <!-- Profile Photo --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Profile Photo
//               </label>
//               <input
//                 type="file"
//                 name="profilePhoto"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Select your profile photo"
//                 required
//               />
//             </div>

//             {/* <!-- Experience Years --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Years of Experience
//               </label>
//               <input
//                 type="experienceYears"
//                 id="experienceYears"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your years of experience"
//                 {...register("experienceYears", {
//                   required: "Years of experience is required",
//                 })}
//               />
//               {errors?.experienceYears && (
//                 <span className="text-red-400">
//                   {errors?.experienceYears?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Professional Title --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Professional Title
//               </label>
//               <input
//                 type="text"
//                 id="professionalTitle"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your professional title"
//                 {...register("professionalTitle", {
//                   required: "Your professional title is required",
//                 })}
//               />
//               {errors?.professionalTitle && (
//                 <span className="text-red-400">
//                   {errors?.professionalTitle?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Specialization --> */}
//             <div>
//               <label className="block mb-1 font-medium text-blue-500">
//                 Specialization
//               </label>
//               <input
//                 type="text"
//                 id="specialization"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="eg: Dermatology"
//                 {...register("specialization", {
//                   required: "Your specialization is required",
//                 })}
//               />
//               {errors?.specialization && (
//                 <span className="text-red-400">
//                   {errors?.specialization?.message}
//                 </span>
//               )}
//             </div>

//             {/* <!-- Bio --> */}
//             <div className="md:col-span-2">
//               <label className="block mb-1 font-medium text-blue-500">
//                 Bio
//               </label>
//               <textarea
//                 id="bio"
//                 rows="2"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Write something about yourself"
//                 {...register("bio")}
//               ></textarea>
//               {errors?.bio && (
//                 <span className="text-red-400">{errors?.bio?.message}</span>
//               )}
//             </div>

//             {/* <!-- Certifications --> */}
//             <div className="md:col-span-2">
//               <label className="block mb-1 font-medium text-blue-500">
//                 Certifications
//               </label>
//               <input
//                 type="file"
//                 name="certifications"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Choose your files"
//               />
//             </div>

//             {/* <!-- Calendar-based Availability (Date + Time Picker) --> */}
//             <div className="md:col-span-2">
//               <label className="block mb-2 font-medium text-blue-500">
//                 Availability (Choose Date & Time)
//               </label>
//               <input
//                 type="datetime-local"
//                 name="availability"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Choose your available times"
//               />
//             </div>

//             {/* <!-- Consultation Modes --> */}
//             <div className="md:col-span-2">
//               <label className="block mb-1 font-medium text-blue-500">
//                 Consultation Modes
//               </label>
//               <select
//                 name="consultationModes"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option value="">Select mode(s)</option>
//                 <option>In-person</option>
//                 <option>Online (Live chat)</option>
//                 <option>Phone Call</option>
//               </select>
//             </div>

//             {/* <!-- Submit Button --> */}
//             <div className="md:col-span-2 text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-[15px] hover:bg-blue-700 transition duration-200"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// };

// export default SignUpProvider;
