import NavBar from "../components/NavBar";
import Image from "next/image";
import Breadcrums from "../BreadCrums";
import Main from "./Main";
import Footer from "../components/Footer";
import fetchZones, {fetchAvailableSeats, fetchEvent} from "../../lib/api";

function Details({data, seatsAvailable,id,Zones}){
    return(
        <>
            <NavBar/>
            <Image src={"/img/"+data[0].carousel_image_path} width={1920} height={900}/>
            <Breadcrums/>
            <Main data={data} eventId={id} Zones={Zones} AvailableSeats={seatsAvailable}/>
            <Footer/>
        </>
    )
}

export async function getServerSideProps(context) {

    let id=context.query.id;
    const data=await fetchEvent(id);
    const seatsAvailable=await fetchAvailableSeats(id);
    const Zones=await fetchZones();
    console.log(Zones.length);
    return {
        props: {
            data,
            id,
            seatsAvailable,
            Zones
        }
    };
}
export default Details;