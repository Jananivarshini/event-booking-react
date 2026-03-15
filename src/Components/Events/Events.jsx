import React from "react";
import eventsCSS from './../Events/Events.module.css'
function Events(){
    return(
       <div className={`${eventsCSS.events_container} section`}>
        <small className="section_Heading">Events We Organize</small>
        <h2 className="section_Title">Our Best Event Spaces</h2>
        <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front1}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={eventsCSS.Card_back}>
                        <div className={eventsCSS.Card_content}>
                            <h3>Birthday Party Hall</h3>
                            <p> - Beautiful Decorations</p>
                            <p> - Music & Lighting</p>
                            <p> - Catering Available</p>
                            <p> - Photo & Video Service</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
         <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front2}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={`${eventsCSS.Card_back} ${eventsCSS.Card_back2}`}>
                    
                        <div className={eventsCSS.Card_content}>
                            <h3>Wedding Hall</h3>
                            <p> - Spacious Wedding Venue</p>
                            <p> - Stage & Floral Decoration</p>
                            <p> - Catering & Dining</p>
                            <p> - Photography & Videography</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
         <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front1}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={eventsCSS.Card_back}>
                      
                        <div className={eventsCSS.Card_content}>
                            <h3>Corporate Event Hall</h3>
                            <p> - Meeting & Conference Setup</p>
                            <p> - Projector & Sound System</p>
                            <p> - Catering Service</p>
                            <p> - Professional Environment</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
         <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front1}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={eventsCSS.Card_back}>
                     
                        <div className={eventsCSS.Card_content}>
                            <h3>Wedding Hall</h3>
                            <p> - Spacious Wedding Venue</p>
                            <p> - Stage & Floral Decoration</p>
                            <p> - Catering & Dining</p>
                            <p> - Photography & Videography</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
         <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front1}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={eventsCSS.Card_back}>
                       
                        <div className={eventsCSS.Card_content}>
                            <h3>Wedding Hall</h3>
                            <p> - Spacious Wedding Venue</p>
                            <p> - Stage & Floral Decoration</p>
                            <p> - Catering & Dining</p>
                            <p> - Photography & Videography</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
         <div className={eventsCSS.cards}>
            <div className={eventsCSS.cards_container}>
                <div className={eventsCSS.card}>
                    <div className={`${eventsCSS.Card_front} ${eventsCSS.Card_front1}`}>
                      <button>Book Now</button>  
                    </div>
                    <div className={eventsCSS.Card_back}>
                        <div className={eventsCSS.Card_content}>
                            <h3>Wedding Hall</h3>
                            <p> - Spacious Wedding Venue</p>
                            <p> - Stage & Floral Decoration</p>
                            <p> - Catering & Dining</p>
                            <p> - Photography & Videography</p>
                        </div>
                        <div className={eventsCSS.BookNow}>
                            <button>Book Now</button>
                            <i className="ri-arrow-right-line"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Events