import "../styles/footer.css"
import logo from "../assets/logoJuan.svg"
import twitter from "../assets/Twitter.svg"
import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/linkedinsvg.svg"
import github from "../assets/github.svg"



export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-cont">
                <a className="a-footer-logo" href="#home">
                    <img src={logo} className="footer-logo"/>
                </a>
                <p className="footer-copyright" >© Made by Juan Veron</p>
                <div className="footer-redes-container" >
                    <a href="https://github.com/Veron-Juan" target="_blank">
                        <img src={github} />
                    </a>
                    <a href="https://www.linkedin.com/in/juanvp7/" target="_blank">
                        <img src={linkedin} />
                    </a>
                    
                    <a href="https://twitter.com/Juuan_vp" target="_blank">
                        <img src={twitter} />
                    </a>
                    <a href="https://www.instagram.com/juanvp7/" target="_blank">
                        <img src={instagram} />
                    </a>
                </div>
            </div>
            
        </footer>
    )
}