import React from 'react';
import "./Home.css";
import {hmsmallImages,about,testimonials} from '../../Data/Data';
import ItemStatic from './ItemStatic';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Home() {
  return (
    <>
        <section className="banner">
            <h1>Breakfast | Lunch | Dinner</h1>
            <p>All Your Meal Just Rs. 99/- Only.</p>
            <button>Book Your Table Now</button>
        </section>
        <section className="small-images">
            {  hmsmallImages.map((items,i)=>
                <ItemStatic  items={items} key={i} />
            ) 
            }
        </section>
        <section className='about-us'>
            <h2>{about.heading}</h2>
            <p>{about.description}</p>
            <button className='about-btn'>Read More</button>
        </section>
            <section class='testimonials'>
                <h2>Testimonials</h2>
        <Swiper spaceBetween={30} centeredSlides={true} slidesPerView={1} 
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
        {testimonials.map((testimonial,i)=>
        
        <SwiperSlide className='testimonial'>
            <div className="content-left">
                <div className="testimonial-desc">
                    <p>{ testimonial.description }</p>
                </div>
                <div className="testimonial-user">
                    <h2>- { testimonial.name } -</h2>
                    <h3>{ testimonial.designation }</h3>
                </div>
            </div>
            
        </SwiperSlide>
        
        )}
      </Swiper>
      </section>
    </>
  )
}

export default Home;