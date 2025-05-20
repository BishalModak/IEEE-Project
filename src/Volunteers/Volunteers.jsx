import React from 'react';
import userImage from '../../public/img/user.png';


const Volunteers = () => {
  return (
    <div className="bg-white text-gray-800">


      {/* Section Title */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold uppercase">Volunteers of IEEE LU Student Branch</h1>
          <p className="text-gray-600 mt-2">
            Discover and connect with dedicated IEEE volunteers making a difference worldwide
          </p>
        </div>

        {/* Volunteers Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill().map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-lg transition">
              <img src={userImage} alt="Volunteer" className="mx-auto mb-4 h-32 w-32 object-cover rounded-full" />
              <h3 className="font-semibold text-lg">Full Name</h3>
              <p className="text-sm text-gray-600">IEEE ID</p>
              <span className="text-sm font-medium text-[#045C99] block mt-1">Position</span>
              <div className="flex justify-center mt-3 space-x-3">
                <a href="https://www.facebook.com/ieeecslu" className="text-[#045C99] hover:text-black text-xl"><i className="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/company/ieeecslu/" className="text-[#045C99] hover:text-black text-xl"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Volunteers;
