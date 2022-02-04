import Navbar from "../components/NavBar";
import React from "react";
import BreadCrums from "../components/BreadCrums";
import FooterPage from "../components/Footer";
import bck1 from "../../public/img/bck1.jpg";
import EventCarousel from "../components/Home/EventCarousel";
import {useParams} from "react-router-dom";
import Main from "../components/Tickets/Main";
import useFetch from "react-fetch-hook";
export  default function Tickets(){
    const {data} = useFetch("http://dev-local.airalbania.com/api/events/1");
    console.log({data})
    return(
      <div>
          <Navbar/>
          <EventCarousel />
          <BreadCrums parent={"Air Albania"} child={"Tickets"} lastchild={data[0].name}/>
          <Main Title={useParams().data} data={data[0]}/>
          <FooterPage/>
      </div>
    );
}
