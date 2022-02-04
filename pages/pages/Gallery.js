import Navbar from "../components/NavBar";
import React from "react";
import BreadCrums from "../components/BreadCrums";
import FooterPage from "../components/Footer";

export default function Gallery(){
    return(
        <div>
            <Navbar/>
            Gallery Page
            <BreadCrums parent={"Air Albania"} child={"Gallery"} lastchild={"All"}/>
            <FooterPage/>
        </div>
    );
}
