import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 8" /></SwiperSlide>
        <SwiperSlide><img src="https://www.istockphoto.com/resources/images/HomePage/FourPack/C2-Photos-iStock-1356197695.jpg" alt="Slide 9" /></SwiperSlide>
      </Swiper>
    </>
  );
}
