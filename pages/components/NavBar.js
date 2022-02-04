import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function NavBar(){
    return(
            <div className={"bg-gray-900 grid grid-cols-12 text-white p-4"}>
                <div className={"col-span-4"}>

                </div>
                <div className={"col-span-8 grid grid-cols-12"}>
                    <div className={"col-span-3"}>
                        <Link className={"hover:bg-red-700"} href={"/"}>Home</Link>
                    </div>
                  <div className={"col-span-3"}>
                    <Link href={"/events"}>Events</Link>
                   </div>
                    <div className={"col-span-3"}>
                    <Link href={"/rooms"}>Rooms</Link>
                    </div>
                    <div className={"col-span-3"}>
                    <Link href={"/gallery"}>Gallery</Link>
                    </div>
                </div>
            </div>
    )
}
