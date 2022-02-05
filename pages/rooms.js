import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Image from "next/image";
import img1 from "../public/img/outer.jpg";
import {fetchEvents, fetchRooms, fetchRoomsByTypes, fetchRoomsTypes} from "../lib/api";
import RoomTypes from "./rooms/RoomTypes";

export default function Rooms({data,types}) {
    return (
        <div className={"bg-red-100"}>
            <NavBar/>
            <Image src={img1} width={1920} height={500}/>
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
