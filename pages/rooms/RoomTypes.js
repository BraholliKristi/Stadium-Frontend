import CarouselSlide from "../components/carouselSlider";
import Link from "next/link";
import RoomType from "./RoomType";

export default function RoomTypes({types,data}){
    return(
        <div className={"grid grid-cols-3"}>
            {
                types.map((type,index)=>{
                    let ImagesForType=[];
                    data[type].map((room)=>{
                        console.log(type+"--->>>>"+room.id+") "+room.name+ " Image="+room.image_path);
                        ImagesForType.push(room.image_path);
                    })
                    return(<RoomType type={type} ImagesForType={ImagesForType} data={data} index={index}/>)
                })
            }
        </div>


    )
}