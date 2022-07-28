import skills from "../assets/Skills.svg"
import "../styles/skills.css"


export default function Skills(){
    return(
        <div className="container-skills">
            <h2>Skills</h2>
            <img src={skills}/>
        </div>
    )
}