import React, {useState} from 'react';
import Button from './Button';
import { Nav, Logo, MenuBars, NavMenu, NavLinks, NavBtn } from '../styles/NavbarStyles';
import { scrollToAbout, scrollToPortfolio, scrollToTop } from '../functions/scroll';


const Navbar = ({toggle, toggleContactForm }) => {
    // color change on scroll
    const [navbar, setNavbar] = useState('transparent');
    //const [underline, setUnderline] = useState('none');
    const changeOnScroll =()=>{
        window.scrollY >= 875 ? setNavbar('black') : setNavbar('transparent');
        //window.scrollY >= 875 && setUnderline('underline');
    }
    window.addEventListener('scroll', changeOnScroll);
    
    
    
    
    return (
        <Nav style={{background: navbar}}>
            <Logo onClick={scrollToTop}>DAVE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                <NavLinks onClick={scrollToAbout}>
                       About
                    </NavLinks>
                    <NavLinks onClick={scrollToPortfolio}>
                       Portfolio
                    </NavLinks>
            </NavMenu>
            <NavBtn>
                <Button onClick={toggleContactForm} primary='true'>Contact Me</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;