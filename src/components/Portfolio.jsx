import "../styles/portfolio.css"
import github from "../assets/github.svg"
import exterlink from "../assets/external-link.svg"


export default function Portfolio(){


    const changueBg = ()=> {

        const back = document.body;
        back.classList.toggle('bg-hover')
    }
    
    return(

        <div  className="portfolio-container " id="portfolio">
            <h2>Portfolio</h2>
            <div onMouseEnter={changueBg} onMouseLeave={changueBg} className="portfolio">
            <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://www.elgrupoinformatico.com/static/Noticias/2022/01/tener-hbo-max-gratis-1200x675.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>
                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://www.elgrupoinformatico.com/static/Noticias/2022/01/tener-hbo-max-gratis-1200x675.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>
                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>

                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>

                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>

                <div className="portfolio-links">
                    
                    <img className="portfolio-img" src="https://androidayuda.com/wp-content/uploads/2021/03/dogo.jpg" />
                    <h3>Title project</h3>
                    <p>this project is a bla bkasdd blasd asdjas sjd asd asasdasds dasdask das </p>
                    <div className="portfolio-links_button">
                    <button ><img src={exterlink}/> </button>
                        <button> <img className="abc" src={github}/>  </button>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
    )
}