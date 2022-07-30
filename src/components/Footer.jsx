import "../styles/footer.css"
import logo from "../assets/logo.svg"
import twitter from "../assets/Twitter.svg"
import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/linkedinsvg.svg"
import github from "../assets/github.svg"



export default function Footer(){
    return(
        <footer className="footer">
            <a href="#home">
                <img src={logo} className="footer-logo"/>
            </a>
                
            
            
            
            <p className="footer-copyright" >©Copyright 2022</p>
            <div className="footer-redes-container" >
                <img src={twitter} />
                <img src={instagram} />
                <img src={linkedin} />
                <img src={github} />
                
            </div>
        </footer>
    )
}