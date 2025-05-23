import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const SingleNews = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const singleNews = news.find(single => single.id == id);
    const [isBookmarked, setIsBookmarked] = useState(false);

    // If news article is not found
    if (!singleNews) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">News Article Not Found</h1>
                <p className="text-lg text-gray-700">The news article you're looking for doesn't exist.</p>
                <a href="/news" className="mt-6 px-6 py-2 bg-[#045C99]  text-white rounded-md hover:bg-blue-700 transition duration-300">
                    Return to News
                </a>
            </div>
        );
    }

    // Format the date nicely
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

    // Generate random view count for UI display
    const viewCount = Math.floor(Math.random() * 1000) + 500;

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Hero Banner */}
            <div className="relative w-full h-[40vh] md:h-[50vh] bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${singleNews.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-end pb-10">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {singleNews.tags.map((tag, i) => (
                                <span key={i} className="bg-[#045C99]  text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            {singleNews.title}
                        </h1>
                        <div className="flex items-center text-white/80 text-sm md:text-base">
                            <span>{formatDate(singleNews.date)}</span>
                            <span className="mx-2">•</span>
                            <span>{calculateReadTime(singleNews.desc)}</span>
                            <span className="mx-2">•</span>
                            <span>{viewCount} views</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 mt-10 mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <main className="lg:col-span-8 bg-white rounded-xl shadow-md p-6 md:p-10">
                        {/* Author Info */}
                        <div className="flex items-center mb-8 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-blue-600 font-bold text-lg">
                                    {singleNews.author.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    {singleNews.author}
                                </h3>
                                <p className="text-sm text-gray-500">IEEE LU Student Branch</p>
                            </div>
                            <button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`ml-auto p-2 rounded-full transition-colors ${isBookmarked ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-100'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </button>
                        </div>

                        {/* Featured Image */}
                        <div className="mb-8">
                            <img
                                src={singleNews.img}
                                alt={singleNews.title}
                                className="w-full h-auto rounded-lg shadow-sm"
                            />
                        </div>

                        {/* Article Content */}
                        <article className="prose lg:prose-lg max-w-none">
                            <p className="text-gray-800 leading-relaxed text-lg">
                                {singleNews.desc}
                            </p>

                            {/* Additional content - we're generating some dummy paragraphs since the JSON only has one description */}
                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Highlights from the Workshop</h2>
                            <p className="text-gray-800 leading-relaxed">
                                The IEEE LU Student Branch recently hosted an immersive robotics workshop where participants gained hands-on experience with cutting-edge technology. The event brought together experts from industry and academia, offering unique insights into the rapidly evolving field of robotics.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                <p className="italic text-blue-800">
                                    "The workshop provided an exceptional opportunity for students to bridge the gap between theoretical knowledge and practical application in robotics."
                                </p>
                            </div>

                            <p className="text-gray-800 leading-relaxed">
                                During the day-long session, attendees worked in small teams to design, build, and program simple robotic systems. The workshop utilized Arduino-based platforms equipped with various sensors and actuators, allowing participants to create robots capable of responding to environmental stimuli.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Workshop Outcomes</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>Participants successfully built and programmed autonomous navigation systems</li>
                                <li>Live demonstrations of object recognition using computer vision techniques</li>
                                <li>Collaborative problem-solving exercises focused on real-world applications</li>
                                <li>Networking opportunities with industry professionals</li>
                            </ul>

                            <p className="text-gray-800 leading-relaxed mt-6">
                                The event concluded with a showcase where teams presented their completed projects, demonstrating capabilities ranging from line-following robots to simple robotic arms capable of picking up and sorting objects.
                            </p>
                        </article>

                        {/* Social Sharing */}
                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    {singleNews.tags.map((tag, i) => (
                                        <span key={i} className="text-sm text-gray-500">#{tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                            <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                            <div className="flex items-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-bold text-2xl">
                                        {singleNews.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{singleNews.author}</h4>
                                    <p className="text-sm text-gray-500">Professor, Department of CSE</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4">
                                An experienced researcher and educator in the field of robotics and automation, with a focus on developing innovative solutions for industrial applications.
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
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="block group">
                                    <div className="flex gap-3">
                                        <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/img/blog2.png" alt="Related Article" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 group-hover:bg-[#045C99]  transition-colors">AI in Modern Robotics Applications</h4>
                                            <p className="text-xs text-gray-500 mt-1">May 10, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex gap-3">
                                        <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/img/rn1.jpg" alt="Related Article" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 group-hover:bg-[#045C99]  transition-colors">Upcoming STEM Education Initiatives</h4>
                                            <p className="text-xs text-gray-500 mt-1">April 28, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="block group">
                                    <div className="flex gap-3">
                                        <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden">
                                            <img src="/img/rn2.jpg" alt="Related Article" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-800 group-hover:bg-[#045C99]  transition-colors">IEEE Annual Conference Highlights</h4>
                                            <p className="text-xs text-gray-500 mt-1">April 15, 2025</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="/news" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 inline-block">
                                View All News
                            </a>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-gradient-to-br bg-[#045C99] rounded-xl shadow-md p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                            <p className="text-blue-100 mb-4">Stay updated with the latest news and events from IEEE LU Student Branch</p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-white text-blue-600 font-medium py-2 rounded-md hover:bg-blue-50 transition-colors"
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

export default SingleNews;