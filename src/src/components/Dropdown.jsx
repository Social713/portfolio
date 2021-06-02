import React from 'react'
import { menuData } from '../data/MenuData'; 
import { DropdownMenu, DropdownContainer, Icon, CloseIcon, DropdownWrappers, DropdownLink, BtnWrap } from '../styles/DropdownMenuStyles';
import Button from './Button';


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrappers>
                <DropdownMenu>
                {menuData.map((item, index)=>{
                   return (
                       <DropdownLink to={item.link} key={index}>
                        {item.title}
                       </DropdownLink>
                    )})}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">Contact Me</Button>
                </BtnWrap>
            </DropdownWrappers>
        </DropdownContainer>
    )
}

export default Dropdown
