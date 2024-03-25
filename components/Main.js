import React from "react"

export default function Main() {
    return (
    <div className='main-container'>
            <img src='/pp.png' />
        <div className='main top center'>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>
            <a href='' className='email-btn'><i className="fa-solid fa-envelope"></i>Email</a>
        </div>
        <div className='main bottom'>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
    )
}