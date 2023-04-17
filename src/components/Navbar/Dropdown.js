import React,{useState} from 'react'

import {UL, LI, Links} from './DropdownElemnts'
const Dropdown = (props)=>{
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
        <UL onClick={()=> setDropdown(!dropdown)}>
        {props.List.map((item )=> {
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