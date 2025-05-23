import { useState } from 'react';
import { toast } from 'react-toastify';

const AddNews = () => {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get form data
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const description = form.description.value;
        const date = form.date.value;
        const image = form.image.files[0];

        // Create news object based on the JSON structure
        const newsItem = {
            title,
            author,
            desc: description,
            date,
            img: image ? URL.createObjectURL(image) : null, // In a real app, you'd upload to server
            tags: [...tags]
        };

        // Here you would normally send this data to a server
        console.log("News item to be added:", newsItem);

        // Show success toast
        toast.success("News has been submitted for review!");

        // Reset form
        form.reset();
        setTags([]);
        setTagInput('');
        setImagePreview(null);
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045C99]   -600 mb-2">Add News</h1>
                <p className="text-center text-gray-600 mb-10">Submit news articles to our platform. Please fill in all required information carefully.</p>

                <div className="bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">News Information</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* News Title */}
                        <div>
                            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">News Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter news title"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Author Name */}
                        <div>
                            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author Name</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                placeholder="Enter author name"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Publication Date */}
                        <div>
                            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Publication Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* News Description */}
                        <div>
                            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">News Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="6"
                                placeholder="Enter a detailed description of the news article..."
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Tags</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Add a tag (e.g., Technology, Workshop)"
                                    className="flex-1 px-4 py-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                />
                                <button
                                    type="button"
                                    className="px-4 py-3 bg-[#045C99]    text-white rounded-r-md hover:bg-blue-700"
                                    onClick={handleAddTag}
                                >
                                    Add
                                </button>
                            </div>

                            {/* Tags Display */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-blue-100 text-[#045C99]   -700 px-3 py-1 rounded-full flex items-center"
                                    >
                                        <span>{tag}</span>
                                        <button
                                            type="button"
                                            className="ml-2 text-[#045C99]   -700 hover:text-[#045C99]   -900 focus:outline-none"
                                            onClick={() => handleRemoveTag(tag)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                                {tags.length === 0 && (
                                    <p className="text-gray-500 text-sm">No tags added yet. Add relevant tags to categorize your news.</p>
                                )}
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Featured Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-[#045C99]   -700
                                hover:file:bg-blue-100"
                                onChange={handleImageChange}
                                required
                            />

                            {/* Image Preview */}
                            {imagePreview && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full max-h-64 object-contain border rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#045C99]     text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Submit News Article
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Information */}
                <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-[#045C99]   -800 mb-2">Submission Guidelines</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Ensure your news article is relevant to IEEE activities or technology trends</li>
                        <li>Provide accurate and complete information</li>
                        <li>Upload a high-quality image that relates to your news article</li>
                        <li>Add relevant tags to improve searchability</li>
                        <li>All submissions will be reviewed before publication</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddNews;