import React, {useEffect} from 'react';
import Button from './Button';
import {Section, Container, ColumnLeft, ColumnRight } from '../styles/InfoSectionStyles';

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    
    return (
        <Section>
            <Container>
                    <ColumnLeft>
                        <h1>{heading}</h1>
                        <p>{paragraphOne}</p>
                        <p>{paragraphTwo}</p>
                    </ColumnLeft> 
                    <ColumnRight reverse={reverse}>
                        <img src={image} alt="" />
                    </ColumnRight>
            </Container>
        </Section>
    );
};

export default InfoSection;
