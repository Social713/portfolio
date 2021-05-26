import React, {useState} from 'react';
import { SliderData } from '../data/SliderData';
import GlobalStyles from '../globalStyles';
import Hero from './Hero';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import InfoSection1 from './InfoSection1';
import { InfoData, InfoData2 } from '../data/InfoData';
import { Footer } from './Footer';
import { Gallery1 } from './Gallery1';


const App = () => {

    // For the dropdown menu
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <GlobalStyles />
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData}/>
            <InfoSection1 info = {InfoData} />
            <Gallery1 info = {InfoData2}  />
            <Footer />
        </>
    )
}

export default App;