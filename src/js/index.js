//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;
let digit5 = 0;
let digit6 = 0;

setInterval( () => {
    
    digit1++;

    if (digit1 === 10){
        digit1 = 0;
        digit2++;
        // alert(`Han pasado ${digit2} segundos`)
    } if (digit2 === 10){
        digit2 = 0;
        digit3++
    } if ( digit3 === 10){
        digit3 = 0;
        digit4++
    } if (digit4 ===  10){
        digit4 = 0;
        digit5++
    } if (digit5 === 10){
        digit5 = 0;
        digit6++
    } if (digit6 === 10){
        digit6 = 0;
    }
    
6
    //render your react application
    ReactDOM.render(<Home digit1={digit1} digit2={digit2} digit3={digit3} digit4={digit4} digit5={digit5} digit6={digit6} />, document.querySelector("#app"));
}, 1000)


