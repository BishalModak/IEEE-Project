import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';

const SingleBlog = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(item => item.id == id);
    const [isLiked, setIsLiked] = useState(false);
 

    // If blog is not found
    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Blog Not Found</h1>
                <p className="text-lg text-gray-700">The blog article you're looking for doesn't exist.</p>
                <a href="/blog" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                    Return to Blogs
                </a>
            </div>
        );
    }

    // Format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Calculate read time (roughly 200 words per minute)
    const calculateReadTime = (text) => {
        const words = text.split(/\s+/).length;
        const readTime = Math.ceil(words / 200);
        return readTime === 1 ? "1 min read" : `${readTime} mins read`;
    };

    // Generate random comment data
    const generateComments = () => {
        const commenters = [
            { name: "Tahmid Hasan", img: "/img/tahmid.jpg", role: "IEEE Member" },
            { name: "Nabila Rahman", img: "/img/user.png", role: "Student Member" },
            { name: "Mahfuz Alam", img: "/img/mahfuz.jpg", role: "IEEE Volunteer" }
        ];

        return [1, 2].map((_, i) => ({
            id: i,
            commenter: commenters[i % commenters.length],
            text: i === 0 ?
                "This was an incredibly informative article. I particularly enjoyed the insights on practical applications." :
                "Great content! Looking forward to more articles on this topic.",
            date: "May 22, 2025",
            likes: Math.floor(Math.random() * 10) + 1
        }));
    };

    const comments = generateComments();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Banner */}
            <div className="relative w-full mt-1 h-[50vh] bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${blog.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-end pb-12">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {blog.tags.map((tag, i) => (
                                <span key={i} className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center text-white/80 text-sm">
                            <span>{formatDate(blog.date)}</span>
                            <span className="mx-2">•</span>
                            <span>{calculateReadTime(blog.desc)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Article Content */}
                    <main className="lg:col-span-8">
                        {/* Author Info */}
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-blue-600 font-bold text-lg">
                                    {blog.author.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    {blog.author}
                                </h3>
                                <p className="text-sm text-gray-500 flex items-center">
                                    <span>IEEE Member</span>
                                    <span className="mx-2">•</span>
                                    <span>{formatDate(blog.date)}</span>
                                </p>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <article className="prose lg:prose-lg max-w-none">
                            <div className="mb-8">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>

                            {/* First section - intro */}
                            <p className="text-lg leading-relaxed text-gray-800 mb-6">
                                {blog.desc}
                            </p>

                            {/* Generated content for demonstration */}
                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Insights from the {blog.tags[0]} Community</h2>

                            <p className="text-gray-800 leading-relaxed mb-6">
                                The {blog.tags[0]} field continues to evolve at an unprecedented pace, with new developments emerging almost daily. Industry experts and academic researchers alike are contributing to a rapidly expanding body of knowledge, creating opportunities for innovation across sectors.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                <p className="italic text-blue-800">
                                    "The convergence of {blog.tags[0]} with other emerging technologies is creating entirely new possibilities that were unimaginable just a few years ago." — {blog.author}
                                </p>
                            </div>

                            <p className="text-gray-800 leading-relaxed mb-6">
                                As we look toward future developments, several key trends are emerging that will likely shape the landscape of {blog.tags[0]} in the coming years. These include increased integration with artificial intelligence, more accessible platforms for non-specialists, and greater emphasis on ethical considerations.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Important Developments</h3>

                            <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                                <li>Enhanced collaboration between academia and industry partners</li>
                                <li>New frameworks for implementing {blog.tags[0]} solutions at scale</li>
                                <li>Increased focus on sustainability and environmental impact</li>
                                <li>Greater emphasis on accessibility and inclusivity in technology design</li>
                            </ul>

                            <p className="text-gray-800 leading-relaxed mt-6">
                                IEEE Leading University Student Branch remains committed to providing platforms for knowledge sharing and skill development in these emerging areas, with more workshops and seminars planned for the coming months.
                            </p>
                        </article>

                        {/* Article Footer */}
                        <div className="border-t border-b border-gray-200 py-6 my-8">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {blog.tags.map((tag, i) => (
                                        <span key={i} className="text-sm text-gray-500">#{tag}</span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-gray-500'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>{isLiked ? 42 : 41}</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span>{comments.length}</span>
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* About Author */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-3">About the Author</h3>
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold text-2xl">
                                        {blog.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{blog.author}</h4>
                                    <p className="text-sm text-gray-500">IEEE Member</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                An expert in {blog.tags.join(", ")} with a passion for sharing knowledge and advancing technology in these fields. Actively contributes to IEEE research and community initiatives.
                            </p>
                            <div className="flex gap-3 mt-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex gap-3">
                                        <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/img/blog2.png" alt="Related Article" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">The Impact of {blog.tags[0]} on Modern Industry</h4>
                                            <p className="text-xs text-gray-500 mt-1">May 20, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex gap-3">
                                        <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/img/blog1.png" alt="Related Article" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Emerging Trends in {blog.tags[1]} for 2025</h4>
                                            <p className="text-xs text-gray-500 mt-1">May 18, 2025</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Categories</h3>
                            <div className="space-y-2">
                                {["Technology", "Robotics", "AI", "Machine Learning", "IEEE Events", "Workshops"].map((category, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="block py-2 px-3 rounded-md hover:bg-gray-100 text-gray-700 text-sm"
                                    >
                                        {category}
                                        <span className="float-right text-gray-500">{Math.floor(Math.random() * 20) + 5}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-6 text-white">
                            <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                            <p className="text-blue-100 text-sm mb-4">Get the latest IEEE news, events, and articles delivered to your inbox</p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 py-2 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-white text-blue-600 font-medium py-2 text-sm rounded-md hover:bg-blue-50 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;