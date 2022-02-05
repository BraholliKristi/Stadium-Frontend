import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bck1 from "../../public/img/bck1.jpg"

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
export default function CarouselSlide(props) {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={props.image} width={1920} height={500}/></SwiperSlide>
                <SwiperSlide><Image src={props.image} width={1920} height={500}/></SwiperSlide>
            </Swiper>
        </>
    );
}
