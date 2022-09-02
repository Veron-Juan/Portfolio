import "../styles/portfolio.css"
import github from "../assets/github.svg"
import exterlink from "../assets/external-link.svg"
import randomDog from "../assets/randomdog.jpg"



export default function Portfolio(){


    const changueBg = ()=> {

        const back = document.body;
        back.classList.toggle('bg-hover')
    }
    
    return(

        <div  className="portfolio-container " id="portfolio">
            <h2>Projects</h2>
            <div onMouseEnter={changueBg} onMouseLeave={changueBg} className="portfolio">
            <div className="portfolio-links">
                    
                    <div className="portfolio-img1"></div>
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
                    
                </div>

                {/* <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button className="button-project" ><img src={exterlink}/>Project </button>
                    <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                    </div>
                    
                </div>

                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button className="button-project" ><img src={exterlink}/>Project </button>
                    <button className="button-project"> <img className="abc" src={github}/>Repository</button>
                    </div>
                    
                </div> */}
                
                
            </div>
        </div>
        
    )
}