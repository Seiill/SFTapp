import styled from 'styled-components'

import {Link} from 'react-router-dom'
export const LI = styled.li`
display: block;
width: 200px;
height: 100%;
text-decoration: none;
color: white;
padding: 16px;

`
export const Links = styled(Link)`
text-decoration: none;
color: white;
`
export const UL = styled.ul`

width: 10rem;
position: absolute;
top: 80px;
list-style: none;
text-align: start;


${LI} {
    background: #BBBBBB;
    cursor: pointer;
    &:hover{
        background: #EC6C3D;
    
    }
}
`
