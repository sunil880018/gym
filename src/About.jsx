import React from 'react'
import Footer from './Footer'
import Header from './Header'

function About() {
    return (
        <>
            <div className="about" style={{margin:"auto",width:"80%",boxShadow: "-2px 5px 20px -1px #ff4000",marginTop:"1rem",padding:"1rem",color:"#595959",textAlign:"center"}}>
            <h2 style = {{textAlign:"center",color:"#ff4000",padding:"1rem 0",textDecoration:"underline"}}>About Me</h2>
            <p>A personal trainer works one-on-one with a client to develop and implement a fitness training regimen that helps them lose weight, get stronger, improve physical performance or maintain their health. Trainers introduce clients to individualized exercises that are based upon their personal goals, skill level and needs.</p>
           </div>
        </>
    )
}

export default About
