import React from 'react';

import rn1 from '../../../public/img/rn1.jpg';
import rn2 from '../../../public/img/rn2.jpg';
import rn3 from '../../../public/img/rn3.jpg';
import { Link } from 'react-router-dom';


const RecentNews = () => {
    const newsData = [
        {
          date: 'Dec. 17, 2024 / By IEEE IU SB',
          title: 'A Roadmap for Software Engineers',
          desc: 'Trendy Careers',
          img: rn1,
        },
        {
          date: 'Feb. 16, 2023 / By IEEE IU SB',
          title: 'Bootcamp on Mobile Application Development with Flutter',
          desc: 'Respective Faculty Members, Department of CSE',
          img: rn2,
        },
        {
          date: 'Mar. 25, 2024 / By IEEE IU SB',
          title: 'Closing Ceremony of AI/ML Professional Training Program 2024',
          desc: 'Organised by: IEEE Computer Society LU SB Chapter',
          img: rn3,
        },
      ];
    return (
        <section className="w-[80%] mx-auto my-24 font-sans text-gray-800">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-3xl font-bold text-gray-900">Recent News</h3>
          <a href='/news' className="text-[#045C99] font-bold hover:text-gray-600 transition-colors duration-300">
            Read All News
          </a>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {newsData.map((news, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-[200px] overflow-hidden bg-gray-100">
                <img
                  src={news.img}
                  alt={`News ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h5 className="text-sm uppercase text-gray-500 mb-2">{news.date}</h5>
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href="#"
                    className="text-gray-900 hover:text-blue-500 transition-colors duration-300"
                  >
                    {news.title}
                  </a>
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{news.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
  
    );
};

export default RecentNews;