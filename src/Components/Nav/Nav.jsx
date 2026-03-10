import React from "react";
import navCSS from './../Nav/Nav.module.css'
function Nav(){
    return(
        <div className="{navCSS.nav_wrapper">
          <div className="{navCSS.logo}">
            <a href="#"><span>vibe</span>NoW</a>
            </div> 
            <ul>
                <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Categories</a></li>
                  <li><a href="#">Events</a></li>
                   <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Blogs</a></li>

            </ul>
        </div>
    )
}
export default Nav