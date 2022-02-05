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
export async function fetchAllEvents() {
    const resQuery= `http://dev-local.airalbania.com/api/events/upcoming`;
    return fetchAPI(resQuery,false);
}
export async function fetchAvaliableSeats(id) {
    const resQuery= `http://dev-local.airalbania.com/api/ticket/available-tickets/`+id;
    return fetchAPI(resQuery,false);
}
///
export async function fetchEvent(id) {
    const resQuery= `http://dev-local.airalbania.com/api/events/`+id;
    return fetchAPI(resQuery,false);
}
export async function fetchRoom(id){
    const resQuery= `http://dev-local.airalbania.com/api/rooms/`+id;
    return fetchAPI(resQuery,false);
}