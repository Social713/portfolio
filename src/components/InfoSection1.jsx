import React, {useEffect} from 'react';
import Button from './Button';
import {Section, Container, TextColumn, ImageColumn, ReactIcon, NodeIcon, JQueryIcon, MongoIcon, HtmlIcon, LogoTitle, JsIcon, CssIcon } from '../styles/InfoSectionStyles';
import AOS from 'aos';
import "aos/dist/aos.css";


const InfoSection1 = ({info}) => {
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
                    <img src={data.image} alt="" />
                    <h1>{data.heading}</h1>
                    <p>{data.paragraphOne}</p>
                    <p>{data.paragraphTwo}</p>
                </TextColumn> 
                <ImageColumn data-aos={"fade-down-left"} reverse={data.reverse}>
                <LogoTitle>
                    <h1>Experience in:</h1>
                <JsIcon />
                <ReactIcon />
                <NodeIcon />
                <MongoIcon />
                <HtmlIcon />
                <CssIcon />
                <JQueryIcon />
                </LogoTitle>
                </ImageColumn>      
            </Container>)
    })};
                </Section>
    );
};


export default InfoSection1;
