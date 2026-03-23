import React from "react";
import Nav from "../Nav/Nav";
import {Swiper, SwiperSlide}from 'swiper/react'
import 'swiper/css'
import AminitiesCSS from './Aminities.module.css'
import img1 from './../../assets/swim.avif'
import img2 from './../../assets/garden.avif'
import img3 from './../../assets/car.avif'
import { Autoplay } from "swiper/modules";

function Aminities(){
    return(
        <><Nav/>
        <div className={`${AminitiesCSS.aminities_wrapper} section`}>
            <small className="section_Heading">VibeNoW Amenities</small>
            <h2 className="section_Title">Our Best Amenities</h2>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay:1000,
            }}
            speed={2000}
            modules={[Autoplay]}
            className={AminitiesCSS.swiper}

            
            >
                <SwiperSlide>
                    <div className={AminitiesCSS.aminities_item}>
                        <img src={img1} alt="" />
                        <div className={AminitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque fuga rerum hic assumenda? 
                                Quo sequi aperiam voluptas corporis dignissimos placeat eos.
                                 Perspiciatis, suscipit? Voluptatibus quos deleniti maxime veritatis neque!</p>
                                 <button>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className={AminitiesCSS.aminities_item}>
                        <img src={img2} alt="" />
                        <div className={AminitiesCSS.content}>
                            <h2>Playground</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque fuga rerum hic assumenda? 
                                Quo sequi aperiam voluptas corporis dignissimos placeat eos.
                                 Perspiciatis, suscipit? Voluptatibus quos deleniti maxime veritatis neque!</p>
                                 <button>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className={AminitiesCSS.aminities_item}>
                        <img src={img3} alt="" />
                        <div className={AminitiesCSS.content}>
                            <h2>Car Parking</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque fuga rerum hic assumenda? 
                                Quo sequi aperiam voluptas corporis dignissimos placeat eos.
                                 Perspiciatis, suscipit? Voluptatibus quos deleniti maxime veritatis neque!</p>
                                 <button>Book Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div></>
    )
}
export default Aminities