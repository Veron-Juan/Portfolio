import logo from "../assets/logoJuan.svg"
import nav from "../assets/nav.svg"
import "../styles/header.css"
import { useState } from "react";
import styled from "styled-components";

const ButtonHeader = styled.button`
display:flex;
flex-direction: column;
width:2.8rem;
height:2.8rem;
border:0;
background:transparent;
gap: .47rem;
padding-right: 8px;
cursor: pointer;
margin-top: 17px;

> div{
  background:#413970;
  height:5.3px;
  width:100%;
  border-radius:5px;
  transition: all .5s;
  transform-origin: left;
  
  
  
  
  &:first-child{
    transform: ${({ efecto }) => (efecto  ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2){
  opacity: ${({ efecto  }) => (efecto  ? "0" : "1")};
}

&:last-child{
transform: ${({ efecto  }) => (efecto  ? "rotate(-45deg)" : "rotate(0)")};
}


}


@media (min-width: 961px) {
    display:none
}





`

export default function Header(){
    const [togle, setTogle] = useState(false);
    

    const menu = ()=>{
        setTogle(!togle);
        
    }

    

    return(
        <header className="header" id="home">
            
            <img className="header-logo" src={logo}/>
            
            <ul className="header-ul">
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ButtonHeader efecto={togle} onClick={menu}  >
                <div></div>
                <div></div>
                <div></div>
                
            </ButtonHeader>
            {togle && <div className="togle-menu">
            <ul className="togle-menu-ul">
                <li onClick={menu}><a href="#home">Home</a></li>
                <li onClick={menu}><a href="#portfolio">Projects</a></li>
                <li onClick={menu}><a href="#skills">Skills</a></li>
                <li onClick={menu}><a href="#contact">Contact</a></li>
            </ul>
                </div>}
        </header>
    )
}