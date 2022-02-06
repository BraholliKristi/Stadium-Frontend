async function fetchAPI(resQuery,shouldBeIndexed) {
    const res = await fetch(resQuery, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await res.json()

    if (json.errors) {
        throw new Error('Failed to fetch API')
    }
    if(shouldBeIndexed){
        return json[0];
    }else{
        return json;
    }
}

export async function fetchCategory(county, slug) {
    const resQuery= `${process.env.NEXT_PUBLIC_STRAPI_API_URL}?filters[county][$contains]=${county}&filters[slug][$eq]=${slug}`;
    return fetchAPI(resQuery,true);
}
export async function fetchEvents() {
    const resQuery= `http://dev-local.airalbania.com/api/events/latest`;
    return fetchAPI(resQuery,false);
}
export async function fetchRooms(){
    const resQuery= `http://dev-local.airalbania.com/api/rooms/all`;
    return fetchAPI(resQuery,false);
}
export async function fetchRoomsTypes(){
    const resQuery= `http://dev-local.airalbania.com/api/rooms/room-types`;
    return fetchAPI(resQuery,false);
}
    export async function fetchRoomsByTypes(){
        const resQuery= `http://dev-local.airalbania.com/api/rooms/room-type-groups`;
        return fetchAPI(resQuery,false);
    }
export async function fetchAllEvents() {
    const resQuery= `http://dev-local.airalbania.com/api/events/upcoming`;
    return fetchAPI(resQuery,false);
}
export async function fetchAvailableSeats(eventId,zoneId) {
    const resQuery= `http://dev-local.airalbania.com/api/ticket/seats/`+eventId+`/`+zoneId;
    return fetchAPI(resQuery,false);
}
///
export async function fetchEvent(id) {
    const resQuery= `http://dev-local.airalbania.com/api/events/`+id;
    return fetchAPI(resQuery,false);
}
export async function fetchRoom(type){
    const resQuery= `http://dev-local.airalbania.com/api/rooms/room-types/`+type;
    return fetchAPI(resQuery,false);
}
export async function fetchRoomById(id){
    const resQuery= `http://dev-local.airalbania.com/api/rooms/`+id;
    console.log(resQuery);
    return fetchAPI(resQuery,false);
}
export default function fetchZones(){
    const resQuery= `http://dev-local.airalbania.com/api/ticket/zones`;
    return fetchAPI(resQuery,false);
}