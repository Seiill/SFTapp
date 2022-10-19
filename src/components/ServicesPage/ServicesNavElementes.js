import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
margin-top: 70px;
width: 100%;
display : flex;
flex-wrap: wrap;
justify-content: center;
z-index:-1;
`
export const ServicesNavi = styled.ul`
display:flex;
width: 100%;
background-color: black;
justify-content: center;
list-style: none;


`
export const NavItem = styled.li`
width: 100%;
/* background-color:gray; */
display:flex;
flex-wrap: wrap;
justify-content: center;
padding: 10px 0;
column-gap : 20px;
row-gap: 20px;

`
export const ServicesLink = styled(Link)`
width: auto;
font-size: .8rem;
font-weight: 600;
text-decoration: none;
color: white;
justify-content: space-between;
padding:0px 20px;
text-transform: uppercase;
transition: all 0.2s ease-in-out;

&:hover {
    background-color: #EC6C3D;
    border-radius: 15px;
    color: #fff
}

`
export const ServiceIcon = styled.img`
width: 70%;
`