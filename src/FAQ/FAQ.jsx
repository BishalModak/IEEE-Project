import React from "react";

const FAQ = () => {
  return (
    <div className="font-['Roboto']">
      {/* FAQ Title Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-[#045C99]">Frequently Asked Questions</h1>
        <p className="mt-4 text-gray-600">
          Find answers to common questions about IEEE membership, events, technical
          resources, and more. <br /> Can't find what you're looking for? Contact our
          support team.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search Frequently Asked Questions"
            className="w-1/2 px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        <div className="lg:col-span-1">
          <div className="shadow-md p-6 rounded-lg leading-8">
            <h3 className="text-xl font-semibold">Popular Post</h3>
            <h4 className="text-[#045C99] mt-4">About IEEE</h4>
            <p>Membership</p>
            <p>Events & Activity</p>
            <p>Technical Resources</p>
            <p>Publications</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="bg-white shadow-md p-6 mb-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">What is IEEE?</h3>
            <p>
              IEEE is the world's largest technical professional organization
              dedicated to advancing technology for the benefit of humanity. Through
              its highly cited publications, conferences, technology standards, and
              professional and educational activities, IEEE is the trusted voice for
              engineering, computing, and technology information around the globe.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 mb-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">What does IEEE stand for?</h3>
            <p>
              IEEE stands for the Institute of Electrical and Electronics Engineers.
              The association is dedicated to advancing innovation and technological
              excellence for the benefit of humanity and is the world's largest
              technical professional society.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Membership</h2>
          <div className="bg-white shadow-md p-6 mb-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">How do I become a member?</h3>
            <p>
              You can become an IEEE member by visiting the IEEE website and
              completing the online application process. Different membership grades
              are available based on your professional experience and qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* Ask Question Form */}
      <section className="bg-white w-4/5 mx-auto my-10 p-6 rounded-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Couldn't find what you're looking for?
        </h2>
        <form className="flex flex-col items-center gap-4">
          <label htmlFor="email" className="w-3/4 text-left">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
          />

          <label htmlFor="qus_form" className="w-3/4 text-left">Your Question</label>
          <textarea
            id="qus_form"
            placeholder="Write your question here..."
            className="w-3/4 h-28 px-4 py-2 border border-gray-300 rounded-lg resize-none"
          ></textarea>
        </form>
      </section>

      {/* Feedback Section */}
      <section className="bg-white w-2/5 mx-auto my-10 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-6">Was this FAQ Helpful?</h3>
        <div className="grid grid-cols-2 gap-6">
          <p className="bg-white px-4 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer">
            <i className="fa-solid fa-thumbs-up mr-2 text-green-600"></i>Yes
          </p>
          <p className="bg-white px-4 py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer">
            <i className="fa-solid fa-thumbs-down mr-2 text-red-600"></i>No
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
