import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Main from "./components/Main";
import {fetchEvents} from "../lib/api";
import CarouselSlide from "./components/carouselSlider";

export default function home(props) {
console.log(props.data.length)
  return (
      <>
        <NavBar/>
          <CarouselSlide/>
          <Breadcrums Title={"Leatest Events"}/>
          <Main data={props.data}/>
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
