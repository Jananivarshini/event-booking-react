import React from "react";
import Nav from "../Nav/Nav";
import ServicesCSS from './../Services/Services.module.css'
function Services(){
    return(
         <><Nav/>
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            <small className="section_Heading">Our Event Categories</small>
            <h2 className="section_Title">Explore Event Services</h2>
            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Birthday Party</h3>
                    <p>- Theme Decorations</p>
                    <p>- Cake & Dessert Table</p>
                    <p>- Games & Entertainment</p>
                    <p>- Photography & Videography</p>
                </div>

                 <div className={ServicesCSS.Services_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Wedding Events</h3>
                    <p>- Venue Decoration</p>
                    <p>- Bridal & Groom Entry</p>
                    <p>- Catering Services</p>
                    <p>- Photography & Videography</p>
                </div>

                 <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Corporate Events</h3>
                    <p>- Business Meetings</p>
                    <p>- Product Launch Events</p>
                    <p>- Conferences & Seminars</p>
                    <p>- Team Building Activities</p>
                </div>
            
                 <div className={ServicesCSS.Services_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Music & Concert Events</h3>
                    <p>- Live Music Shows</p>
                    <p>- DJ & Sound Systems</p>
                    <p>- Stage & Lighting Setup</p>
                    <p>- Crowd Management</p>
                </div>
            </div>
        </div></>
    )
}
export default Services