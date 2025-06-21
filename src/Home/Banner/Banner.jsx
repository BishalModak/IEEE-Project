import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';

const Banner = () => {


    const overlayText = (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40 px-4">
            <h2 className="text-5xl md:text-6xl font-bold font-['Roboto'] mb-4">
                <span className="text-blue-300"> IEEE</span> LU SB Chapter
            </h2>
            <p className="text-base w-[80%] md:text-lg font-['Roboto'] leading-relaxed mb-6">
                The Outstanding Student Branch with its set of skills and enthusiastic members thrives <br />
                on achievements. Expand your networking and leadership competencies with the <br />
                blooming mindset of individuals. Our Achievements
            </p>
            <button className="px-6 py-2 bg-[#045C99] text-white font-semibold rounded-lg flex items-center gap-2">
                <i className="fa-solid fa-magnifying-glass"></i> Read More
            </button>
        </div>
    );

    return (
        // give this to tahsin
        <div className="relative mt-[5px]  h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper relative h-full"
            >
                {[
                    "ResearchBootcamp.jpg", "timeBanner.png", "LandscapeImg.jpg", "ArafImg.jpg",
                    "gellary1.jpg", "gellary3.jpg", "gellary7.jpg",
                    "eventbaner.jpg", "about..jpg"
                ].map((img, index) => (
                    <SwiperSlide key={index} className="relative h-full">         <div className="absolute inset-0">
                        <img
                            src={`/img/${img}`}
                            alt={`IEEE Banner ${index + 1}`}
                            className=" h-[400px] md:h-[500px] lg:h-[600px] object-fit"
                            loading="eager"
                        />
                    </div>
                        {overlayText}
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>

    )
};

export default Banner;