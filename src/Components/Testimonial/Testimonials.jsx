import React from "react";
import testimonialCSS from './../Testimonial/Testimonials.module.css'
import Nav from "../Nav/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";
import img1 from './../../assets/pic1.avif'
import img2 from './../../assets/pic2.avif'
import img3 from './../../assets/pic3.avif'



function Testimonial(){
    return(
        <><Nav/>
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
        <small className="section_Heading">Testimonials</small>
        <h2 className="section_Title">What Our Clients Says</h2>
           <Swiper
            slidesPreview={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay:1000,
            }}
            speed={2000}
            modules={[Autoplay]}
            className={testimonialCSS.swiper}
    
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Dhanush </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, sint quae officia corporis consectetur molestiae sequi libero, 
                                minima alias nisi ducimus veritatis, non expedita accusamus voluptates excepturi distinctio animi enim!</p>
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Vijay</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, sint quae officia corporis consectetur molestiae sequi libero, 
                                minima alias nisi ducimus veritatis, non expedita accusamus voluptates excepturi distinctio animi enim!</p>
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>Surya </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, sint quae officia corporis consectetur molestiae sequi libero, 
                                minima alias nisi ducimus veritatis, non expedita accusamus voluptates excepturi distinctio animi enim!</p>
                        </div>
                    </div>
                </SwiperSlide>
           </Swiper>
            </div></>
    )
}
export default Testimonial