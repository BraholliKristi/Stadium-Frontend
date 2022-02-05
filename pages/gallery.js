import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breadcrums from "./BreadCrums";
import Image from "next/image";
import img1 from "../public/img/bck1.jpg";


export default function Gallery() {
    return (
        <>
            <NavBar/>
            <Image src={img1} width={1920}/>
            <Breadcrums Title={"Gallery"}/>
            <Footer/>
        </>
    )
}
