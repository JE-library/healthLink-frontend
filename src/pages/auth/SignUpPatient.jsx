import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { apiSignup } from "../../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUpPatient = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      username: data.username,
      gender: data.gender,
      email: data.email,
      password: data.password,
    };
    // console.log(payload)
    setIsSubmitting(true);

    try {
      const res = await apiPatientSignup(payload);
      console.log(res);
      toast.success("User Registered Successfully!");
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "An Error Occured.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length > 0;
  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            User Registration Form
          </h2>

          <form className="space-y-6">
            onSubmit={handleSubmit(onSubmit)}
            {/* <!-- Full Name --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="enter your full name"
                {...register("fullName", { required: "Fullname is required" })}
              />
              {errors?.fullName && (
                <span className="text-red-400">
                  {errors?.fullName?.message}
                </span>
              )}
            </div>
            {/* <!-- Email --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email && (
                <span className="text-red-400">{errors?.email?.message}</span>
              )}
            </div>
            {/* <!-- Phone Number --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="eg: 0123 456 789"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
              />
            </div>
            {/* <!-- Password --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            {/* <!-- Gender --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("role", { required: "Gender is required" })}
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            {/* <!-- Address --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Address
              </label>
              <textarea
                name="address"
                rows="2"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="enter your address"
              ></textarea>
            </div>
            {/* <!-- Profile Photo --> */}
            <div>
              <label className="block font-medium mb-1 text-blue-500">
                Profile Photo
              </label>
              <input
                type="file"
                name="profilePhoto"
                accept="image/*"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="choose your photo"
              />
            </div>
            {/* <!-- Submit Button --> */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      ;
    </PublicLayout>
  );
};

export default SignUpPatient;
