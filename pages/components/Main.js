
import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import EventCards from "../components/EventsCards";
export default function Main(props){
    console.log(props.data.length)
    return(
        <>
            <div className={"grid grid-cols-12"}>
                <h2 className={"col-span-12 animate-pulse text-3xl font-bold pt-10 text-center"}>
                    Leatest Events
                </h2>
                {props.data.map((event)=>{
                    return(
                        <EventCards data={event}/>
                    );
                })}

            </div>
        </>
    );
}
