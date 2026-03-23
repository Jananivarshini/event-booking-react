import React, {useRef}from "react";
import navCSS from './Nav.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Nav(){
    const menu= useRef();
    const menuHandler =()=>{
        menu.current.classList.toggle(navCSS.showNav);
    }
  const navigate =useNavigate();

   

    return(
        <div className={navCSS.nav_wrapper}>
          <div className={navCSS.logo}>
            <a href="#"><span>Vibe</span>NoW</a>
            </div> 
            <ul ref={menu}>
              <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/Services">Services</Link></li>
               <li><Link to="/events">Events</Link></li>
               <li><Link to="/aminities">Aminities</Link></li>
               <li><Link to="/testimonials">Testimonials</Link></li>
                

            </ul>
            <div className={navCSS.Nav_btns}>
                <button className={navCSS.btn} onClick={()=>navigate('/payment')}>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}
export default Nav