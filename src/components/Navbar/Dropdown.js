import React,{useState} from 'react'
import {navItem} from './navItem' 

import {UL, LI, Links} from './DropdownElemnts'
const Dropdown = ()=>{
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
        <UL onClick={()=> setDropdown(!dropdown)}>
        {navItem.map((item )=> {
            return(
                <LI key={item.id}>
                    <Links to={item.path} onClick={()=> setDropdown(false)}>{item.title}</Links>
                </LI>
            )
        })
        }</UL>
        </>
    )
}

export default Dropdown