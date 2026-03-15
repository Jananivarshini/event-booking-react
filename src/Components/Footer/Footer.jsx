import React from 'react'
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
  return (
   <footer className={`${footerCSS.footer_wrapper} section`}>
       <div className={footerCSS.FooterLinks}>
        <div className={footerCSS.logo}>
            <h2>VibeNoW</h2>
            <p>VibeNoW is your go-to platform for booking venues, organizing events,
                 and creating unforgettable experiences. We simplify event planning from start to finish.</p>
        </div>
       </div>
       
       <div className={footerCSS.FooterLinks}>
        <h3>City Branches</h3>
        <p>Kanyakumari</p>
        <p>Madurai</p>
        <p>Tirunelveli</p>
       </div>
       <div className={footerCSS.FooterLinks}>
        <h3>Contact</h3>
        <p>Address : 360 Street-Kanyakumari , India</p>
        <p>Email : VibeNoW@gmail.com</p>
        <p>Phone : +91 9876543210</p>
       </div>
   </footer>
  )
}

export default Footer
