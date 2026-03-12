import React, {useRef}from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav(){
    const menu= useRef();
    const menuHandler =()=>{
        menu.current.classList.toggle(navCSS.showNav);
    }
    return(
        <div className={navCSS.nav_wrapper}>
          <div className={navCSS.logo}>
            <a href="#"><span>vibe</span>NoW</a>
            </div> 
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Categories</a></li>
                  <li><a href="#">Events</a></li>
                   <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Blogs</a></li>

            </ul>
            <div className={navCSS.Nav_btns}>
                <button className={navCSS.btn}>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}
export default Nav