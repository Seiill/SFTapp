import styled from 'styled-components';
import img from '../../images/mfparallax.jpeg'
export const Container = styled.div`
background: #fff;
`
export const ParallaxImg = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-content: flex-end;
justify-content: center;
align-items: center;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${ props => props.img});
min-height: 80vh;
`
export const TitleContainer = styled.div`
max-width: 400px;
min-width: 200px;
position: absolute;
/* top:calc(50% - 100px) */
display: flex;
flex-direction: column-reverse;
justify-content: space-around;
align-items: center;
background: rgba(255, 187, 79, 0.1);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.4px);
-webkit-backdrop-filter: blur(1.4px);
border: 1px solid rgba(255, 187, 79, 0.17);

`

export const Icon = styled.img`
width: 100px;
`
export const Section = styled.section`
height: 100%;
`

export const ContainerServiceConsoulting = styled.div`
display:flex;
flex-direction: column;
align-content: center;
`
export const ContainerSection = styled.div`
width: 100%;
height:auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 0 1rem 0;
`
export const DescriptionPrincipal = styled.p`
min-width: 300px;
max-width: 40%;
color: #000;
font-size: 1.2rem;
font-weight: 400;
margin: 4rem 2rem 4rem 2rem;
text-align:center;
`
export const Description = styled.p`
min-width: 300px;
max-width: 40%;
color: #000;
font-size: 18px;
font-weight: 400;
margin: 0rem 2rem 2rem 2rem;

`
export const Title = styled.h1`
color: #ec6c3d;
text-align: center;
font-weight: 700;
letter-spacing: 0.2rem;
text-transform: uppercase; 
padding: 2rem 0; 
`
export const TitleList = styled.h1`
color: #ec6c3d;
text-align: left;
font-weight: 700;
letter-spacing: 0.2rem;
text-transform: uppercase;
 
padding: 1rem 0; 
`
export const ContainerDesc= styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: space-around;
margin-bottom: 1rem;
`
/* export const ImageContainer = styled.div`
max-width: 30%;
margin-top: 1rem;
display: grid;
align-items: center;

` */
/* export const Image = styled.img`
width: 100%;
` */

export const ListContainer = styled.div`
display:flex;
height: 80vh;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
padding: .5rem 0 .5rem 0;
`
export const Listitem = styled.div`
    min-width: 300px;
    width: 40%;
    padding: 1rem 0 1rem 0;
`
export const UL = styled.ul`
`
export const Li = styled.li`
font-size: 18px;
color: #000;
`
export const ImageList = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
box-shadow: 1px 1px 3px rgba(12, 0, 9, 1);
`
export const ImageContainer = styled.div`
width: 40%;
min-width: 300px;
padding: 1rem 0 1rem 0;
display: flex;
align-items: center;
justify-content: center;

`