import React from 'react';
import { useState } from "react";
import { FaCircle, FaClock, FaLink, FaCamera, FaCloudArrowUp } from "react-icons/fa6";

const BlogWriting = () => {
    const [wordCount, setWordCount] = useState(900);
    return (
        <section className="flex flex-col lg:flex-row gap-6 px-4 py-6">
            {/* Left section */}
            <div className="flex-1 space-y-6">
                {/* Blog Writer Box */}
                <div className="bg-white p-4 rounded shadow">
                    {/* Title Row */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Write New Blog</h2>
                        <div className="text-sm text-gray-600 flex items-center gap-3">
                            <span className="text-green-500"><FaCircle /></span> Auto-saving
                            <span className="text-gray-500"><FaClock /></span> Draft
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-3">
                        <div>
                            <label htmlFor="blog-title" className="block text-sm text-gray-700 mb-1">Blog Title</label>
                            <input type="text" id="blog-title" className="w-full p-2 border rounded" placeholder="Enter your blog title" />
                        </div>
                        <div>
                            <label htmlFor="author-name" className="block text-sm text-gray-700 mb-1">Author Name</label>
                            <input type="text" id="author-name" className="w-full p-2 border rounded" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm text-gray-700 mb-1">Category</label>
                            <select id="category" className="w-full p-2 border rounded">
                                <option>Technology</option>
                                <option>Research</option>
                                <option>Events</option>
                                <option>Publications</option>
                                <option>Standards</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="blog-content" className="block text-sm text-gray-700 mb-1">Blog Content</label>
                            <div className="border p-3 rounded-lg space-y-3">
                                <div className="flex gap-3 text-lg">
                                    <button type="button"><b>B</b></button>
                                    <button type="button"><i>I</i></button>
                                    <button type="button"><FaLink /></button>
                                    <button type="button"><FaCamera /></button>
                                </div>
                                <textarea
                                    id="blog_content"
                                    className="w-full h-48 border p-2 rounded resize-none"
                                    placeholder="Write your blog content here..."
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Upload Box */}
                <div className="text-center">
                    <label htmlFor="file_upload" className="border-2 border-dashed border-gray-300 rounded-lg p-5 bg-white block hover:border-blue-500 cursor-pointer mb-4">
                        <div className="text-3xl mb-2 text-gray-600"><FaCloudArrowUp /></div>
                        <p>Upload a <span className="text-blue-600 font-semibold">file</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        <input type="file" id="file_upload" hidden />
                    </label>
                    <div className="flex justify-end gap-4">
                        <button className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
                        <button className="bg-gray-300 px-4 py-2 rounded">Save Draft</button>
                        <button className="bg-[#045C99]  text-white px-4 py-2 rounded hover:bg-black">Submit for Review</button>
                    </div>
                </div>
            </div>

            {/* Right section - Guidelines */}
            <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold pb-2">Writing Guidelines</h2>

                <div className="mb-4">
                    <h3 className="text-md font-medium pb-1">Word Count</h3>
                    <p><strong>Minimum:</strong> 500 words</p>
                    <p><strong>Maximum:</strong> 2000 words</p>
                    <p><strong>Current:</strong> {wordCount} words</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-md font-medium pb-1">Formatting Tips</h3>
                    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>Use headers to organize content</li>
                        <li>Include relevant images</li>
                        <li>Keep paragraphs concise</li>
                        <li>Use bullet points for lists</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-md font-medium pb-1">Content Guidelines</h3>
                    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>Original content only</li>
                        <li>Cite all sources</li>
                        <li>Avoid plagiarism</li>
                        <li>Technical accuracy</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-md font-medium pb-1">Preview</h3>
                    <div className="border p-3 rounded">
                        <h4 className="text-md font-semibold pb-2">Blog Preview</h4>
                        <p className="text-sm text-gray-600">Your blog preview will appear here as you type.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogWriting;