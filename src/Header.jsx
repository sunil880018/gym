import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
   const href = "#";
   const submitData = (e)=>{
      console.log("hello")
      document.getElementById("success").style.display = "block";
   }
   


   const aboutPage = () =>{
      let homeid = document.getElementById("home-btn");
      let aboutid = document.getElementById("about-btn");
      let blogid = document.getElementById("blog-btn");
      let contactid = document.getElementById("contact-btn");
       aboutid.style.backgroundColor = "#ff4000";
       console.log("hello color");
       homeid.style.backgroundColor = "transparent";
       blogid.style.backgroundColor = "transparent";
       contactid.style.backgroundColor = "transparent";
   }
   const homePage = () =>{
      let homeid = document.getElementById("home-btn");
   let aboutid = document.getElementById("about-btn");
   let blogid = document.getElementById("blog-btn");
   let contactid = document.getElementById("contact-btn");
      homeid.style.backgroundColor = "#ff4000";
      console.log("hello color");
      aboutid.style.backgroundColor = "transparent";
      blogid.style.backgroundColor = "transparent";
      contactid.style.backgroundColor = "transparent";
  }
  const blogPage = () =>{
   let homeid = document.getElementById("home-btn");
   let aboutid = document.getElementById("about-btn");
   let blogid = document.getElementById("blog-btn");
   let contactid = document.getElementById("contact-btn");
   blogid.style.backgroundColor = "#ff4000";
   console.log("hello color");
   homeid.style.backgroundColor = "transparent";
   aboutid.style.backgroundColor = "transparent";
   contactid.style.backgroundColor = "transparent";
}
const contactPage = () =>{
   let homeid = document.getElementById("home-btn");
   let aboutid = document.getElementById("about-btn");
   let blogid = document.getElementById("blog-btn");
   let contactid = document.getElementById("contact-btn");
   contactid.style.backgroundColor = "#ff4000";
   console.log("hello color");
   homeid.style.backgroundColor = "transparent";
   blogid.style.backgroundColor = "transparent";
   aboutid.style.backgroundColor = "transparent";
}
    return (
        <header style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/banner.jpg"})`,
                                                   backgroundPosition: 'center',
                                                   backgroundSize: 'cover',
                                                   backgroundRepeat: 'no-repeat' }}>
        <div className="header_background">
         <div className="nav">

           <div className="app_logo">
             <p><span className="gym">Gym</span><span className="fit">Fit</span></p>
           </div>
           <div className="menus">
              <div className="menu-list" id="home-btn"><Link to="/gym" onClick={homePage}>Home</Link></div>
              <div className="menu-list" id="blog-btn"><Link to="/blog" onClick={blogPage}>Blogs</Link></div>
              <div className="menu-list" id="contact-btn"><Link to="/contact" onClick={contactPage}>Contact</Link></div>
              <div className="menu-list" id="about-btn"><Link to="/about" onClick={aboutPage}>About Us</Link></div>
           </div>
         </div>

         <div className="header_bottom">
            <div className="header_focus" > 
               <h1>Get 10 Days Free Training Sessions!</h1>
                <h3>Push yourself, because no one else is going to do it for you.</h3>
                <a href={href}><i class="fas fa-hand-point-right"> </i> Visit our Gym</a>
            </div>

            <div className="registration_form">
               <h2>GET STARTED TODAY</h2>
               <p style={{fontSize:"1rem",color:"green",textAlign:"center",display:"none"}} id="success"></p>
               <form action="/register" method="POST">
                  <div className="input"><input type="text" name="name" placeholder="Name" required/></div>
                  <div className="input"><input type="email" name="email" placeholder="Email" required/></div>
                  <div className="input"><input type="text" name="mobile" placeholder="Mobile No" required/></div>
                  <div className="input"><input type="text" name="address" placeholder="Address" required/></div>
                  <div className="input"><button type="submit" onClick={submitData}>Submit</button></div>
               </form>
               
            </div>
         </div>
         </div>
       </header>
    )
}

export default Header
