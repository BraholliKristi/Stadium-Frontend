import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Image from "next/image";
import img1 from "../public/img/bck1.jpg";
import CarouselSlide from "./components/carouselSlider";
import Room from "../public/img/Room.jpg";
import Link from "next/link";
import {fetchEvents, fetchRooms} from "../lib/api";

export default function Rooms({data}) {
    return (
        <div className={"bg-red-100"}>
            <NavBar/>
            <Image src={img1} width={1920} height={500}/>
            <Breadcrums Title={"Rooms"}/>
            {data.map((element, index) => {
                return (
                    <div key={index}
                         className={"w-full grid relative text-left   grid-cols-4 bg-red-100"}>
                        <div className={(index%2==0)? "col-span-3 m-20 mt-0" :  "m-20 mt-0 col-start-2 col-span-3"}>
                            <div className={"text-left text-4xl py-5"}>
                                {element.type}
                            </div>
                            <CarouselSlide image={Room}/>
                            <div className={"w-full relative bg-white font-bold text-2xl -mt-2 mb-5 p-5 rounded-b-2xl"}>
                                <Link href={"/roomPrenotation/"+element.id}>
                                    <a>
                                        <button
                                            className={"absolute bg-green-500 text-sm p-3 rounded-2xl text-white border border-green-900 hover:bg-green-800 top-5 left-96"}>
                                            Reserve Now
                                        </button>
                                    </a>
                                </Link>
                                {element.name}
                                <div className={"w-full bg-white font-bold text-lg -mt-2 mb-5 p-5 rounded-b-2xl"}>
                                    {element.description}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Footer/>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetchRooms();
    console.log(data);
    return {
        props: {
            data,
        }
    };
}
