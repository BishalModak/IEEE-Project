import React from 'react';

const teamMembers = [
  { name: 'Mahfuz Alam Chowdhury', role: 'Chairperson', image: 'https://i.ibb.co.com/gFSpDXMQ/Mahfuz.jpg', fb: 'https://www.facebook.com/share/16MJ91wAbX/', li: 'https://www.linkedin.com/in/md-mahfuz-alam-chowdhury-b25023235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Zuhaer Tanzim', role: 'Vice Chairperson', image: 'https://i.ibb.co.com/Jw5c8r4t/IMG-20250426-022010-473-1.webp', fb: 'https://www.facebook.com/share/1EMPEfL34h/', li: 'https://www.linkedin.com/in/zuhaer-tanzim-737aa223a/' },
  { name: 'Jyoti Prokash Anindya', role: 'Secretary', image: 'https://i.ibb.co.com/35Cf6yBQ/anindya.jpg', fb: 'https://www.facebook.com/share/192D7AJ4hd/', li: '' },
  { name: 'Sabbir Hussain Khan', role: 'Treasurer', image: 'https://i.ibb.co.com/9kw8RLSh/sabbir.jpg', fb: 'https://www.facebook.com/sabbir.khan.465751?rdid=4vcQQaMOJYvh9V7L', li: 'https://www.linkedin.com/in/sabbir-hussain-khan-188892263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
];

const MemberCard = ({ name, role, info, image, fb, li }) => (
  <div className="p-6 text-center flex-grow">
    <div className="shadow-md p-4 mx-auto w-fit px-5">
      <img src={image} alt={name} className="w-[200px] h-[200px] mx-auto mb-3 object-cover" />
      <h3 className="text-xl font-bold">{name}</h3>
      <span className="text-[#045C99]">{role}</span>
      <p>{info}</p>
      <div className="text-2xl mt-2">
        <a href={fb} className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-facebook"></i></a>
        <a href={li} className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>
);

const Panel = () => {
  return (
    <div className="px-4 py-8 space-y-10">

      {/* Advisory Panel */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#045C99]">Current Advisory Panel</h1>
        <p className="text-gray-600">Distinguished Advisors Supporting Our Mission</p>
        <div className="flex flex-row justify-center gap-25  mt-6">
          <div className="p-6 text-center">
            <div className="shadow-md p-4 mx-auto w-fit px-10">
              <img src="https://i.ibb.co.com/5hpqrZbL/Mony-sir.jpg" alt="Sir" className="w-[200px] h-[200px] object-cover mx-auto mb-3" />
              <h3 className="text-xl font-bold">Md. Jehadul Islam Mony</h3>
              <span className="text-[#045C99]">Advisor</span>
              <p className='w-[150px] mx-auto'>Department of </p>
              <p>Computer Science & Engineering</p>
              <div className="text-2xl mt-2">
                <a href="https://www.facebook.com/share/168R1o2USN/" className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/md-jehadul-islam-mony-270708119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="shadow-md p-4 mx-auto w-fit px-10">
              <img src="https://i.ibb.co.com/whB9WsPh/Jalal-sir.jpg" alt="Sir" className="w-[200px] h-[200px] object-cover mx-auto mb-3" />
              <h3 className="text-xl font-bold">
                Md. Jalal Uddin Chowdhury</h3>
              <span className="text-[#045C99]">Co-Advisor</span>
              <p className='w-[150px] mx-auto'>Department of </p>
              <p>Computer Science & Engineering</p>
              <div className="text-2xl mt-2">
                <a href="https://www.facebook.com/share/123w2JVRGsp/" className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/jalalchy101?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black hover:text-[#045C99] px-2"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#045C99]">Current Executive Committee Members (2025-2026)</h1>
        <p className="text-gray-600">Leading Innovation and Technology Excellence</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {teamMembers.map((m, idx) => <MemberCard key={idx} {...m} />)}
        </div>
      </section>


    </div>
  );
};

export default Panel;