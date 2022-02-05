import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import fusha from "../../public/img/fusha.jpg";
import Link from "next/link";
export default function ChosenEvent(props){
    return(
        <div className={"col-span-12 p-10"}>
                    <div className={"w-full shadow-2xl grid grid-cols-4 border group-hover:border-2"}>
                        <div className="max-w-sm rounded border-r border-black overflow-hidden shadow-lg hover:shadow-red-200">
                            <Image className="w-full" width={380} height={200} src={img1} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{props.data.name}</div>
                                <div className="text-xl">
                                    <p className="text-gray-700 text-strong">
                                        <b>Date:</b> {props.data.date}
                                    </p>
                                    <p className="text-gray-700 text-strong">
                                        <b> Time:</b> {props.data.time}
                                    </p>
                                </div>
                                <p className="text-gray-700 text-base">
                                    {props.data.description}
                                </p>
                            </div>

                        </div>
                        <div className={" col-span-2 p-10 text-center font-bold text-xl"}>
                            Zones of Air Albania
                            <Image src={fusha} width={800} height={400}/>
                        </div>
                        <div className={"flex col-start-4 col-span-1 grid grid-cols-1 justify-end items-end"}>
                            <div>
                                Select Zone:
                                <select className={"mx-auto h-10 w-full text-xl border p-2"}>
                                    <option>
                                        A
                                    </option>
                                </select>
                            </div>
                            <div>
                                Select Seat:
                                <select className={"mx-auto h-10 w-full text-xl border p-1"}>
                                    {/*props.seats.map((seat,index)=>{
                                        return(
                                            <option key={index}>
                                                {seat.chair_number}
                                            </option>
                                        )
                                    })*/}
                                </select>
                            </div>
                           <div className={"flex justify-end text-end"}>
                               <button
                                   className="bg-red-900 flex group hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-400 hover:border-red-500 rounded">
                                   Check In
                               </button>
                           </div>
                        </div>

                    </div>
        </div>
    )
}

//