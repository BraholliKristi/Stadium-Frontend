import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Image from "next/image";
import img1 from "../public/img/bck1.jpg";
import CarouselSlide from "./components/carouselSlider";
import Room from "../public/img/Room.jpg";
import Link from "next/link";
import {fetchEvents, fetchRooms, fetchRoomsByTypes, fetchRoomsTypes} from "../lib/api";
import RoomTypes from "./rooms/RoomTypes";
import VideoHeader from "./components/VideoHeader";
export default function Rooms({data,types}) {

    return (
        <div className={"bg-red-100"}>
            <NavBar/>
            <VideoHeader url={"/video/bck2Intro.mp4"} title={"THE BEST ACCOMMODATION"}/>
            <Breadcrums Title={"Rooms"}/>
            <RoomTypes types={types} data={data}/>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetchRoomsByTypes();
    const types=await fetchRoomsTypes();
    console.log(types)
    console.log(data);
    return {
        props: {
            data,
            types
        }
    };
}
