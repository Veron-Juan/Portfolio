import "../styles/skills.css"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import js from "../assets/skills/js.svg"
import react from "../assets/skills/react.svg"
import python from "../assets/skills/python.svg"
import git from "../assets/skills/git.svg"
import figma from "../assets/skills/figma.svg"
import node from "../assets/skills/node.svg"
import mongodb from "../assets/skills/mongodb.svg"
import express from "../assets/skills/express.svg"
import redux from "../assets/skills/redux.svg"
import typescript from "../assets/skills/typescript.svg"



import LazyLoad from 'react-lazy-load';





export default function Skills(){
    return(
        <div className="container-skills" id="skills">
            <h2>Skills</h2>
            <LazyLoad threshold={.65} offset={-115}>
            <div className="container-skills--img">
            <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={python}/>
                <img src={typescript}/>
                <img src={react}/>
                <img src={redux}/>
                <img src={git}/>
                <img src={figma}/>
                <img src={node}/>
                <img src={express}/>
                <img src={mongodb}/>
            </div>
                
            </LazyLoad>
            {/* <div className="container-skills--img">
                
            </div> */}
            
        </div>
    )
}