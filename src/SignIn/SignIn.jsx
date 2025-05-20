import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className="relative h-[772px] w-full">
      {/* Background Image */}
      <img
        src="img/portal.gif"
        alt="IEEE Portal"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Sign In Form Overlay */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[40%] bg-black/60 text-white p-10 text-center z-10 rounded-md shadow-md">
        <img src="img/ieeelogo.png" alt="IEEE Logo" className="w-[100px] h-[100px] mx-auto" />
        <h1 className="text-2xl font-semibold py-2">Sign In</h1>
        <p className="text-sm">
          I don't have an account!{' '}
          <Link to={"/signup"} className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <form className="flex flex-col gap-5 w-[70%] mx-auto mt-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your IEEE ID"
            className="p-2 rounded-md bg-black border border-blue-500 text-white placeholder:text-white"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="p-2 rounded-md bg-black border border-blue-500 text-white placeholder:text-white"
          />
          <button
            type="submit"
            className="p-2 rounded-md bg-blue-500 text-white border border-blue-500 hover:bg-transparent hover:text-white transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;