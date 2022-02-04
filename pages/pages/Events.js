import Navbar from "../components/NavBar";
import React from "react";
import BreadCrums from "../components/BreadCrums";
import FooterPage from "../components/Footer";
import AllEvents from "../components/Home/AllEvents";
import EventCarousel from "../components/Home/EventCarousel";

export default function Events(){
    return(
        <div>
            <Navbar/>
            <EventCarousel />
            <BreadCrums parent={"Air Albania"} child={"Events"} lastchild={"All"}/>
            <AllEvents />
            <FooterPage/>
        </div>
    );
}
