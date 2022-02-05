import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import {image} from "tailwindcss/lib/util/dataTypes";

export default function CarouselSlide(props) {
    if (props.image) {
        image = props.image.map((roomImage)=>{
            console.log("/public/img/"+roomImage)
            return(
                <SwiperSlide><Image src={"/img/"+roomImage} width={1920} height={800}/></SwiperSlide>

            )
        });
    }
    else {
        image = props.data.map((element)=>{
            console.log("/public/img/"+element.image_path)
            return(
                <SwiperSlide><Image src={"/img/"+element.image_path} width={1920} height={800}/></SwiperSlide>
            )
        });
    }
    console.log(props.data);
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
                {image}
            </Swiper>
        </>
    );
}
