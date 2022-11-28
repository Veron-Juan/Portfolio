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



const Project  = styled.div`
width: 380px;
min-height: 360px;
border-radius: 15px;
margin: 35px auto;
background-image: radial-gradient(circle at 78.81% 39.51%, #ffdfff 0, #e1beff 25%, #b89aea 50%, #8c78d2 75%, #817dbf8c 100%);
display: flex;
flex-direction: column;
animation: ${breakAnimation}  .6s  ease-in-out;



h3{
    text-align: center;
    font-size: 25px;
    margin: 8px 0;
}
p{
    text-align: justify;
    padding: 0 10px;
    font-size: 20px;

}
img{
    border-radius: 15px;
}

`
const ContainerLinksProject = styled.div`
display: flex;
justify-content: center;
align-items: center;

div{
    width: 120px;
    height: 30px;
    border-radius: 10px;
    padding: 5px;
    background-color: #ced1e8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 18px;
}

a{
  text-decoration: none;
  color: #2f253f;
}
`


const LazyContain = styled(LazyLoad)`

margin: 10px auto;
max-height: 465px;


`


    


export default function CardProject(props){
    return(
        <>
         <LazyContain   width={400}  threshold={.2} offset={-105}>
         <Project>
          <img  src={props.image} />
          <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
          <ContainerLinksProject>
            <div>
              <img src={exterlink} />
              <p>{props.demo}</p>
            </div>
            <div>
              <img style={{ width: "22px" }} src={github} />
              <p>{props.repo}</p>
            </div>
          </ContainerLinksProject>
        </Project>
        </LazyContain>
        
        </>
    )
}