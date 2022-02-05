import NavBar from "../components/NavBar";
import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import Breadcrums from "../BreadCrums";
import Main from "../rooms/Main";
import Footer from "../components/Footer";
import {fetchAvaliableSeats, fetchEvent, fetchRoom, fetchRooms} from "../../lib/api";

function Details({data/*, seatsAvaliable*/}){
    return(
        <>
            <NavBar/>
            <Image src={img1} width={1920}/>
            <Breadcrums Title={"Check-Out"}/>
            <Main data={data} /*AvaliableSeats={seatsAvaliable}*//>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    let id=context.query.id;
    const data=await fetchRoom(id);
    return {
        props: {
            data,
            //seatsAvaliable
        }
    };
    }
export default Details;