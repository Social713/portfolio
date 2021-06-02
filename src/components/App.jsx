import React, {useState} from 'react';
import { SliderData } from '../data/SliderData';
import GlobalStyles from '../globalStyles';
import Hero from './Hero';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import InfoSection1 from './InfoSection1';
import { InfoData, InfoData2 } from '../data/InfoData';
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
        console.log('clicked')
        setContactOpen(!contactOpen);
    };

    return (
        <>
            <GlobalStyles />
            <Navbar toggle={toggle} toggleContactForm={toggleContactForm} />
            <ContactForm contactOpen={contactOpen} toggleContactForm={toggleContactForm} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData}/>
            <InfoSection1 info = {InfoData} />
            <PortfolioSection info = {InfoData2}  />
            <Footer />
        </>
    )
}

export default App;