import logo from "../assets/logo.svg"
import nav from "../assets/nav.svg"
import "../styles/header.css"
import { useState } from "react";

export default function Header(){
    const [togle, setTogle] = useState(false);

    const menu = ()=>{
        setTogle(!togle);
    }
    return(
        <header className="header">
            <img className="header-logo" src={logo}/>
            <ul className="header-ul">
                <li>Home</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <img onClick={menu} className="header-nav" src={nav}/>
            {togle && <div className="togle-menu">
            <ul className="togle-menu-ul">
                <li>Home</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
                </div>}
        </header>
    )
}