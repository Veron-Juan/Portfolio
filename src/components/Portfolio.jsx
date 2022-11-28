// import "../styles/portfolio.css"
import { useState, useEffect, lazy, Suspense } from "react"

import styled from "styled-components"
import github from "../assets/github.svg"
import exterlink from "../assets/external-link.svg"
import randomDog from "../assets/randomdogs.jpg"
import movieapi from "../assets/project1.png"
import useObserver from "./useObserver"
import CardProject from "./CardProject"
import forever from "../assets/forever.jpg"
import score from "../assets/scorerabit.png"





const ContainerProjects = styled.div`
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 961px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    
    
    /* margin-right: 58px; */
  }
    
`

const Project  = styled.div`
width: 380px;
height: 100%;
border-radius: 15px;
margin: 35px auto;
background-image: radial-gradient(circle at 78.81% 39.51%, #ffdfff 0, #e1beff 25%, #b89aea 50%, #8c78d2 75%, #817dbf8c 100%);
display: flex;
flex-direction: column;

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
`



export default function Portfolio(){

    
    


    const changueBg = ()=> {

        const back = document.body;
        back.classList.toggle('bg-hover')
    }

    
    
    return (
        <>
        
        <h2 style={{textAlign:"center"}}>Projects</h2>
      <ContainerProjects id="portfolio">

        
            <CardProject
            image={movieapi}
            title="Movies Api"
            description="Project currently based mainly on mobile, data is obtained from a
            movie api, in which I used axios."
            repo={<a href="https://veron-juan.github.io/Movies-API/" target="_blank">repo</a>}
            demo={<a href="https://veron-juan.github.io/Movies-API/"  target="_blank">demo</a>}
            />

            <CardProject
            title="Random Dogs"
            image={randomDog}
            description="you get random pictures of dogs, save them in favorites, delete them and upload a picture of your dog to save it."
            repo={<a href="https://github.com/Veron-Juan/Random-Dogs" target="_blank">repo</a>}
            demo={<a href="https://veron-juan.github.io/Random-Dogs/"  target="_blank">demo</a>}
            />
            <CardProject 
            image={forever}
            title="Reproductor Music React"
            description="A template music player made with react, contains css animations.."
            repo={<a href="https://github.com/Veron-Juan/rep-music-react" target="_blank">repo</a>}
            demo={<a href="https://rep-template-music.vercel.app/"  target="_blank">demo</a>}
            />
            
            <CardProject style={{width:"210px"}}
            image={score}
            title="Score Rabbits"
            description="Project made only with html and css in which you can catch a rabbit and score points."
            repo={<a href="https://github.com/Veron-Juan/Score-Rabbits" target="_blank">repo</a>}
            demo={<a href="https://veron-juan.github.io/Score-Rabbits/"  target="_blank">demo</a>}

            />
            
      
      </ContainerProjects>
      </>
    );

        
            
           
        

// 



            
            
//             <Project id="lazy">

//                 <img src={movieapi} />
//                 <h3>Movies API</h3>
//                 <p>Project currently based mainly on mobile, data is obtained from a movie api, in which I used axios. </p>

//                 <ContainerLinksProject>
//                     <div>
//                         <img src={exterlink}/>
//                         <p>demo</p>
//                     </div>
//                     <div>
//                         <img style={{width:"22px"}} src={github}/>
//                         <p>Repo</p>
//                     </div>
//                 </ContainerLinksProject>

//            

           
                    
                    {/* <div className="portfolio-img1"></div>
                    <h3>Movies API</h3>
                    <p>Project currently based mainly on mobile, data is obtained from a movie api, in which I used axios. </p>
                    <div className="portfolio-links_button">
                    <a href="https://veron-juan.github.io/Movies-API/"  target="_blank">
                        <button className="button-project" ><img src={exterlink}/>Project </button>
                    </a>
                    <a href="https://github.com/Veron-Juan/Movies-API" target="_blank">
                        <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                    </a> 
               
                    
                </div>
                <div className="portfolio-links">
                    
                    <div className="portfolio-img2"></div>
                    <h3>Reproductor Music React</h3>
                    <p>A template music player made with react, contains css animations. </p>
                    <div className="portfolio-links_button">
                        <a href="https://rep-template-music.vercel.app/" target="_blank">
                            <button className="button-project" ><img src={exterlink}/>Project </button>
                        </a>
                        <a href="https://github.com/Veron-Juan/rep-music-react" target="_blank">
                            <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                        </a>
                    
                    
                    </div>
                    
                </div>
                <div className="portfolio-links">
                    
                    <div className="portfolio-img3"></div>
                    <h3>Random Dogs</h3>
                    <p>you get random pictures of dogs, save them in favorites, delete them and upload a picture of your dog to save it. </p>
                    <div className="portfolio-links_button">
                        <a href="https://veron-juan.github.io/Random-Dogs/" target="_blank">
                            <button className="button-project" ><img src={exterlink}/>Project </button>
                        </a>
                        <a href="https://github.com/Veron-Juan/Random-Dogs" target="_blank">
                            <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                        </a>
                    
                    </div>
                    
                </div>

                <div className="portfolio-links">
                    
                    <div className="portfolio-img4"></div>
                    <h3>Score Rabbits</h3>
                    <p>Project made only with html and css in which you can catch a rabbit and score points.</p>
                    <div className="portfolio-links_button">
                        <a href="https://veron-juan.github.io/Score-Rabbits/" target="_blank">
                            <button className="button-project" ><img src={exterlink}/>Project </button>
                        </a>
                        <a href="https://github.com/Veron-Juan/Score-Rabbits" target="_blank">
                            <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                        </a>
                    
                    
                    </div>
                    
                </div> */}
                

                
                
            
        
        
    
}