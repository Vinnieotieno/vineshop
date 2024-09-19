import React, { useState, useEffect } from 'react';
import './Slider.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './slider-data';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        const newSlide = currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    // Auto-scrolling functionality
    useEffect(() => {
        const autoScroll = true;
        let slideInterval;

        if (autoScroll) {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide;

                return (
                    <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                        {index === currentSlide && (
                            <>
                                <img src={image} alt={heading} />
                                <div className="content">
                                    <span className="span1"></span>
                                    <span className="span2"></span>
                                    <span className="span3"></span>
                                    <span className="span4"></span>
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <button className="--btn --btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
