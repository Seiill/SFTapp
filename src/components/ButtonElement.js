import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
text-decoration: none;
border-radius: 50px;
background: ${({primary})=> (primary ? '#EC6C3D' : '#696968')};
white-space: nowrap;
padding: ${({big})=> (big  ? '14px 48px' : '12px 30px') };
color: ${({dark})=> (dark  ? '#010606' : '#EC6C3D') };
font-size: ${({fontBig})=> (fontBig  ? '20px' : '16px') };
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
font-weight: 600;
margin-bottom: 2rem;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#fff' : '#01BF71')}; ;
}
`
