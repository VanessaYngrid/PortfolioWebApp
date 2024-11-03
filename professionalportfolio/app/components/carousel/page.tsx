'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Corrected import for Autoplay
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from 'next/image';

const slides = [
    {
        image: '/images/slide1.jpg',
        text: 'Harnessing technology to solve real-world problems through innovative solutions.',
    },
    {
        image: '/images/slide2.jpg',
        text: 'Collaborating effectively in agile teams to deliver high-quality products.',
    },
    {
        image: '/images/slide3.jpg',
        text: 'Continuously improving skills to stay ahead in the fast-paced tech landscape.',
    },
];

export default function Carousel() {
    
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }} // Adjust autoplay delay
                loop={true} // Enable looping
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative flex flex-col items-center justify-center h-60 bg-black">
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover" 
                                    className="opacity-50"
                                />
                            </div>
                            <div className="relative z-10 text-center text-white text-3xl font-normal">
                                <h1 className="mt-2">{slide.text}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
