
import './App.css';

function App() {
  const href = "#";
  const videosrc = "https://www.youtube.com/embed/PXjfecguayM";
  return (
    <div className="App">
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
              <div className="menu-list"><a href={href}>Home</a></div>
              <div className="menu-list"><a href={href}>Blog</a></div>
              <div className="menu-list"><a href={href}>Contact</a></div>
              <div className="menu-list"><a href={href}>About us</a></div>
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
               <form action="#" method="POST">
                  <div className="input"><input type="text" placeholder="Name" required/></div>
                  <div className="input"><input type="email" placeholder="Email" required/></div>
                  <div className="input"><input type="number" placeholder="Mobile No" required/></div>
                  <div className="input"><input type="text" placeholder="Address" required/></div>
                  <div className="input"><button type="submit">Submit</button></div>
               </form>
            </div>
         </div>
         </div>
       </header>

       <section className="fitness_icon">
          <h1>Fitness Courses in Personal Training</h1>
          <div className="fitness_thumbnail">
             <div className="fitness_thumbnail_images">
                <img src={process.env.PUBLIC_URL+ "/images/icon1.jpg"} alt="" />
                <h2>Yoga</h2>
                <p>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India.</p>
                <div><a href={href}>Fitness</a></div>
             </div>
             <div className="fitness_thumbnail_images">
                <img src={process.env.PUBLIC_URL+ "/images/icon2.jpg"} alt="" />
                <h2>Squats</h2>
                <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
                <div><a href={href}>Fitness</a></div>
             </div>
             <div className="fitness_thumbnail_images">
                <img src={process.env.PUBLIC_URL+ "/images/icon4.jpg"} alt="" />
                <h2>Running</h2>
                <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
                <div><a href={href}>Fitness</a></div>
             </div>
          </div>
       </section>

       <section className="fitness_icon1">
          <div className="fitness_icon1_work">
             <div className="fitness_studio">
                <h1>Welcome to our Haversack Fitness Studio</h1>
                <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
                <div><a href={href}>Fitness</a></div>
             </div>
             <div className="video">
                <iframe
                    src={videosrc}>
                </iframe>
             </div>
          </div>
       </section>

       <section className="fitness_icon1">
          <div className="fitness_icon1_work">
             <div className="fitness-trainer">
                   <img src={process.env.PUBLIC_URL+ "/images/icon6.jpg"} alt="" />
             </div>
             <div className="fitness_studio">
                <h1>Our Personal Fitness Trainer</h1>
                <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
                <div><a href={href}>Fitness</a></div>
             </div>
          </div>
       </section>

       <section className="fitness_price">
           <div className="fitness_price_h">
              <h1>Affordable Fitness NO Excuses</h1>
              <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
           </div>
           <div className="price_tag">
              <div className="price_tag_list">
                 <h1>Yoga</h1>
                 <p><span className="fees">500</span> /month</p>
                 <p>Yoga is a mind and body practice with a 5,000-year history in ancient Indian philosophy. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation.</p>
                 <div><a href={href}>Fitness</a></div>
              </div>
              <div className="price_tag_list">
                 <h1>Gym</h1>
                 <p><span className="fees">1200</span> /month</p>
                 <p>Gymnasium is a large room with equipment for exercising the body and increasing strength or a club where you can go to exercise and keep fit.</p>
                 <div><a href={href}>Fitness</a></div>
              </div>
              <div className="price_tag_list">
                 <h1>Fitness</h1>
                 <p><span className="fees">1700</span> /month</p>
                 <p>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</p>
                 <div><a href={href}>Fitness</a></div>
              </div>
           </div>
       </section>

       <section className="google_map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28067.20756826083!2d77.0059952948179!3d28.43732756720707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d181c7875aed1%3A0x4e2032b6527daaf5!2sSector%2033%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1607949874418!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </section>
       <section className="middle_banner" style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/icon5.jpg"})`,
                                                   backgroundPosition: 'center',
                                                   backgroundSize: 'cover',
                                                   backgroundRepeat: 'no-repeat' }}>
        <div className="fbanner">
            <div className="feel">
                <h1>Feel The Power</h1>
                <p>The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion..</p>
                <span><a href={href}>Fitness</a></span>
            </div>
        </div>

       </section>

       <footer>
          <div className="social">
             <div><a href={href}><i class="fab fa-facebook"></i></a></div>
             <div><a href={href}><i class="fab fa-linkedin-in"></i></a></div>
             <div><a href={href}><i class="fab fa-instagram"></i></a></div>
             <div><a href={href}><i class="fab fa-twitter"></i></a></div>
          </div>
          <div className="address"><p>Developed By : <span className="name"> Sunil Kumar</span></p></div>
       </footer>
    </div>
  );
}

export default App;
