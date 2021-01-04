import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Blog() {
    return (
        <div>
             <div className="Blog" style={{margin:"auto",width:"80%",boxShadow: "-2px 5px 20px -1px #ff4000",marginTop:"1rem",padding:"1rem",color:"#595959"}}>
                <h2 style={{textAlign:"center",color:"#ff4000",padding:"1rem 0",textDecoration:"underline"}}> Gym Blog</h2>
                <p style={{color:"#ff4000",padding:"1rem 0"}}>1. Protein</p>
                <p style={{lineHeight:"1.3"}}>Protein is an important macronutrient that every cell in the body needs. It helps build and repair cells and body tissues, including the skin, hair, muscle, and bone. Protein is also important for blood clotting, immune system responses, hormones, and enzymes.</p>

                <p style={{color:"#ff4000",padding:"1rem 0"}}>2. Carbohydrates</p>
                <p style={{lineHeight:"1.3"}}>Carbohydrates are naturally occurring sugars, starches and fiber in food. All carbohydrates are made up of sugar molecules. Sugar molecules linked together form starches and fiber. In the body, starches and sugars are broken down in the digestive system to glucose.</p>

                <p style={{color:"#ff4000",padding:"1rem 0"}}>3. Vitamins</p>
                <p style={{lineHeight:"1.3"}}>Vitamins are grouped into two categories: Fat-soluble vitamins are stored in the body's fatty tissue. The four fat-soluble vitamins are vitamins A, D, E, and K. These vitamins are absorbed more easily by the body in the presence of dietary fat.</p>

                <p style={{color:"#ff4000",padding:"1rem 0"}}>4. Minerals</p>
                <p style={{lineHeight:"1.3"}}>Minerals are solid substances that are present in nature and can be made of one element or more elements combined together (chemical compounds). Gold, Silver and carbon are elements that form minerals on their own. ... For example, rock salt or kitchen salt is a mineral formed of cubic-shaped crystals.</p>
             </div>
        </div>
    )
}

export default Blog
