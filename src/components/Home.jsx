import "../styles/home.css"
import resume from "../assets/Resume.svg"
import twitter from "../assets/Twitter.svg"
import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/linkedinsvg.svg"
import github from "../assets/github.svg"
import foto from "../assets/photoJuan.jpg"
import pdf from "../assets/JuanVeronCV.pdf"

export default function Home(){
    return(
        <div className="home-container" id="home">
            <div className="home-container--circle-button">
                <img  className="home-circle" src={foto}/>
                <a  href={pdf} target="_blank">
                <button className="home-buttoncv">
                    <img className="home-buttoncv-img" src={resume}/> Dowload CV  
                </button>
                </a>
                
            </div>
            
            <div className="home-container-text">
                <h2>Welcome! i'm Juan Veron</h2>
                <h3>Frontend Developer</h3>
                <p>I created several web projects using JavaScript, i worked with vanilla Javascript and React JS. I'm in continuous learning about lastest web technologies and my goal is to grow as a developer and create apps with an amazing UI.</p>
            </div>
            <div className="home-redes-container" >
            <a href="https://github.com/Veron-Juan" target="_blank">
                        <img src={github} />
                    </a>
                <a href="https://www.linkedin.com/in/juanvp7/" target="_blank">
                        <img src={linkedin} />
                    </a>
                    <a href="https://www.instagram.com/juanvp7/" target="_blank">
                        <img src={instagram} />
                    </a>
                    <a href="https://twitter.com/Juuan_vp" target="_blank">
                        <img src={twitter} />
                    </a>
                
            </div>
            
        </div>

    )
}