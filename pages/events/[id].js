import NavBar from "../components/NavBar";
import Image from "next/image";
import Breadcrums from "../BreadCrums";
import Main from "./Main";
import Footer from "../components/Footer";
import {fetchAvailableSeats, fetchEvent} from "../../lib/api";

function Details({data, seatsAvailable}){
    return(
        <>
            <NavBar/>
            <Image src={"/img/"+data[0].carousel_image_path} width={1920} height={400}/>
            <Breadcrums/>
            <Main data={data} AvailableSeats={seatsAvailable}/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query.id);
    let id=context.query.id;
    const data=await fetchEvent(id);
    const seatsAvailable=await fetchAvailableSeats(id);
    return {
        props: {
            data,
            seatsAvailable
        }
    };
}
export default Details;