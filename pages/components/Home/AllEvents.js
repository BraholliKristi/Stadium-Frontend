import EventCard from "../../components/Card";
import {Row} from "react-bootstrap";
import FetchData from "../FetchData";

export default function AllEvents(){
    let ApiData=FetchData(" http://dev-local.airalbania.com/api/events/all");
    return(
        <>
            <div className={"justify-center py-5 text-black"}>
                <h2 className={"justify-center text-center"}>
                    ALL EVENTS
                </h2>
                <Row xs={1} md={3} className="g-5 px-5 py-4  text-black Main">
                    {ApiData.map(( element ,index )=>{
                       return(
                           <EventCard key ={index} data={element}/>
                       )
                    })
                   }
                </Row>
            </div>
        </>
    );
}
