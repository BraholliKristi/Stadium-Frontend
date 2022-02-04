import {Carousel} from "react-bootstrap";
import React from "react";
import bck1 from "../../../public/img/bck1.jpg";
import bck2 from "../../../public/img/bck2.jpg";
import bck3 from "../../../public/img/bck3.jpg";
export default function HeaderCarousel(){
    return(

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bck1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className={""}>Welcome to Air Albania</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bck2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className={""}>Welcome to Air Albania</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bck3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className={""}>Welcome to Air Albania</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
