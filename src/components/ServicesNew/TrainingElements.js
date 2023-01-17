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
display: flex;
flex-direction: column;
background-color:${(props)=>props.color};
align-items: center;
justify-content: center;
margin: 16px 5px;
border-radius: 30px;
`
         