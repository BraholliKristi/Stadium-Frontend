import {useEffect, useState} from "react";
import axios from "axios";

function FetchData(apiUrl) {
    console.log(apiUrl);
    const EVENTS_API_URL=apiUrl;
    const [events, setEvents] = useState([])
  
    const getAllEvents = () => {
        axios.get(`${EVENTS_API_URL}`).then((response) => {
            setEvents(response.data);
        });

    }
    useEffect(() => {
    
        getAllEvents();
 
    }, []);

  return events;
}

export default FetchData;