import React from 'react';
import styled from 'styled-components';
import SiLinkedin from 'react-icons/si';

const Foot = styled.div`
    height: 75px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    z-index: 100;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-top: 5%;
    background-color: black;

    p{
        padding-top: 20px;
        color: grey;
        font-size: 14px;
    }
`;

export const Footer = () => {
    let date = new Date().getFullYear()
    return (
        <Foot>
            <p>DAVID ROGERS © {date}</p>
        </Foot>
    )
}


