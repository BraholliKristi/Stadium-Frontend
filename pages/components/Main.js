
import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import EventCards from "./EventsCards";
export default function Main(props){
    console.log(props.data.length)
    return(
        <>
            <div className={"grid grid-cols-12"}>
                <h2 className={"col-span-12 animate-pulse text-3xl font-bold pt-10 text-center"}>
                    Upcoming events
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
