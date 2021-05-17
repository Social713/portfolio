import React, {useState} from 'react';
import { SliderData } from '../data/SliderData';
import GlobalStyles from '../globalStyles';
import Hero from './Hero';
import Navbar from './Navbar';
import Dropdown from './Dropdown';

const App = () => {

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
        </>
    )
}

export default App;