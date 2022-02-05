import Image from "next/image";
import img1 from "../../../public/img/bck1.jpg";
import Link from "next/link";
export default function EventCards(props){
    return(
        <div className={"col-span-4 p-10"}>
            <Link href={"events/"+props.data.id} >
               <a>
                       <div className="max-w-sm rounded h-full overflow-hidden shadow-lg">
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
                                   {(props.data.description).substring(0,56)+"..."}
                               </p>
                           </div>
                       </div>
               </a>
            </Link>
        </div>
    )
}