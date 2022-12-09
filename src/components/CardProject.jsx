import styled, { keyframes } from "styled-components"
import github from "../assets/github.svg"
import exterlink from "../assets/external-link.svg"
import LazyLoad from 'react-lazy-load';


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
position: relative;
border-radius: 15px;
background-image: radial-gradient(circle at 78.81% 39.51%, #ffdfff 0, #e1beff 25%, #b89aea 50%, #8c78d2 75%, #817dbf8c 100%);
display: flex;
min-width: 300px;
min-height: 320px;
opacity: 0.8;
cursor: pointer;
animation: ${breakAnimation}  .6s  ease-in-out;
&:hover{
  opacity: 1;
  transform: scale(1.05);
  transition: .7s;
}
@media (max-width: 968px) {
  opacity: 1;
  }

img{
    border-radius: 15px;

}


`
const ImgProject = styled.img`
min-height: 320px;
max-height: 320px;
min-width: 152px;
object-fit: fill;
z-index: 10;


`

const ContainerLinksProject = styled.div`
display: flex;
justify-content: center;
align-items: center;

div{
    width: 75px;
    height: 30px;
    border-radius: 10px;
    padding: 5px;
    background-color: #ced1e8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
}

a{
  text-decoration: none;
  color: #2f253f;
  width: 72px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  background-color: #ced1e8;
  margin: 16px 8px 0 8px;
  
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
          
          <Loader/>
          
          
          <ImgProject src={props.image}  />
          <ContainerInfo>
          <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
          <ContainerLinksProject>
            <a href={props.urlDemo} target="_blank">
              <img src={exterlink} />
              <p>Demo</p>
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