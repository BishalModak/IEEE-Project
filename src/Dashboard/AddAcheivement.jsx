import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrophy, FaAward, FaListAlt, FaCalendarAlt, FaFileAlt, FaImage, FaLink, FaArrowLeft } from 'react-icons/fa';

const AddAcheivement = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        year: new Date().getFullYear(),
        criteria: '',
        imageFile: null,
        imagePreview: null,
        externalLink: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Categories for achievements
    const categories = [
        'Branch Awards',
        'Individual Awards',
        'Special Recognition',
        'Scholarships',
        'Academic Excellence',
        'Technical Achievement',
        'Leadership Award',
        'Community Service'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // File size validation (limit to 2MB)
        if (file.size > 2 * 1024 * 1024) {
            setError('Image size should be less than 2MB');
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevData => ({
                ...prevData,
                imageFile: file,
                imagePreview: reader.result
            }));
        };
        reader.readAsDataURL(file);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            // Validate form data
            if (!formData.title.trim() || !formData.description.trim() || !formData.category) {
                throw new Error('Please fill in all required fields');
            }

            // In a real app, you would send this data to your backend
            console.log('Submitting achievement:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            setSuccess(true);

            // Reset form after 2 seconds and redirect back to dashboard
            setTimeout(() => {
                setSuccess(false);
                navigate('/dashboard');
            }, 2000);
        } catch (err) {
            setError(err.message || 'Failed to add achievement');
        } finally {
            setSubmitting(false);
        }
    };

    const goBack = () => {
        navigate(-1);
    };

    // Generate year options (current year and 10 years back)
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 11 }, (_, i) => currentYear - i);

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={goBack}
                    className="flex items-center text-[#045C99] mb-6 hover:underline"
                >
                    <FaArrowLeft className="mr-2" /> Back to Dashboard
                </button>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Add New Achievement</h1>
                    <p className="text-gray-600 mb-6">Create a new IEEE achievement that can be assigned to members</p>

                    {success && (
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                            <p className="text-green-700">Achievement successfully added! Redirecting to dashboard...</p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                            <p className="text-red-700">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title Input */}
                            <div className="md:col-span-2">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                    Achievement Title*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaTrophy className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter achievement title (e.g., IEEE Outstanding Branch Counselor Award)"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Category Select */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                    Category*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaListAlt className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        required
                                    >
                                        <option value="">Select achievement category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Year Select */}
                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                                    Year*
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaCalendarAlt className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <select
                                        id="year"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        required
                                    >
                                        {yearOptions.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Description Textarea */}
                            <div className="md:col-span-2">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Description*
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <FaFileAlt className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={3}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter a detailed description of the achievement"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Criteria Textarea */}
                            <div className="md:col-span-2">
                                <label htmlFor="criteria" className="block text-sm font-medium text-gray-700 mb-1">
                                    Eligibility Criteria
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <FaAward className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="criteria"
                                        name="criteria"
                                        value={formData.criteria}
                                        onChange={handleChange}
                                        rows={3}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter eligibility criteria for this achievement (optional)"
                                    />
                                </div>
                            </div>

                            {/* External Link Input */}
                            <div className="md:col-span-2">
                                <label htmlFor="externalLink" className="block text-sm font-medium text-gray-700 mb-1">
                                    External Link
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLink className="h-4 w-4 text-gray-400" />
                                    </div>
                                    <input
                                        type="url"
                                        id="externalLink"
                                        name="externalLink"
                                        value={formData.externalLink}
                                        onChange={handleChange}
                                        className="pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md py-2 px-3"
                                        placeholder="Enter link to more information about this achievement (optional)"
                                    />
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="md:col-span-2">
                                <label htmlFor="achievementImage" className="block text-sm font-medium text-gray-700 mb-1">
                                    Achievement Image
                                </label>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-1">
                                        <div className="mt-1 flex items-center">
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaImage className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="file"
                                                    id="achievementImage"
                                                    name="achievementImage"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="pl-10 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md py-2 px-3"
                                                />
                                            </div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">
                                            Recommended: Square image, maximum size 2MB
                                        </p>
                                    </div>
                                    {formData.imagePreview && (
                                        <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={formData.imagePreview}
                                                alt="Achievement preview"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
                            <button
                                type="button"
                                onClick={goBack}
                                className="w-full md:w-auto bg-gray-200 text-gray-700 py-2 px-6 rounded-md font-medium hover:bg-gray-300 transition duration-300 flex justify-center items-center"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full md:w-auto bg-[#045C99] text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300 flex justify-center items-center ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Adding...
                                    </>
                                ) : 'Add Achievement'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAcheivement;