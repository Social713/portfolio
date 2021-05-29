import React, {useState} from 'react';
import { menuData } from '../data/MenuData';
import Button from './Button';
import {Nav, Logo, MenuBars, NavMenu, NavLinks, NavBtn} from '../styles/NavbarStyles';
import { Link, animateScroll as scroll } from "react-scroll";
import { Gallery1 } from './Gallery1';

const Navbar = ({toggle}) => {
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
            <Logo to='/'>DAVE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index)=>(
                    (<Link activeClass="active" spy={true} smooth={true} offset={-60} duration={1000} to={item.link} key={index}>
                        {item.title}
                    </Link>)
                    
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Me</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;