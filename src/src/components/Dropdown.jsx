import React from 'react'
import { DropdownMenu, DropdownContainer, Icon, CloseIcon, DropdownWrappers, DropdownLink, BtnWrap } from '../styles/DropdownMenuStyles';
import Button from './Button';
import { scrollToAbout, scrollToPortfolio } from '../functions/scroll';


const Dropdown = ({isOpen, toggle, toggleContactForm}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrappers>
                <DropdownMenu>

                
                       <DropdownLink onClick={scrollToAbout}>
                        About
                       </DropdownLink>
                       <DropdownLink onClick={scrollToPortfolio}>
                        Portfolio
                       </DropdownLink>
       
                </DropdownMenu>
                <BtnWrap>
                    <Button onClick={toggleContactForm} primary="true" round="true" big="true">Contact Me</Button>
                </BtnWrap>
            </DropdownWrappers>
        </DropdownContainer>
    )
}

export default Dropdown
