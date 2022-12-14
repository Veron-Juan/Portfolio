import styled from "styled-components"
import CardProject from "./CardProject"
import forever from "../assets/musicforever.jpg"
import score from "../assets/scorerab.png"
import foodapp from "../assets/food-app.jpg"
import moviesp from "../assets/movieapi.png"



const ContainerProjects = styled.div`
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    gap: 7rem;
    grid-auto-rows: 17rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  
    
`

const CardColumn = styled(CardProject)`
display: flex;
flex-direction: column !important;
border: 2px solid red;
height: 300px;
width: 300px;
display: flex;


`

export default function Portfolio(){
    
    return (
        <>
        
        <h2 style={{textAlign:"center", margin:"70px 0 56px 0"}}>Projects</h2>
      <ContainerProjects id="portfolio">


            <CardProject
            image={foodapp}
            title="Food app"
            description="This is a food project, in which you can select and buy several fictitious items that will be stored in the shopping cart. I used the react hook useContext as a state handler.
            "
            urlDemo="https://food-app-ebon-five.vercel.app/"
            urlRepo="https://github.com/Veron-Juan/food-app"
            />


            <CardProject
            image={moviesp}
            title="Movies Api"
            description="Project of a movie page, it's made with vanilla javascript and css, you can save the movies you like in favorites, search movies, see details and more things."
            urlDemo="https://veron-juan.github.io/Movies-API/"
            urlRepo="https://github.com/Veron-Juan/food-app"
            />

            

            <CardColumn 
            title="Random Dogs"
            image="https://thumbs.dreamstime.com/b/perro-como-pirata-inform%C3%A1tico-al-lado-del-cuaderno-con-las-gafas-de-sol-y-la-chaqueta-capilla-concepto-programador-seguridad-154714134.jpg"
            description="you get random pictures of dogs, save them in favorites, delete them and upload a picture of your dog to save it."
            
            urlDemo="https://veron-juan.github.io/Random-Dogs/"
            urlRepo="https://github.com/Veron-Juan/Random-Dogs"
            
            />
            <CardProject 
            image={forever}
            title="Reproductor Music React"
            description="A template music player made with react, contains css animations.."

            urlDemo="https://rep-template-music.vercel.app/"
            urlRepo="https://github.com/Veron-Juan/rep-music-react"

            />
            
            <CardProject 
            image={score}
            title="Score Rabbits"
            description="Project made only with html and css in which you can catch a rabbit and score points."


            urlDemo="https://veron-juan.github.io/Score-Rabbits/"
            urlRepo="https://github.com/Veron-Juan/Score-Rabbits"

            repo={<a href="https://github.com/Veron-Juan/Score-Rabbits" target="_blank">repo</a>}
            demo={<a href="https://veron-juan.github.io/Score-Rabbits/"  target="_blank">demo</a>}
            
            />
            
            
      
      </ContainerProjects>
      </>
    );         
                
    
}