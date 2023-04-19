import styled from "styled-components"
import CardProject from "./CardProject"
import forever from "../../public/forever.jpg"
import score from "../assets/scorerab.png"
import foodapp from "../../public/food_app.png"
import moviesp from "../../public/movie_api.png"
import randomdogs from "../../public/dogs.random.jpg"
import rym from "../../public/rickandmortyproject.png"
import mascotas from "../../public/mascotas.jpg"
import lofi from "../../public/lofi.jpg"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import js from "../assets/skills/js.svg"
import react from "../assets/skills/react.svg"



const ContainerProjects = styled.div`
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    /* display: flex;
    flex-direction: column; */
    display: grid;
    gap: 80px;
    /* grid-auto-rows: 440px; */
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    /* @media (max-width: 813px) {
    grid-auto-rows: 650px;
    }
     */
`

const CardColumn = styled(CardProject)`
display: flex;
flex-direction: column !important;
border: 2px solid red;
height: 300px;
width: 300px;
display: flex;
`

const Title = styled.h2`
text-align: center;
margin-bottom: 40px;
@media (max-width: 960px) {
    margin-top: 200px;
    
}

`

export default function Portfolio(){
    
    return (
        <>
        
        <Title>Projects</Title>
      <ContainerProjects id="portfolio">

      <CardProject
        image={lofi}
        title="In Process..."
        description="Personal project still under construction, in which a community of people can be created to share their lofi music playlists for studying or relaxing..
            "
            js={js}
            altjs="javascript"
            react={react}
            redux={true}
            express={true}
            mongodb={true}
            altreact="react"
        
        />

        <CardProject
        image={mascotas}
        title="+Cotas App"
        description="I worked on a web application as part of a 6-member team with the goal of finding and publishing lost pets in Resistencia and Corrientes. The application contains detailed information about the lost pet, including the possible exact location where it was last seen or where it was found through the Google Maps API.
            "
            js={js}
            altjs="javascript"
            react={react}
            redux={true}
            express={true}
            mongodb={true}
            altreact="react"
            urlDemo="https://mas-cotas.vercel.app/"
            urlRepo="https://github.com/Veron-Juan/Devlights-final-project"
        
        />




          <CardProject 
            image={rym}
            title="Rick and Morty Page"
            description="The page through the external service of an API
            shows us the characters and episodes of the series, you
            can save the characters you like in favorites, delete them,
            search for characters by filtering, see details of each
            character and information of each chapter.
            "
            js={js}
            altjs="javascript"
            react={react}
            redux={true}
            altreact="react"
            urlDemo="https://rickandmortypage.vercel.app/"
            urlRepo="https://github.com/Veron-Juan/rickandmorty-page"
            
            />



            <CardProject 
            image={foodapp}
            

            title="Food app"
            description="This is a food project, in which you can select and buy several fictitious items that will be stored in the shopping cart. I used the react hook useContext as a state handler.
            "
            js={js}
            altjs="javascript"
            react={react}
            altreact="react"
            urlDemo="https://food-app-ebon-five.vercel.app/"
            urlRepo="https://github.com/Veron-Juan/food-app"
            />


            <CardProject
            
            image={moviesp}
            title="Movies Api"
            js={js}
            altjs="javascript"
            description="Project of a movie page, it's made with vanilla javascript and css, you can save the movies you like in favorites, search movies, see details and more things."
            urlDemo="https://veron-juan.github.io/Movies-API/"
            urlRepo="https://github.com/Veron-Juan/food-app"
            />

            

            <CardProject
            image={randomdogs}
            title="Random Dogs"
            description="you get random pictures of dogs, save them in favorites, delete them and upload a picture of your dog to save it."
            js={js}
            altjs="javascript"
            urlDemo="https://veron-juan.github.io/Random-Dogs/"
            urlRepo="https://github.com/Veron-Juan/Random-Dogs"
            
            />
            <CardProject 
            // image={forever}
            image={forever}

            title="Reproductor Music React"
            description="A template music player made with react, contains css animations."
            js={js}
            altjs="javascript"
            react={react}
            altreact="react"
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
            
            >
            </CardProject>
            
            
      
      </ContainerProjects>
      </>
    );         
                
    
}