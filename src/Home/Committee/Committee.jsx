import React from 'react';

const Committee = () => {
  const teamMembers = [
    { name: 'Mahfuz Alam Chowdhury', role: 'Chairperson', image: 'https://i.ibb.co.com/gFSpDXMQ/Mahfuz.jpg' },
    { name: 'Zuhaer Tanzim', role: 'Vice Chairperson', image: 'https://i.ibb.co.com/Jw5c8r4t/IMG-20250426-022010-473-1.webp' },
    { name: 'Jyoti Prokash Anindya', role: 'Secretary', image: 'https://i.ibb.co.com/35Cf6yBQ/anindya.jpg' },
    { name: 'Sabbir Hussain Khan', role: 'Treasurer', image: 'https://i.ibb.co.com/9kw8RLSh/sabbir.jpg' },
  ];

  return (
    <section className="my-24 mx-12">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">2025 Committee</h2>
      <div className="flex flex-wrap justify-center gap-5 lg:gap-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center max-w-[280px] mt-3">
            <div className="">
              <img className='w-50 h-50 bg-gray-300 object-cover rounded-full mx-auto mb-3' src={member.image} alt={`${member.name}`} />
            </div>
            <div className="font-semibold text-lg text-black leading-7">{member.name}</div>
            <div className="text-sm font-normal leading-5 text-[#045C99]">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Committee;