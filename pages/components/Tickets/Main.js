
import Image from "next/image";
import img1 from "../../../public/img/bck1.jpg";
import ChosenEvent from "./ChosenEvent";

export default function Main(props){
    console.log(props.data.length)
    return(
        <>
            <div className={"grid grid-cols-12"}>
                <h2 className={"col-span-12 text-3xl font-bolder text-center justify-center mt-10 items-center"}>
                    <span className="items-center h-3 w-3">
                      <span className="animate-bounce absolute inline-flex h-6 w-6 rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                        <span className={"animate-pulse text-gray-900 px-10 font-bold mt-10 text-4xl"}> Check-out Now </span>
                         <span className="animate-bounce absolute inline-flex h-6 w-6 rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </h2>

                {props.data.map((event)=>{
                    return(
                        <ChosenEvent data={event} /*seats={props.AvaliableSeats}*//>
                    );
                })}

            </div>
        </>
    );
}
