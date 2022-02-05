import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Main from "./components/events/Main";
import {fetchAllEvents, fetchEvents} from "../lib/api";
import CarouselSlide from "./components/carouselSlider";

export default function home(props) {
    console.log(props.data.length)
    return (
        <>
            <NavBar/>
            <CarouselSlide data={props.data}/>
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
