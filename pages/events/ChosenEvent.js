import Image from "next/image";
import fusha from "../../public/img/fusha.jpg";
import Link from "next/link";
import {useState} from "react";
import {fetchAvailableSeats} from "../../lib/api";

export default function ChosenEvent(props){
   const Zones=props.Zones;
   const [SelectedZone,setSelectedZone]=useState(null);
    const [SelectedSeat,setSelectedSeat]=useState(null);
   const [AvaliableSeats,setAvaliableSeats]=useState([]);
   let seatId;
    async function HandleChooseZone(zone){
        console.log(zone);
        setSelectedZone(zone);

       setAvaliableSeats( (await fetchAvailableSeats(props.id,zone)));
       console.log(AvaliableSeats)
    }
    async function HandleChooseSeat(seat){
        console.log(seat);
        setSelectedSeat(seat);
    }
    async function submitReservation(ZoneId,SeatId){
         console.log(ZoneId,SeatId)
         const response=await fetch('http://dev-local.airalbania.com/api/ticket/reserve',{
             method: 'POST',
             body: JSON.stringify({
                 date:"2022-02-05",
                 seat_id:SeatId,
                 price:1000,
                 event_id:9,
             }),
             headers:{
                 'Content-Type':'application/json',
             },
         })
        console.log(response)
         const data=await response.json();
         console.log(data);
    }
    return(
        <div className={"col-span-12 p-10"}>
                    <div className={"w-full shadow-2xl grid grid-cols-4 border group-hover:border-2"}>
                        <div className="max-w-sm rounded border-r border-black overflow-hidden shadow-lg hover:shadow-red-200">
                            <Image className="w-full" width={380} height={200} src={"/img/"+props.data.image_path} alt="Sunset in the mountains"/>
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
                                <select  onChange={(e) => {
                                    HandleChooseZone(e.target.value);
                                }} id="zone-select" className={"mx-auto h-10 w-full text-xl border p-2"}>
                                    {Zones.map((element,index)=>{
                                      return(  <option key={index} value={element}>{element}</option>);
                                    })}
                                    </select>
                            </div>
                            <div className={SelectedZone==null ? "hidden" : "block"}>
                                Select Seat:

                                <select required onChange={(e) => {
                                    HandleChooseSeat(e.target.value);
                                }} id="seat-select" className={"mx-auto h-10 w-full text-xl border p-1"}>
                                    {AvaliableSeats.map((element,index)=>{
                                        console.log(element);
                                        return( <option key={index} value={element.id} >{element.chair_number}</option>);
                                    })}
                                </select>
                            </div>
                           <div className={SelectedZone==null ? "hidden" : "flex justify-end text-end"}>
                               <button onClick={(e) => {
                                   submitReservation(SelectedZone,SelectedSeat);
                               }}
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