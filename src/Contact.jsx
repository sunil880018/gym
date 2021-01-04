import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Contact() {
    return (
        <>
        <div className="contact" style={{margin:"auto",width:"80%",boxShadow: "-2px 5px 20px -1px #ff4000",marginTop:"1rem",padding:"1rem",color:"#595959",textAlign:"center"}}>
            <h2 style = {{textAlign:"center",color:"#ff4000",padding:"1rem 0",textDecoration:"underline"}}>Contact Details</h2>
            <p> National Institute of Technology Jamshedpur , Jharkhand</p>
            <p> Mobile Number : 1234567890</p>
            <p> Email : abc@gmail.com</p>
        </div>
        </>
    )
}

export default Contact
