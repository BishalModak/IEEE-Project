import React from 'react';


import userImage from '../../public/img/user.png';

const ResearchPapers = () => {
  return (
    <div className="font-sans bg-gray-50 w-[95%] mx-auto" >
      {/* Navbar */}


      {/* Research Papers Section */}
      <section className="lg:max-w-7xl mx-auto py-12 px-4">
        <div className="lg:flex lg:space-x-16">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <section className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Research Papers</h1>
              <p className="text-gray-600 mt-4">Explore our collection of cutting-edge research papers from IEEE LU Student Branch members. Our publications cover various fields including AI, robotics, communications, and more.</p>
            </section>
            <div className="flex space-x-4 mb-8">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-md"
              />
              <div className="flex space-x-2">
                <select name="options" id="options" className="px-4 py-2 border rounded-md">
                  <option>Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <select name="options" id="options" className="px-4 py-2 border rounded-md">
                  <option>Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            {/* Research Papers List */}
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Deep Learning Approaches in Medical Image Analysis</h2>
                  <button className="bg-[#045C99] text-white px-4 py-2 rounded-md">Download</button>
                </div>
                <div className="flex space-x-4 mt-2">
                  <p><i className="fa-solid fa-calendar-days"></i> Date</p>
                  <p><i className="fa-solid fa-user"></i> Full Name</p>
                </div>
                <p className="mt-2">A detailed overview of deep learning methods applied in medical image analysis. Focused on improving diagnostic accuracy and healthcare applications.</p>
                <div className="flex space-x-4 mt-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Deep Learning</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Healthcare</span>
                </div>
              </div>
              <div className="border-b pb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">5G Network Optimization Using Machine Learning</h2>
                  <button className="bg-[#045C99] text-white px-4 py-2 rounded-md">Download</button>
                </div>
                <div className="flex space-x-4 mt-2">
                  <p><i className="fa-solid fa-calendar-days"></i> Date</p>
                  <p><i className="fa-solid fa-user"></i> Full Name</p>
                </div>
                <p className="mt-2">An exploration of the integration of machine learning algorithms in optimizing 5G network performance.</p>
                <div className="flex space-x-4 mt-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">5G</span>
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">Machine Learning</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">Networking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Total Papers</p>
                  <h4 className="font-semibold">155</h4>
                </div>
                <div className="flex justify-between">
                  <p>Published This Year</p>
                  <h4 className="font-semibold">35</h4>
                </div>
                <div className="flex justify-between">
                  <p>Active Authors</p>
                  <h4 className="font-semibold">90</h4>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Artificial Intelligence</p>
                  <h4 className="font-semibold">45 Papers</h4>
                </div>
                <div className="flex justify-between">
                  <p>Robotics</p>
                  <h4 className="font-semibold">35 Papers</h4>
                </div>
                <div className="flex justify-between">
                  <p>Communications</p>
                  <h4 className="font-semibold">20 Papers</h4>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Top Authors</h3>
              <div className="flex items-center space-x-4 mb-6">
                <img src={userImage} alt="Author" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Tahmid Hasan</h4>
                  <p>15 Papers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={userImage} alt="Author" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Nabila Rahman</h4>
                  <p>10 Papers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ResearchPapers;