import React, { useState } from 'react';
import { FaUser, FaCamera, FaCheck } from 'react-icons/fa';

const UploadUserPic = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setErrorMessage('');

        if (!file) return;

        // Validate file type
        if (!file.type.match('image.*')) {
            setErrorMessage('Please select an image file (jpeg, png, etc)');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setErrorMessage('Image size should be less than 5MB');
            return;
        }

        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            setErrorMessage('Please select an image to upload');
            return;
        }

        setIsUploading(true);

        try {
            // Here you would normally upload the image to your server
            // For now, we'll simulate a successful upload with a timeout
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);

        } catch (error) {
            console.error('Error uploading image:', error);
            setErrorMessage('Failed to upload image. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Upload Profile Picture</h1>
                    <p className="mt-2 text-gray-600">
                        Select and upload a profile picture to personalize your IEEE account
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <div className="rounded-full bg-green-100 p-3 mb-4">
                                <FaCheck className="text-green-600 text-3xl" />
                            </div>
                            <h2 className="text-2xl font-medium text-gray-800 mb-2">Profile Picture Updated!</h2>
                            <p className="text-gray-600 mb-4">Your new profile picture has been successfully uploaded.</p>
                            {previewUrl && (
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-100 mb-4">
                                    <img
                                        src={previewUrl}
                                        alt="Uploaded profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative mb-6">
                                    <div className={`w-32 h-32 rounded-full overflow-hidden border-2 ${previewUrl ? 'border-blue-200' : 'border-gray-200'}`}>
                                        {previewUrl ? (
                                            <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                                <FaUser className="text-gray-400 text-4xl" />
                                            </div>
                                        )}
                                    </div>
                                    <label
                                        htmlFor="profileImage"
                                        className="absolute bottom-0 right-0 bg-[#045C99] text-white rounded-full p-2 cursor-pointer hover:bg-blue-700 transition"
                                    >
                                        <FaCamera className="text-lg" />
                                        <span className="sr-only">Choose profile picture</span>
                                    </label>
                                </div>

                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                                <button
                                    type="button"
                                    onClick={() => document.getElementById('profileImage').click()}
                                    className="mb-4 text-[#045C99] hover:text-blue-700 font-medium"
                                >
                                    {previewUrl ? 'Change Image' : 'Select Image'}
                                </button>

                                {errorMessage && (
                                    <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
                                )}

                                <p className="text-sm text-gray-500 text-center max-w-xs mb-6">
                                    Please upload a square image for best results. Maximum file size is 5MB.
                                    Supported formats: JPEG, PNG, GIF.
                                </p>

                                <button
                                    type="submit"
                                    disabled={!selectedImage || isUploading}
                                    className={`w-full py-3 px-6 rounded-md font-medium text-white transition duration-300 flex justify-center items-center
                                        ${(!selectedImage || isUploading) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#045C99] hover:bg-blue-700'}`}
                                >
                                    {isUploading ? 'Uploading...' : 'Upload Profile Picture'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => window.history.back()}
                        className="text-[#045C99] hover:text-blue-700 font-medium"
                    >
                        Back to Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadUserPic;