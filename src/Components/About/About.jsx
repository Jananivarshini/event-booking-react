import React from "react";
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.avif'
function About(){
    return(
        <div className={`${aboutCSS.about_wraper} section`}>
           <div className={aboutCSS.about_img}>
            <img src={aboutImg} alt="about-img" />
           </div>
           <div className={aboutCSS.about_content}>
            <small className="section-Heading">vibeNoW Events</small>
            <h2 className="section_Title">Turning Your Special Moments into <span>Beautiful Memories</span></h2>
            <div className={aboutCSS.Cards}>
                <p>260+ <span>Award Wins</span></p>
                 <p>250k+ <span>Visitors Visits</span></p>
                  <p>150k+<span>Events</span></p>

            </div>
           </div>
        </div>
    )
}
export default About