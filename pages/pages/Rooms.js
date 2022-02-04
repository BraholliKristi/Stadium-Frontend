import Navbar from "../components/NavBar";
import React from "react";
import BreadCrums from "../components/BreadCrums";
import FooterPage from "../components/Footer";

export default function Rooms(){
    return(
        <div>
            <Navbar/>
            RoomsPage
            <BreadCrums parent={"Air Albania"} child={"Rooms"} lastchild={"All"}/>
            <FooterPage/>
        </div>
    );
}
