import React from 'react'

function Footer() {
    const href = "#";
    return (
        <footer>
          <div className="social">
             <div><a href={href}><i class="fab fa-facebook"></i></a></div>
             <div><a href={href}><i class="fab fa-linkedin-in"></i></a></div>
             <div><a href={href}><i class="fab fa-instagram"></i></a></div>
             <div><a href={href}><i class="fab fa-twitter"></i></a></div>
          </div>
          <div className="address"><p>Developed By : <span className="name"> Sunil Kumar</span></p></div>
       </footer>
    )
}

export default Footer
