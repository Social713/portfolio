import React, {useState, useRef, useEffect} from 'react';
import Button from './Button';
import {HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, Arrow, SliderButtons, PrevArrow, NextArrow } from '../styles/HeroSlideStyles';


const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(()=>{
    //     const nextSlide = () =>{
    //         setCurrent(current => (current === length - 1 ? 0 : current +1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 3000);

    //     return () => {
    //         if (timeout.current){
    //             clearTimeout(timeout.current);
    //         }
    //     };
    // }, [current, length]);

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <HeroSection id="slideshow">
            <HeroWrapper>
                {slides.map((slide, index)=>{
                    return (
                        <HeroSlide key={index}>
                        {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.name}</h1>
                                    <p>{slide.title}</p>
                                    <Button to={slide.path} primary='true' css={`max-width: 160px;`}>
                                    {slide.label} <Arrow />
                                    </Button>   
                                </HeroContent>
                            </HeroSlider>
                        )}
                            
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
};

export default Hero;


// <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />