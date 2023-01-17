import styled from 'styled-components'
export const Container = styled.div`
max-width: 100vw;
height: 100vh;
display: flex;
position: relative;
`
export const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:#EF6C45;
border-radius: 50%;
display: flex;
align-items: center; 
justify-content: center;
position: absolute;
top:0;
bottom:0;
margin: auto;
left: ${props=> props.direction === 'left' && '10px'};
right:${props=> props.direction === 'right' && '10px'};
cursor: pointer;
opacity: .5;
z-index: 2;
`
export const Wrapper = styled.div`
height:100%;
display: flex;
transform: translateX(${props=> props.slideIndex * -100}vw);

`
export const Slide = styled.div`
width: 100vw;
height:100vh;
display: flex;
align-items: center;

`