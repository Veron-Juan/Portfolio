import "../styles/contact.css"
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"
import gmail from "../assets/icons8-gmail.svg"



export default function Contact(){
    const form = useRef();

    const sendEmail = (event)=> {
        event.preventDefault();
        
        
        emailjs.sendForm("service_6jp1hph", "template_vbe9o8p",event.target,"ao6vQm60-9HxD_Ri3")
        .then(response => console.log(response))
        .catch(error => console.log(error))
        event.target.reset()  
    }

    return(
        <div className="contact-container" id="contact">
            <h2>Contact <img src={gmail}/></h2>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className="input-name" type="text" placeholder="name" name="user_name"></input>
                <input className="input-email" type="email" required placeholder="e-mail" name="user_email"></input>
                <textarea className="input-message" placeholder="message" name="user_message" ></textarea>
                <button type="submit" value="Send" className="button-form">Send</button>
                
            </form>
            
        </div>
    )
}