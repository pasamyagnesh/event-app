import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { gsap } from 'gsap';

function Epistemicon() {
    const slides = [
        {
            url: 'EPISTEMICONPOSTER.jpg'
        },
        {
            url: 'QUIZPOSTER.jpg'
        },
        
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);

    
    const animateSlide = (newIndex) => {
        gsap.to(slideRef.current, {
            x: -newIndex * 100 + '%', 
            duration: 0.3, 
            ease: "power3.inOut", 
            snap: { x: 1 }, 
        });
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        animateSlide(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        animateSlide(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        animateSlide(slideIndex);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval); 
    }, [currentIndex]);

    return (
        <div className='md:max-w-[1400px]  h-[400px] md:h-[680px] w-full m-auto  relative group pb-16 px-4 overflow-hidden'>
            {/* Slide container with snapping */}
            <div
                ref={slideRef}
                className='flex w-full h-full transition-all duration-700 ease-in-out transform'
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className='flex-shrink-0 w-full h-full bg-center bg-cover rounded-2xl'
                        style={{ backgroundImage: `url(${slide.url})` }}
                    />
                ))}
            </div>

            {/* Left Arrow */}
            <div
                className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer text-white'
                onClick={prevSlide}
            >
                <BsChevronCompactLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div
                className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer text-white'
                onClick={nextSlide}
            >
                <BsChevronCompactRight size={30} />
            </div>

            {/* Slide indicators */}
            <div className='flex justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-gray-500'}`}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Epistemicon;
