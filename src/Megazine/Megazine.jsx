import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaUser } from "react-icons/fa6";


const Megazine = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('/Megazine.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, [])


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
          {datas.map((megazine, i) => (
            <div key={i} className="shadow-md rounded-lg pb-4 overflow-hidden">
              <img src={megazine?.image} alt={megazine.alt} className="h-40 w-full object-cover" />
              <div className="flex gap-6 p-3 text-sm text-gray-500">
                <p><FaCalendarDays className="inline mr-1" /> Date</p>
                <p><FaUser className="inline mr-1" /> Full Name</p>

              </div>
              <h3 className="text-xl font-semibold px-4">{megazine.title}</h3>
              <p className="px-4 py-2 text-gray-700">{megazine.description}</p>
              <a href={`/megazine/${megazine.id}`} className="text-[#045C99] px-4 hover:underline">Read More</a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Megazine;