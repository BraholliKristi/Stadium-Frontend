import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Main from "./components/Main";
import fetchZones, {fetchAvailableSeats, fetchEvent, fetchEvents} from "../lib/api";
import CarouselSlide from "./components/carouselSlider";

export default function home(props) {
    return (
        <>
        <NavBar/>
          <CarouselSlide data={props.data}/>
          <Breadcrums Title={"Leatest Events"}/>
          <Main data={props.data} />
        <Footer/>
        </>
    )
}

export async function getServerSideProps() {
    const data=await fetchEvents();

    return {
        props: {
            data,

        }
    };
}
