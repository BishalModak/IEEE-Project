import React from 'react';

const JoinUs = () => {
    return (
        <section className=" py-12 flex justify-center">
            <div className="bg-white p-8 w-full max-w-3xl shadow-lg rounded">
                <h2 className="text-center text-3xl font-bold text-[#045C99] mb-6">IEEE Membership Registration</h2>

                <form className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Membership Type</h3>
                        <label className="block text-sm font-medium text-gray-700 mt-4">Global or Local</label>
                        <select type="text"  required className="w-full mt-1 p-2 border rounded z-5 mb-2">
                            <option value="option1">Global</option>
                            <option value="option2">Local</option>
                           
                        </select>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>

                        <label className="block text-sm font-medium text-gray-700 mt-4">Full Name</label>
                        <input type="text" required className="w-full mt-1 p-2 border rounded" />

                        <label className="block text-sm font-medium text-gray-700 mt-4">Email Address</label>
                        <input type="email" required className="w-full mt-1 p-2 border rounded" />

                        <label className="block text-sm font-medium text-gray-700 mt-4">Department, Batch & Section</label>
                        <input type="text" required className="w-full mt-1 p-2 border rounded" />

                        <label className="block text-sm font-medium text-gray-700 mt-4">Organization/Institution</label>
                        <input type="text" required className="w-full mt-1 p-2 border rounded" />

                        <label className="block text-sm font-medium text-gray-700 mt-4">Mobile Number</label>
                        <input type="tel" required className="w-full mt-1 p-2 border rounded" />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Membership Details</h3>

                        <label className="block text-sm font-medium text-gray-700 mt-4">Membership Type</label>
                        <select required className="w-full mt-1 p-2 border rounded">
                            <option>Select Type</option>
                        </select>

                        <label className="block text-sm font-medium text-gray-700 mt-4">Technical Societies Interest</label>
                        <select required className="w-full mt-1 p-2 border rounded">
                            <option>Select Society</option>
                        </select>

                        <label className="block text-sm font-medium text-gray-700 mt-4">Any Skill?</label>
                        <input type="text" required className="w-full mt-1 p-2 border rounded" />
                    </div>

                    <div className="bg-gray-100 p-6 rounded">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h3>
                        <h4 className="text-lg font-bold">Membership Fee: 360 Taka</h4>
                        <p className="text-gray-700">Local Bkash/Rocket/Nagad: 017XXXXXXXX</p>

                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <div className="w-full md:w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Bkash/Nagad/Rocket Reference Number</label>
                                <input type="text" required className="w-full mt-1 p-2 border rounded" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input type="text" required placeholder="DD-MM-YYYY" className="w-full mt-1 p-2 border rounded" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Terms and Consent</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <label className="flex items-start gap-2">
                                <input type="checkbox" required className="mt-1" />
                                I agree to the IEEE Code of Ethics
                            </label>
                            <label className="flex items-start gap-2">
                                <input type="checkbox" required className="mt-1" />
                                I accept the Data Privacy Policy
                            </label>
                            <label className="flex items-start gap-2">
                                <input type="checkbox" required className="mt-1" />
                                I agree to the Terms of Service
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#045C99] hover:bg-blue-900 text-white font-medium py-2 px-4 rounded">
                        Submit Application
                    </button>
                </form>
            </div>
        </section>
    );
};

export default JoinUs;