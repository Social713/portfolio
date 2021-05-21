import React, {useEffect} from 'react';
import Button from './Button';
import {Section, Container, TextColumn, ImageColumn } from '../styles/InfoSectionStyles';
import AOS from 'aos';
import "aos/dist/aos.css";

const InfoSection2 = ({info}) => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <Section>
        {info.map((data, index)=>{
        return (
            <Container key={index} style={{paddingTop: 0, marginTop:0}}>
                <ImageColumn data-aos={"fade-down-right"} reverse={data.reverse}>
                    <img src={data.image} alt="" />
                </ImageColumn>      
                <TextColumn data-aos={"fade-down-left"}>
                    <h1>{data.heading}</h1>
                    <p>{data.paragraphOne}</p>
                    <p>{data.paragraphTwo}</p>
                </TextColumn> 
            </Container>)
    })};
                </Section>
    );
};


export default InfoSection2;
