import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { apiUserLogin } from "../../services/auth";
// import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
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
      password: data.password,
    };
    // console.log(payload)
    setIsSubmitting(true);

    try {
      const res = await apiUserLogin(payload);
      console.log(res);
      localStorage.setItem("accessToken", res.data.data.token);
      toast.success(res.data.message);

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
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 ">
            Let's Get You Logged In!
          </h2>
          <label
            htmlFor=""
            className="block text-[20px] font-medium text-blue-500"
          >
             Email
          </label>
          <br />
          <input
            type="text"
            id="email"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username or email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <label
            type="text"
            id="email"
            className="block text-[20px] font-medium text-blue-500 mt-[15px]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors?.password && (
            <span className="text-red-400">{errors?.password?.message}</span>
          )}
          <button
            type="submit"
            disabled={isError}
            className={`${
              isError
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-400 hover:bg-emerald-500"
            } w-[150px] text-white mt-[30px] mr-[200px] p-[10px] justify-center rounded-[15px] transition duration-200`}
          >
            {isSubmitting ? "Submitting..." : "Log In"}
          </button>
          {/* <button className="w-[150px] bg-blue-500 text-white mt-[30px] ml-[110px] p-[10px] justify-center rounded-[15px] hover:bg-blue-500/80 transition duration-200">
            Submit
          </button> */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
