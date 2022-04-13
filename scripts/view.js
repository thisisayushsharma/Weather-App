import Location from '../components/Location.js'; 
import Current from '../components/Current.js';
import Forecast from '../components/Forecast.js';
import Search from '../components/Search.js';
import Recents from '../components/Recents.js'
//import * as app from './app.js'

const renderDOM = (html) => document.getElementById('view').innerHTML = html;


export const PlayScene = (props) => { //Function for HTML view
    const {location,current,forecast,recents} = props; //Destructure properties
    let [forecastday] = forecast.forecastday;
    renderDOM( //render the Scene's HTML to DOM
    `${Location(location)}
    ${Current(current)}
    ${Forecast(forecastday)}
    ${Search()}
    ${Recents(recents)}
    `
    )
}
var input;
const element = document.getElementById("name");
if (element != null) {
    input = element.value
}
//else{
  //  input = null;
//}
//export default input.json;
