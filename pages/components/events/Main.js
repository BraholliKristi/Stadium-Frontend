import EventCards from "./EventsCards";

export default function Main(props){
    console.log(props.data.length)
    return(
        <>
            <div className={"grid grid-cols-12"}>
                <h2 className={"col-span-12 animate-pulse text-3xl font-bold pt-10 text-center"}>
                    All Events
                </h2>
                {props.data.map((event)=>{
                    return(
                        <EventCards data={event}/>
                    );
                })}

            </div>
        </>
    );
}
