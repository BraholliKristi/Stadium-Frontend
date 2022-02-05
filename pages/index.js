import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Main from "./components/Main";
import fetchZones, {fetchAvailableSeats, fetchEvent, fetchEvents} from "../lib/api";
import CarouselSlide from "./components/carouselSlider";
import bck1 from "../public/img/bck1.jpg";
import VideoHeader from "./components/VideoHeader";
export default function home(props) {
console.log(props.data.length)
    let Bcks=['bck1.jpg','bck2.jpg','bck3.jpg'];
  return (
      <>
        <NavBar/>
          <VideoHeader url={"/video/bckIntro.mp4"} title={"WELCOME TO AIR ALBANIA"}/>
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
