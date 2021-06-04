import React, {useState} from 'react';
import { SliderData } from '../data/SliderData';
import GlobalStyles from '../globalStyles';
import WelcomeSlides from './WelcomeSlides';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import AboutMe from './AboutMe';
import { InfoData, PortfolioData } from '../data/PortfolioData';
import { Footer } from './Footer';
import { PortfolioSection } from './PortfolioSection';
import ContactForm from './ContactForm';


const App = () => {

    // For the dropdown menu
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // For the contact form
    const [contactOpen, setContactOpen] = useState(false);

    const toggleContactForm = () => {
        setContactOpen(!contactOpen);
    };

    return (
        <>
            <GlobalStyles />
            <Navbar toggle={toggle} toggleContactForm={toggleContactForm} />
            <ContactForm contactOpen={contactOpen} toggleContactForm={toggleContactForm} />
            <Dropdown isOpen={isOpen} toggle={toggle} toggleContactForm={toggleContactForm} />
            <WelcomeSlides slides={SliderData}/>
            <AboutMe info = {InfoData} />
            <PortfolioSection info = {PortfolioData} />
            <Footer />
        </>
    )
}

export default App;