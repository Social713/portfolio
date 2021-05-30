import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {CgMenuMotion} from 'react-icons/cg';

export const Nav = styled.nav`
    height:60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`; 

export const NavLink = css`
    color:#fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
`;

export const MenuBars = styled(CgMenuMotion)`
    display: none;
    @media screen and (max-width: 768px){
        display:block;
        height:35px;
        width:40px;
        color:#fff;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 35%);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavLinks = styled(Link)`
    ${NavLink};
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display:none;
`;