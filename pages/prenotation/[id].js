import NavBar from "../components/NavBar";
import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import Breadcrums from "../BreadCrums";
import Main from "../components/Main";
import Footer from "../components/Footer";
import {fetchAvaliableSeats, fetchEvent} from "../../lib/api";

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
    console.log(context.query.id);
    let id=context.query.id;
    const data=await fetchEvent(id);
    const seatsAvaliable=await fetchAvaliableSeats(id);
    console.log(seatsAvaliable);
    return {
        props: {
            data,
            //seatsAvaliable
        }
    };
    }
export default Details;