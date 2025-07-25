import React, { useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { apiUserSignup } from "../../services/auth";
import { toast } from "react-toastify";
import { Link } from "react-router";

const SignUpPatient = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("gender", data.gender);
    if (data.profilePhoto && data.profilePhoto.length > 0) {
      formData.append("profilePhoto", data.profilePhoto[0]);
    }

    setIsSubmitting(true);

    try {
      await apiUserSignup(formData); // Ensure this function handles FormData
      toast.success("User Registered Successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Registration failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200 py-12 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-center text-blue-600">
            User Registration Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-blue-500 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter full name"
              />
              {errors.fullName && (
                <p className="text-red-400">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-blue-500 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-blue-500 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-blue-500 font-medium mb-1">
                Gender
              </label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-400">{errors.gender.message}</p>
              )}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="block text-blue-500 font-medium mb-1">
                Profile Photo (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("profilePhoto")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-2 rounded ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign-in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUpPatient;
