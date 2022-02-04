import {Carousel} from "react-bootstrap";
import React from "react";
import event1 from "../../../public/img/event1.jpg";
import event2 from "../../../public/img/event2.jpg";
import event3 from "../../../public/img/event3.jpg";

export default function EventCarousel(){
    return(

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className={""}>WE CREATE MEMORIES THAT WIL LAST FOREVER</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                     <h1 className={""}>ENTERTAIMENT</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={event3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                       <h1 className={""}>STRONG EMOTIONS</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
