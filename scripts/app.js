import * as http from './http.js' //Import http functions
import * as view from './view.js'

const API_KEY = `8cb5fc7692c74687979215041221104`;
const DEFAULT_LOCATION = `NEW ORLEANS`;
const BIN_ID = '6256242f21e89024ee8baf5a';
const GET_RECENT = `https://api.jsonbin.io/b/${BIN_ID}/latest`;
const PUT_RECENT = `https://api.jsonbin.io/b/${BIN_ID}`;

var state = {};

export const fetchData = async(location) => {
    var GET_WEATHER = `https://cors-everywhere-me.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=`+ API_KEY +`&q=`
    GET_WEATHER = GET_WEATHER + location;
    const json = await http.sendGETRequest(GET_WEATHER);
    //[state] = json;
    [state.location,state.current,state.forecast] = [json.location,json.current,json.forecast];
    [state.recents] = [await http.sendGETRequest(GET_RECENT)];
    //console.log(state.recents);
    view.PlayScene(state); 
}

window.start = async(location) => {
    fetchData(location);
}
window.addEventListener('load', start(DEFAULT_LOCATION));

window.updateRecents = async () => {
    const name = document.getElementById('name').value;
    const currentSearch = {name:name};
    const search = await addSearch(currentSearch);
    await http.sendPUTRequest(PUT_RECENT, search);
    start(name);
}

const addSearch = async (currentSearch) => {
    let recents = await http.sendGETRequest(GET_RECENT);
    recents.unshift( currentSearch );
    recents.pop();
    return recents
    }
    
