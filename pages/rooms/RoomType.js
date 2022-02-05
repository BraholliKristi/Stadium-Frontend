import CarouselSlide from "../components/carouselSlider";
import Link from "next/link";

export default function RoomType({type,data,index,ImagesForType}){
    return (
        <div key={index}
             className={"w-full  relative text-left col-span-1   bg-red-100"}>
            <div className={(index%2==0)? "col-span-2 m-5 mt-0" :  "m-5 mt-0  col-span-2 "}>
                <div className={"text-left text-4xl py-5"}>
                    {type}
                </div>
                <CarouselSlide data={data} image={ImagesForType} />
                <div className={"w-full relative bg-white font-bold text-2xl -mt-2 mb-5 p-5 rounded-b-2xl"}>
                    <Link href={"/roomPrenotation/"+type}>
                        <a>
                            <button
                                className={(index%2==0)? "bg-gradient-to-r from-cyan-500 to-blue-500 text-sm p-3 rounded-2xl text-white border border-green-900 hover:bg-green-800 top-5 left-96" :  "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm p-3 rounded-2xl text-white border border-green-900 hover:bg-green-800 top-5 left-96"}
                               >
                                Reserve Now
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}