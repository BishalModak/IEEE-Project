import { useLoaderData, useParams } from "react-router-dom";


const SingleNews = () => {

    const news = useLoaderData();

    const { id } = useParams();
    const singleNews = news.find(single => single.id == id);



    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={singleNews.img}></img>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{singleNews.title}</h1>
                            
                        

                        <p class="mb-2 leading-relaxed">{singleNews.desc}</p>
                        <p className="text-lg">Author: {singleNews.author}</p>
                        <div className="flex  items-center mt-2" >
                        {singleNews.tags.map((tag, i) => (
                            
                                <span key={i} className="text-sm text-gray-500 mr-2">#{tag}</span>
                            
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleNews;