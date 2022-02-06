import Image from "next/image";
import img1 from "../../public/img/bck1.jpg";
import Link from "next/link";
import RoomType from "./RoomType";
import CarouselSlide from "../components/carouselSlider";
import {useState} from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import {fetchRoomById} from "../../lib/api";

export default function ChosenRoom(props) {
    let ImagesForType = [];
    props.data.map((room) => {
        console.log("--->>>>" + room.image_path);
        ImagesForType.push(room.image_path);
    })
    console.log("<>" + (ImagesForType[0]))
    let [roomSelected, setRoomSelected] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [roomId, setroomId] = useState();
    const [currentRoomImg,setcurrentRoomImg]=useState(null);
    async function SaveRoomId(id){
        alert("Helloss")
        setroomId(id);
    }
    async function HandleRoom(id) {
        setRoomSelected(id);
        console.log((await fetchRoomById(id))['image_path']);
        setcurrentRoomImg((await fetchRoomById(id))['image_path']);
    }
    async function submitReservation(RoomId, StartDate,EndDate) {
        alert("Hello")
        const response = await fetch('http://dev-local.airalbania.com/api/hotel/reserve', {
            method: 'POST', body: JSON.stringify({
                room_id: RoomId,  start_date:StartDate, end_date: EndDate,
            }), headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response)
        const data = await response.json();
        alert(data.message);
    }
    async function HandleStartingDate(date) {
        console.log(date);
        setStartDate(date)
    }

    async function HandleEndDate(date) {
        console.log(date);
        if (date <= startDate) {
            setEndDate(startDate);
        } else {
            setEndDate(date);
        }
    }

    return (
        <div className={"col-span-12 p-5"}>
            <div
                className={"w-full shadow-2xl grid grid-cols-4 border grid gid-cols-1 group-hover:border-2 p-3 items-center"}>
                <div>
                    <div className={"p-2"}>
                        Select Room:
                        <select onChange={(e) => {
                            HandleRoom(e.target.value);
                        }} className={"mx-auto h-10 w-full text-xl border p-1"}>
                            {props.data.map((room, index) => {
                                return (
                                    <option onSelect={(e) => {
                                        SaveRoomId(room.room_id)
                                    }} key={index} accessKey={index} value={room.id}>
                                        {room.name}
                                    </option>
                                );
                            })}

                        </select>
                    </div>
                    <div className={"p-2"}>
                        Start Date:
                        <input onChange={(e) => {
                            HandleStartingDate(e.target.value);
                        }} type={"date"}/>
                    </div>
                    <div className={"p-2"}>
                        End Date:
                        <input onChange={(e) => {
                            HandleEndDate(e.target.value);
                        }} type={"date"}/>
                    </div>
                </div>
                <div
                    className="col-start-2 col-span-2 h-full rounded w-full border-r border-black overflow-hidden shadow-lg hover:shadow-red-200 items-center">
                    <CarouselSlide image={ImagesForType}/>
                    <p className="text-gray-700 text-strong">
                        <b>Room Type:</b> {props.type}
                    </p>
                </div>
                <div className={"flex col-start-4 col-span-1 grid grid-cols-1 justify-end items-end"}>

                    <div className={"flex justify-end text-end"}>
                        <button onClick={(e) => {
                            submitReservation(roomSelected, startDate,endDate);
                        }}
                            className="bg-red-900 flex group hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-400 hover:border-red-500 rounded">
                            Check In
                        </button>
                    </div>
                </div>
                <div className={(roomSelected == "") ? "hidden" : " col-span-4 h-full py-10 px-2 justify-center flex"}>
                    <Image src={"/img/" +currentRoomImg} width={800} height={500}></Image>
                </div>
            </div>
        </div>
    )
}


//