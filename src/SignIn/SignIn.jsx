import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({

    email: '',
    IEEEID: '',
    password: '',
    
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'radio' ? e.target.id : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full ">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold mb-2">Welcome</h1>
            <p className="text-gray-600 mb-6">
              Join us and be part of a vibrant community. Sign up now to unlock exclusive content and features!
            </p>
          </div>
        <div className="bg-white p-6 text-center  rounded-lg shadow-lg overflow-hidden">

          <div className="bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              

              <div className="text-left">
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded p-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-left">
                <label htmlFor="IEEEID" className="block mb-2 text-gray-700">IEEE ID</label>
                <input
                  type="text"
                  id="IEEEID"
                  name="IEEEID"
                  placeholder="IEEE ID"
                  className="w-full border border-gray-300 rounded p-2"
                  value={formData.IEEEID}
                  onChange={handleChange}
                  required
                />
              </div>

              

              <div className="text-left">
                <label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded p-2"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              

              <button
                type="submit"
                className="w-full bg-[#045C99] hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Log In
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Create an account{' '}
                <a href='/signup' className="text-blue-600 hover:underline">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;