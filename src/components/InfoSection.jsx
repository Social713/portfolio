import React, {useEffect} from 'react';
import Button from './Button';
import {Section, Container, TextColumn, ImageColumn } from '../styles/InfoSectionStyles';
import AOS from 'aos';
import "aos/dist/aos.css";

const InfoSection = ({info}) => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <Section>
        {info.map((data, index)=>{
        return (
            <Container key={index}>
                <TextColumn data-aos={"fade-down-right"}>
                    <h1>{data.heading}</h1>
                    <p>{data.paragraphOne}</p>
                    <p>{data.paragraphTwo}</p>
                </TextColumn> 
                <ImageColumn data-aos={"fade-down-left"} reverse={data.reverse}>
                    <img src={data.image} alt="" />
                </ImageColumn>      
            </Container>)
    })};
                </Section>
    );
};


export default InfoSection;
