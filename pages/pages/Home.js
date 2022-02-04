import React from "react";
import Navbar from "../components/NavBar";
import HeaderCarousel from "../components/Home/HeaderCarousel";
import BreadCrums from "../components/BreadCrums";
import FooterPage from "../components/Footer";
import Main from "../components/Main";
export default function Home(){
    return(
      <div>
          <Navbar/>
          <HeaderCarousel/>
          <BreadCrums parent={"Air Albania"} child={"Home"} lastchild={""}/>
          <Main/>
          <FooterPage/>
      </div>
    );
}
