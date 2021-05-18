import React, {useState} from 'react';
import { menuData } from '../data/MenuData';
import Button from './Button';
import {Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn} from '../styles/NavbarStyles';


const Navbar = ({toggle}) => {
    // color change on scroll
    const [navbar, setNavbar] = useState('transparent');

    const changeOnScroll =()=>{
        window.scrollY >= 875 ? setNavbar('black') : setNavbar('transparent');
    }
    window.addEventListener('scroll', changeOnScroll);

    return (
        <Nav style={{background: navbar}}>
            <Logo to='/'>DAVE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index)=>(
                    (<NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>)
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Me</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;