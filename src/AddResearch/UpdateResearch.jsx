import React from 'react';
import { FaCloudArrowUp } from "react-icons/fa6";

const UpdateResearch = () => {
    return (
        <section className=" flex flex-col items-center">
            <div className="w-[90%] lg:w-[60%] mx-auto  text-center">
                <h2 className="text-[#045C99] text-4xl font-bold leading-10 py-5">
                    Update Research
                </h2>
                <p className="text-gray-600 text-lg leading-7 mb-12">
                    Update the research work to our platform. Please fill in all required information carefully.
                </p>

                <div className="w-[100%] flex flex-col gap-5 ">

                    {/* Research Information */}
                    <div className="w-[100%] bg-white p-8 rounded-lg shadow-lg text-left mx-auto ">
                        <h3 className="text-3xl font-bold text-gray-900 pb-5 my-2 ">Research Information</h3>
                        <label className="block text-gray-700 font-medium py-2">Research Title</label>
                        <input type="text" placeholder="Enter research title" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Author(s) Name</label>
                        <input type="text" placeholder="Enter author name" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Department/Institution</label>
                        <input type="text" placeholder="Enter department" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Research Category</label>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Computer Science</option>
                        </select>

                        <label className="block text-gray-700 font-medium py-2">Publication Date</label>
                        <input type="date" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Abstract/Summary</label>
                        <textarea placeholder="Enter abstract summary" className="w-full h-28 p-2 border rounded resize-none"></textarea>
                    </div>

                    {/* Research Details */}
                    <div className="w-[100%] bg-white p-8 rounded-lg shadow-lg text-left mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 pb-5 -mt-5">Research Details</h3>

                        <label className="block text-gray-700 font-medium py-2">Keywords/Tags</label>
                        <input type="text" placeholder="Enter keywords" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Research Methodology</label>
                        <input type="text" placeholder="Enter methodology" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Research Status</label>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Completed</option>
                            <option>Ongoing</option>
                        </select>

                        <label className="block text-gray-700 font-medium py-2">Funding Information</label>
                        <input type="text" placeholder="Enter funding source" className="w-full p-2 mb-2 border rounded" />
                    </div>

                    {/* File Upload */}
                    <div className="w-[100%] bg-white p-8 rounded-lg shadow-lg text-left mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 pb-5 -mt-5">File Upload</h3>

                        <label className="block text-gray-700 font-medium py-5">Research Paper (PDF)</label>
                        <label htmlFor="file_upload_1" className="cursor-pointer ">
                            <div className='mb-2 border-2 border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center'>
                                <div className="text-2xl  text-blue-500 flex justify-center"><FaCloudArrowUp /></div>
                                <p><span className="text-[#045C99] font-bold">Upload a file</span> or drag and drop</p>
                                <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                <input type="file" id="file_upload_1" hidden />
                            </div>
                        </label>

                        <label className="block text-gray-700 font-medium py-2">Supporting Documents</label>
                        <label htmlFor="file_upload_2" className="cursor-pointer">
                            <div className='mb-2 border-2 border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center'>

                                <div className="text-2xl mb-2 text-blue-500 flex justify-center"><FaCloudArrowUp /></div>
                                <p>Upload a <span className="text-[#045C99] font-bold">file</span> or drag and drop</p>
                                <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                <input type="file" id="file_upload_2" hidden />
                            </div>
                        </label>
                    </div>

                    {/* Contact Info */}
                    <div className="w-[100%] bg-white p-8 rounded-lg shadow-lg text-left mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 pb-5 -mt-5">Contact Information</h3>

                        <label className="block text-gray-700 font-medium py-2">Principal Researcher's Email</label>
                        <input type="email" placeholder="Enter email" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Contact Phone Number</label>
                        <input type="tel" placeholder="Enter phone number" className="w-full p-2 mb-2 border rounded" />

                        <label className="block text-gray-700 font-medium py-2">Institution Address</label>
                        <input type="text" placeholder="Enter address" className="w-full h-24 p-2 border rounded" />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-5">
                        <button className="bg-blue-500 text-white px-6 py-2 mb-4 rounded hover:bg-blue-700 transition">Submit Research</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UpdateResearch;