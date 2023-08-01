import styled from "styled-components";
export const ContainerTrainings = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media screen and (max-width: 850px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
export const TrainingType = styled.div`
width: 42%;
min-width: 370px;
display: flex;
flex-direction: column;
background:linear-gradient(118deg,${props => props.color1} 0%, 
${props => props.color1} 37%, ${props => props.color2} 37%, 
${props => props.color2} 100%);
align-items: center;
justify-content: center;
margin: 16px 5px;
border-radius: 3px;
`
export const CardsTraingns = styled.section`
width: 100vw;
display: flex;
flex-wrap: wrap;
gap: 22px 16px;
align-items: center;
justify-content: center;
`
export const CardOut = styled.div`
position: relative;
width: 25%;
min-width: 380px;
display: flex;
background-color: #EC6C3D;
height: 475px;
`
export const CardContent = styled.div`
margin-top: 2%;
margin-left: 4%;
width: 100%;
display: flex;
flex-direction: column;
background-color: #f3f3f3;
height:475px;
`
export const ImageCard = styled.img`
height: 59%;
object-fit: cover;
bottom: 3%;
`
export const ULL = styled.ul`
padding-bottom: 1rem;
list-style: none;
`
export const Pr = styled.div`
padding: 0;
display: flex;
flex-direction: column;
font-size: 1rem;

`
