import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ServicesContainer = styled.div`
display: flex;
padding: 35px 0;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: 1100;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1300px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;
export const LinkServices= styled(Link)`
display: flex;
flex-direction: flex-start;
align-items: center;
text-decoration:none;
color: #000;
`

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesIcon = styled.img`
height: 100px;
width: 100px;
margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;
export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`;
export const WrapperText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 190px;
`;
export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`