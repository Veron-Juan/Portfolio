// import "../styles/home.css";
import styled, {keyframes} from "styled-components";
import resume from "../assets/Resume.svg";
import twitter from "../assets/Twitter.svg";
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/linkedinsvg.svg";
import github from "../assets/github.svg";
import foto from "../assets/photoJuan.jpg";
import pdf from "../assets/VeronJuanCV.pdf";
import down from "../assets/DoubleDown.svg"
import Card from "./Card";

const animationfoto = keyframes`
 0%{
        transform: translateX(-150px) scale(0.3);
        
    }
   
    100%{
        transform: translateX(0) scale(1);
        
    }
`

const animationtext = keyframes`

    0%{
        transform:  scale(0.3);
        
    }
    100%{
        transform:  scale(1);
        
    }

`

const animationredes = keyframes`
0%{
        transform: translateX(600px)  scale(0.3);
        
    }
    100%{
        transform: translateX(0) scale(1);
        
    }
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  color: #5d3374;

  @media (min-width: 961px) {
    flex-direction: row;
    
}
  
`;

const ButtonCV = styled.button`
height: 60px;
width: 160px;
margin: 20px 0;
border: none;
outline: none;
text-decoration: none;
background-color: #9181fca7;
border-radius: 25px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;

p{
  font-weight: bold;
  color: #413970;
}

a{
  text-decoration: none;
  color: #413970;
}
:hover{
  -webkit-box-shadow: 6px 9px 6px -5px rgba(0,0,0,0.63);
    -moz-box-shadow: 6px 9px 6px -5px rgba(0,0,0,0.63);
    box-shadow: 4px 4px 9px -5px rgba(0,0,0,0.63);
    background-color: #7c6ce2e0;
}
`

const ContainerImagePortfolio = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 30px 0;
  -webkit-box-shadow: 6px 2px 6px -2px rgba(0,0,0,0.31);
  -moz-box-shadow: 6px 2px 6px -2px rgba(0,0,0,0.31);
  box-shadow: 6px 2px 6px -2px rgba(0,0,0,0.31);
  animation: ${animationfoto}  .7s;
  img{
    width: 250px;
    border-radius: 50%;
    @media (min-width: 961px) {
    width: 320px;
}
  }
  @media (min-width: 961px) {
    margin-top: -280px;
    
}
`
const ContainerTtitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #413970;
  animation: ${animationtext} .7s;
  /* margin-bottom: 50px; */
  gap: 7px;
  /* animation:  0.5s animation-text ease-in-out; */
  h2{
    font-size: 28px;
    font-weight: lighter;
    @media (min-width: 961px) {
    font-size: 38px;
    }
  }

  h3{
    font-size: 24px;
    font-weight: bold;
    @media (min-width: 961px) {
    font-size: 32px;
    }
  }

  p{
    margin: 0 auto;
    text-align: justify;
    padding: 0 18px;
    font-size: 19px;
    @media (min-width: 961px) {
      padding: 0 88px;
    
}
  }
  @media (min-width: 961px) {
    margin-top: -200px;
    margin-left: 15px;
    
}

`
const ContainerRedes = styled.div`
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  animation: ${animationredes} .7s;
  img{
    width: 25px;
  }

  @media (min-width: 961px) {
    position: absolute;
    top: 480px;
    right:5px;
    img{
    width: 35px;
    
  }
    
}
`

export default function Home() {
  return (
    <HomeContainer id="home">
      
      <ContainerImagePortfolio>
        <img src={foto} alt="foto portada"  />
      </ContainerImagePortfolio>
      {/* <div className="home-container--circle-button">
        <img className="home-circle" src={foto} />
        <a className="home-circle_a" href={pdf} target="_blank">
          <button className="home-buttoncv">
            <img className="home-buttoncv-img" src={resume} /> Download CV
          </button>
        </a>
      </div> */}
      <ContainerTtitles>
        <h2>Welcome! i'm Juan Veron</h2>
        <h3>Frontend Developer</h3>
        <p>
          I created several web projects using vanilla JavaScript and React JS. I'm in continuous learning about the
          lastest web technologies and, my goal is to grow as a developer and
          develop amazing applications with a great team.
        </p>
      <ButtonCV>
        {/* <img src={resume}/> */}
        <h4><a  href={pdf} target="_blank">Download CV</a></h4>
        

        
      </ButtonCV>
      </ContainerTtitles>
      <ContainerRedes>
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
      </ContainerRedes>
      {/* <img src={down} /> */}
    </HomeContainer>
  );
}
