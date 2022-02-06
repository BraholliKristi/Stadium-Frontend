import NavBar from "../components/NavBar";
import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import Breadcrums from "../BreadCrums";
import Main from "../rooms/Main";
import Footer from "../components/Footer";
import {
    fetchAvaliableSeats,
    fetchEvent,
    fetchRoom,
    fetchRooms,
    fetchRoomsByTypes,
    fetchRoomsTypes
} from "../../lib/api";

function Details({data, type}) {
    return (
        <>
            <NavBar/>
            <Image src={img1} width={1920}/>
            <Breadcrums Title={"Check-Out"}/>
            <Main data={data} type={type}/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    let type = context.query.id;
    const data = await fetchRoom(type);
    console.log(data)
    return {
        props: {
            data,
            type
        }
    };
}

export default Details;
