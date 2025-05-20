import React from "react";
import userImage from '../../public/img/user.png';


const Webmaster = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 max-w-screen-xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">IEEE LU Webmaster Coordinator</h1>
        <p className="text-gray-600">Dedicated professionals building the digital future of IEEE</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6"
          >
            <img src={userImage} alt="Webmaster" className="w-36 h-36 object-cover rounded-full mb-4" />
            <h3 className="text-xl font-semibold">Full Name</h3>
            <span className="text-sm text-gray-500">Designation</span>
            <p className="text-sm text-gray-600">IEEE ID</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/ieeecslu" className="text-blue-600 text-xl">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/ieeecslu/" className="text-blue-500 text-xl">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Webmaster;
