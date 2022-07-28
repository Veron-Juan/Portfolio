import "../styles/home.css"
import resume from "../assets/Resume.svg"
import redes from "../assets/redes 6.svg"

export default function Home(){
    return(
        <div className="home-container">
            <div className="home-container--circle-button">
                <img  className="home-circle" src="https://fondosmil.com/fondo/17538.jpg"/>
                <button className="home-buttoncv">
                    <img className="home-buttoncv-img" src={resume}/>Download CV
                </button>
            </div>
            
            <div className="home-container-text">
                <h2>Welcome! i'm Juan Veron</h2>
                <h3>Frontend Developer</h3>
                <p>Flowers open when they feel the sunlight
                Moonrise, tide change right before our eyes
                Aggressive but softly, you place your lips on my lips Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus reprehenderit asperiores earum necessitatibus quis neque, at corporis labore voluptas adipisci eius.</p>
            </div>
            <img className="redes" src={redes}/>
            
        </div>

    )
}