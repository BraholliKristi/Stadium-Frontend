import FetchData from "../FetchData";

export default function Main(props){
    return(
       <div className={"text-dark text-center"}>
           <h1 className={"pt-5"}>
               {props.data.name}
           </h1>
           <h4>
               {props.data.date}
           </h4>
           <h5>
               {props.data.description}
           </h5>
       </div>
    )
}