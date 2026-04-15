'use client'
import Link from 'next/link';
import Slider1 from '@/public/slider1.webp'
import Slider2 from '@/public/slider2.webp'
import { useEffect, useState } from "react";
import ImageSlider from './ImageSlider';



const HeroSection = () => {

    const slides = [{
        url: Slider1,
        title: "Round Chair"
    },
    {
        url: Slider2,
        title: "Modern Chair"
    }
    ]

    const [animate, setAnimate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)



    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, [currentIndex]);


    return (

        <div className="">
            <div className="max-w-7xl mx-auto px-5 py-5 md:py-10 grid md:grid-cols-2 gap-12 items-center">

                <div className="containerStyle relative">
                    <ImageSlider slides={slides}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex} />


                </div>


                <div className={`absolute right-50 bottom-20 transition-all duration-700 ${animate
                    ? "opacity-100 -translate-y-15"
                    : "opacity-0 translate-y-10"
                    }`}>
                        
                    <h1 className="text-4xl md:text-6xl text-gray-900 font-semibold leading-tight tracking-tight">
                        Modern Furniture
                        <br />
                        For Minimal Living
                    </h1>

                    <p className="mt-6 text-lg text-gray-700">
                        Discover beautifully designed furniture crafted for comfort.

                    </p>

                    <div className="mt-10">
                        <Link
                            href="/shop"
                            className="inline-block border rounded-sm bg-[#ffae00] text-white px-8 py-3 text-sm font-medium hover:bg-[#ff9900] transition"
                        >
                            Shop Collection
                        </Link>
                    </div>
                </div>




            </div>
        </div>

    );
};

export default HeroSection;