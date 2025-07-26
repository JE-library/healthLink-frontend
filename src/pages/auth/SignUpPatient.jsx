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
    if (data.profilePhoto?.length > 0) {
      formData.append("profilePhoto", data.profilePhoto[0]);
    }

    setIsSubmitting(true);
    try {
      await apiUserSignup(formData);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Registration failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-blue-200">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-primary-body font-primary-font mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-primary-body mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-500"
                placeholder="e.g. Kwesi Obeng"
              />
              {errors.fullName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary-body mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-500"
                placeholder="yourname@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-primary-body mb-1 ">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-primary-body mb-1">
                Gender
              </label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="block text-sm font-medium text-primary-body mb-1">
                Profile Photo (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("profilePhoto")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-lg text-white font-medium transition ${
                  isSubmitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </div>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary-body hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUpPatient;
