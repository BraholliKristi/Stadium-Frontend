import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "/public/img/logo.png"
export default function NavBar(){
    return(
            <div className={"bg-gray-900 grid grid-cols-12 text-white p-4"}>
                <div className={"col-span-4 "}>
                   <Link href={"/"}>
                       <a>
                           <Image className={"bg-white"} src={logo} width={100} height={30}></Image>
                       </a>
                   </Link>
                </div>
                <div className={"col-span-8 grid grid-cols-12"}>
                    <div className={"col-span-3 text-center border-b-2 mx-10 border-transparent hover:hover:border-b-red-700"}>
                        <Link className={"hover:bg-red-700"} href={"/"}>Home</Link>
                    </div>
                  <div className={"col-span-3  text-center border-b-2 mx-10 border-transparent hover:hover:border-b-red-700"}>
                    <Link href={"/events"}>Events</Link>
                   </div>
                    <div className={"col-span-3 text-center border-b-2 mx-10 border-transparent hover:hover:border-b-red-700"}>
                    <Link href={"/rooms"}>Rooms</Link>
                    </div>
                    <div className={"col-span-3 text-center border-b-2 mx-10 border-transparent hover:hover:border-b-red-700"}>
                    <Link href={"/gallery"}>Gallery</Link>
                    </div>
                    <div className={"col-span-3 text-center border-b-2 mx-10 border-transparent hover:hover:border-b-red-700"}>
                        <Link href={"/Login"}>Login</Link>
                    </div>
                </div>
            </div>
    )
}
