import React, { useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    setIsSubmitting(true);

    try {
      const res = await apiLogin(payload);
      localStorage.setItem("accessToken", res.data.user.token);
      toast.success(
        `Welcome ${res.data.user.fullName}` || "Login Successfull!"
      );

      const { role, status, _id } = res.data.user;

      if (role === "user") {
        navigate("/patient/dashboard");
      } else if (role === "serviceProvider") {
        status !== "approved"
          ? navigate(`/pending-approval/${_id}`)
          : navigate("/provider/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-primary-body mb-6 font-primary-font">
            Let's Get You Logged In!
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primary-body font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-500"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-primary-body font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  placeholder:text-gray-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded-lg text-white font-medium transition ${
              isSubmitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>

          {/* Link to Signup */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup/patient"
              className="text-primary-body hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
