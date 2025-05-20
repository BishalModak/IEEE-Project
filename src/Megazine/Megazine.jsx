import React from "react";

const Megazine = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#045C99]">IEEE LU SB Magazines</h1>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            Discover our collection of technical magazines featuring cutting-edge research, student achievements,
            and innovative ideas from the IEEE LU Student Branch community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <select className="border px-4 py-2 rounded shadow w-1/2 md:w-1/4">
            <option>Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
          <select className="border px-4 py-2 rounded shadow w-1/2 md:w-1/4">
            <option>Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Magazine 1 */}
          <div className="shadow-md rounded-lg overflow-hidden bg-white">
            <img src="img/megazin1.png" alt="Tech Horizon Magazine" className="w-full rounded-tr-lg rounded-bl-lg mb-4" />
            <span className="block px-5 text-sm text-gray-500">
              <i className="fa-solid fa-calendar-days mr-1"></i> date
            </span>
            <h3 className="px-5 mt-2 font-semibold text-lg">Tech Horizon Magazine</h3>
            <p className="px-5 mt-2 text-sm text-gray-600">
              Exploring the latest advancements in technology and their impact on society.
            </p>
            <a href="#" className="block px-5 mt-4 text-[#045C99] hover:underline">Read More</a>
          </div>

          {/* Magazine 2 */}
          <div className="shadow-md rounded-lg overflow-hidden bg-white">
            <img src="img/megazin2.png" alt="Innovation Quarterly" className="w-full rounded-tr-lg rounded-bl-lg mb-4" />
            <span className="block px-5 text-sm text-gray-500">
              <i className="fa-solid fa-calendar-days mr-1"></i> date
            </span>
            <h3 className="px-5 mt-2 font-semibold text-lg">Innovation Quarterly</h3>
            <p className="px-5 mt-2 text-sm text-gray-600">
              Showcasing student research projects and technical innovations.
            </p>
            <a href="#" className="block px-5 mt-4 text-[#045C99] hover:underline">Read More</a>
          </div>

          {/* Magazine 3 */}
          <div className="shadow-md rounded-lg overflow-hidden bg-white">
            <img src="img/megazin3.png" alt="LU Tech Review" className="w-full rounded-tr-lg rounded-bl-lg mb-4" />
            <span className="block px-5 text-sm text-gray-500">
              <i className="fa-solid fa-calendar-days mr-1"></i> date
            </span>
            <h3 className="px-5 mt-2 font-semibold text-lg">LU Tech Review</h3>
            <p className="px-5 mt-2 text-sm text-gray-600">
              Annual review of technological achievements and student success stories.
            </p>
            <a href="#" className="block px-5 mt-4 py-4 text-[#045C99] hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Megazine;