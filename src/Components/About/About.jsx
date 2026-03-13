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
            <small className="section_Heading">VibeNoW Events</small>
            <h2 className="section_Title">Turning Your Special Moments into Beautiful Memories</h2>
            <p><span>VibeNoW</span> is an event management platform designed to help people organize and book events easily.
We believe every celebration deserves perfect planning. Our team works with trusted vendors, creative planners, and experienced coordinators to make your event smooth and memorable.
Whether it is a wedding, birthday, corporate event, or a small celebration, we ensure everything is planned with care and creativity.</p>
            <div className={aboutCSS.Cards}>
                <p>260+ <span>Clients</span></p>
                 <p>250k+ <span>Visitors Visits</span></p>
                  <p>150k+<span>Events</span></p>

            </div>
           </div>
        </div>
    )
}
export default About