import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import img1 from "../public/img/bck1.jpg";
import Image from "next/image";
import Main from "./components/events/Main";
import {fetchAllEvents, fetchEvents} from "../lib/api";
import CarouselSlide from "./components/carouselSlider";

export default function home(props) {
    console.log(props.data.length)
    let Bcks=['event3.jpg','bck1.jpg','event1.jpg','bck2.jpg','event2.jpg','bck3.jpg'];
    return (
        <>
            <NavBar/>
            <CarouselSlide image={Bcks}/>
            <Breadcrums Title={"All Events"}/>
            <Main data={props.data}/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps() {
    const data=await fetchAllEvents();
    return {
        props: {
            data,
        }
    };
}
