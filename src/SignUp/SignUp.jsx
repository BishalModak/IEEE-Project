import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    memberType: 'local',
    IEEEID: '',
    password: '',
    confirmPassword: ''
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
            <h1 className="text-3xl font-semibold mb-2">Register Now</h1>
            <p className="text-gray-600 mb-6">
              Join us and be part of a vibrant community. Sign up now to unlock exclusive content and features!
            </p>
          </div>
        <div className="bg-white p-6 text-center  rounded-lg shadow-lg overflow-hidden">

          <div className="bg-white p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded p-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

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
                <label className="block mb-2 text-gray-700">Member type</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="global"
                      name="memberType"
                      className="mr-2"
                      checked={formData.memberType === 'global'}
                      onChange={handleChange}
                    />
                    <label htmlFor="global" className="text-gray-700">Global Member</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="local"
                      name="memberType"
                      className="mr-2"
                      checked={formData.memberType === 'local'}
                      onChange={handleChange}
                    />
                    <label htmlFor="local" className="text-gray-700">Local Member</label>
                  </div>
                </div>
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

              <div className="text-left">
                <label htmlFor="confirmPassword" className="block mb-2 text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded p-2"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#045C99] hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;