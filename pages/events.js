import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import img1 from "../public/img/bck1.jpg";
import Image from "next/image";
import Main from "./components/events/Main";
import {fetchAllEvents, fetchEvents} from "../lib/api";

export default function home(props) {
    console.log(props.data.length)
    return (
        <>
            <NavBar/>
            <Image src={img1} width={1920}/>
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
