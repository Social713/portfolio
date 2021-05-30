import React, {useState} from 'react';
import Button from './Button';
import {Nav, Logo, MenuBars, NavMenu, NavLinks, NavBtn} from '../styles/NavbarStyles';

const Navbar = ({toggle}) => {
    // color change on scroll
    const [navbar, setNavbar] = useState('transparent');
    //const [underline, setUnderline] = useState('none');
    const changeOnScroll =()=>{
        window.scrollY >= 875 ? setNavbar('black') : setNavbar('transparent');
        //window.scrollY >= 875 && setUnderline('underline');
    }
    window.addEventListener('scroll', changeOnScroll);
    
    const scrollToTop=() =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });  
    }
    
    const scrollToAbout=()=>{
        window.scrollTo({
            top:880,
            behavior: "smooth"
        });
    }

    const scrollToPortfolio=()=>{
        window.scrollTo({
            top:1680,
            behavior: "smooth"
        });
    }
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
                <Button to='/contact' primary='true'>Contact Me</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;