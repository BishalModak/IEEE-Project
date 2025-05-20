import React from 'react';

const Portal = () => {
  return (
    <section className="relative h-[652px] w-full">
      {/* Background GIF */}
      <img
        src="img/portal.gif"
        alt="Animated GIF"
        className="w-full h-[652px] object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center justify-center">
        <img src="img/ieeelogo.png" alt="IEEE Logo" className="w-[100px] h-[100px]" />
        <h1 className="text-[35px] font-bold py-5">Welcome to IEEE LU SB Portal</h1>

        {/* Sign in / Sign up buttons */}
        <div className="flex justify-center gap-5">
          <a
            href="signin.html"
            className="px-4 py-2 border border-black text-black rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-200"
          >
            Sign In
          </a>
          <a
            href="signup.html"
            className="px-4 py-2 border border-black text-black rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portal;