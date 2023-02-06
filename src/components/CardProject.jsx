import styled, { keyframes } from "styled-components"
import github from "../assets/github.svg"
import exterlink from "../assets/external-link.svg"
import LazyLoad from 'react-lazy-load';

import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import js from "../assets/skills/js.svg"
import react from "../assets/skills/react.svg"

const breakAnimation = keyframes`
0%{
    transform: translateX(-150px) scale(0.3);    
    }

   
100%{
    transform: translateX(0) scale(1);
        
    }
` 
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spin = keyframes`
to{
  transform: rotate(360deg);
}
`

const TecnologiesUsedContainer = styled.div`
display: flex;
/* max-width: 180px; */
align-items: center;
justify-content: flex-start !important;
/* margin: 5px 0 0 42px; */
width: 300px;


gap: 14px;
img{
  width: 40px;
  &:nth-child(3) {
  width: 51px;
  }
}



`

const Loader = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
animation: ${spin} 1.2s linear infinite;
position: absolute;
top: 123px;
left: 47px;

&::before, ::after{
  
  content: "";
  position: absolute;
  border-radius: inherit;

  top: 50%;
  left: 50%;
  
}
&::before{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #f0c 0%, #80f 100%);
  transform: translate(-50%, -50%);
}
&::after{
  width: 85%;
  height: 85%;
  background-color: #8c78d2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

`



const Project  = styled.div`

border-radius: 15px;
background-color: #5f4ecd26;
/* background-image: radial-gradient(circle at 78.81% 39.51%, #ffdfff 0, #e1beff 25%, #b89aea 50%, #8c78d2 75%, #817dbf8c 100%); */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 338px;
max-width: 728px;
box-shadow: inset 0px 0px 2px 0px black;
/* box-shadow: 0 0 2.6px 0px black; */
/* min-height: 550px;
max-width: 500px; */


/* min-width: 300px;
min-height: 320px; */
/* opacity: 0.8; */

animation: ${breakAnimation}  .6s  ease-in-out;
/* &:hover{
  opacity: 1;
  transform: scale(1.05);
  transition: .7s;
} */
/* @media (max-width: 968px) {
  opacity: 1;
  }

img{
    border-radius: 15px;

} */

&:hover{
  transform: scale(1.05);
  transition: all .5s;
  
}
h2{
  margin-top: 8px;
  
}

div{
  display: flex;
  align-items: center;
  justify-content: space-around;
}


`
const ImgProject = styled.img`
margin: 15px;
border-radius: 15px;
height: 300px;
object-fit: contain;
width: 85%;

`

const ContainerLinksProject = styled.div`
display: flex;
justify-content: center;
align-items: center;

div{
    width: 100%;
    height: 30px;
    border-radius: 7px;
    padding: 7px;
    background-color: #ced1e8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
}

a{
  text-decoration: none;
  color: #2f253f;
  width: 100%;
  height: 30px;
  border-radius: 7px;
  padding: 10px;
  background-color: #ced1e8;
  margin: 16px 8px 10px 8px;
  display: flex;
    align-items: center;
    justify-content: center;
}

`
const ContainerInfo = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 140px;
h3{
    text-align: center;
    font-size: 25px;
    margin: 8px 0;
}
p{
    text-align: justify;
    padding: 0 10px;
    /* font-size: 20px; */
    font-size: 14px;
}

`

const LazyContain = styled(LazyLoad)`

`


    


export default function CardProject(props){
    return(
        <>
         <LazyContain   threshold={.2} offset={-105}>
         <Project >
         <h2>{props.title}</h2>
          {/* <Loader/> */}
          <ImgProject src={props.image}  />
          
          <TecnologiesUsedContainer>
            
            <img src={html} alt="html"/>
            <img src={css} alt="css"/>
            
          <img src={props.js} alt={props.altjs} />
          
          <img src={props.react} alt={props.altreact} />
          
          </TecnologiesUsedContainer>
          
          
          <ContainerInfo>
          <p style={{fontSize:"17px", padding:"10px 15px"}}>
            {props.description}
          </p>
          {/* <h3>{props.title}</h3> */}
          
          <ContainerLinksProject>
            <a href={props.urlDemo} target="_blank">
              <img src={exterlink} />
              <p>Page</p>
            </a>
            <a href={props.urlRepo} target="_blank">
              <img style={{ width: "22px" }} src={github} />
              <p>Repo</p>
            </a>
          </ContainerLinksProject>
          
          </ContainerInfo>
          
          
        </Project>
        </LazyContain>
        
        </>
    )
}