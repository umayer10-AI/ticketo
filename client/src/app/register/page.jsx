"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Ticket } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (v) => {
    console.log(v);

    const { data, error } = await authClient.signUp.email({
        name: v.name,
        email: v.email,
        password: v.password,
        image: v.image,
        callbackURL: "/",
    });

    if(data){
        alert('Data Successfully')
    }
    if(error){
        alert(error.message)
    }
  };

  return (
    <div className="bg-black flex items-center justify-center px-6 my-10">
      
      <div className="max-w-md w-full bg-zinc-900 rounded-2xl py-5 px-8 shadow-xl shadow-cyan-400">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg p-2 shadow-cyan-500/20">
            <Ticket className="text-white" />
          </div>

          <h1 className="mt-1 text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Create account
          </h1>
        </div>

        {/* Google Register */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-medium hover:scale-105 transition mb-5"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-zinc-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px flex-1 bg-zinc-700"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          
          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                Name is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Email is required
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Profile Image URL
            </label>

            <input
              type="text"
              placeholder="Paste image URL"
              {...register("image", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.image && (
              <p className="text-red-500 text-xs mt-1">
                Image URL is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              {...register("password", { required: true })}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-cyan-500"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                Password is required
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-700 hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;