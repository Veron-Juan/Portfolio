import logo from "../assets/logoJuan.svg"
import nav from "../assets/nav.svg"
import "../styles/header.css"
import { useState } from "react";

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
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <img onClick={menu} className="header-nav" src={nav}/>
            {togle && <div className="togle-menu">
            <ul className="togle-menu-ul">
                <li onClick={menu}><a href="#home">Home</a></li>
                <li onClick={menu}><a href="#skills">Skills</a></li>
                <li onClick={menu}><a href="#portfolio">Projects</a></li>
                <li onClick={menu}><a href="#contact">Contact</a></li>
            </ul>
                </div>}
        </header>
    )
}