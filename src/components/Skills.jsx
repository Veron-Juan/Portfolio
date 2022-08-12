import "../styles/skills.css"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import js from "../assets/skills/js.svg"
import react from "../assets/skills/react.svg"
import python from "../assets/skills/python.svg"
import git from "../assets/skills/git.svg"
import figma from "../assets/skills/figma.svg"



export default function Skills(){
    return(
        <div className="container-skills" id="skills">
            <h2>Skills</h2>
            <div className="container-skills--img">
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={react}/>
                <img src={python}/>
                <img src={git}/>
                <img src={figma}/>
            </div>
            
        </div>
    )
}