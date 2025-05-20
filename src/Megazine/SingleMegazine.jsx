import { useLoaderData, useParams } from "react-router-dom";



const SingleMegazine = () => {

    const news = useLoaderData();

    const { id } = useParams();
    const singleMegazine = news.find(single => single.id == id);



    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={singleMegazine?.image}></img>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{singleMegazine?.title}</h1>

                        <p class="mb-4 leading-relaxed">Description: {singleMegazine?.description}</p>
                        
                        <a href="#">Link: {singleMegazine?.link}</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleMegazine;