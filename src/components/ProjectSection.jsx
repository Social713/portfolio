import React, {useEffect} from 'react';
import {ThirdSection, Container, ImageColumn } from '../styles/ProjectSectionStyles';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Gallery } from './Gallery';

const ProjectSection = ({info}) => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <ThirdSection>
    
            <Container data-aos={"zoom-out-right"} >
                <Gallery />
            </Container>

        </ThirdSection>);
};


export default ProjectSection;
