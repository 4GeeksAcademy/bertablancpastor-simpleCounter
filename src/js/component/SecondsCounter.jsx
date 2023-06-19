import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';


//SecondsCounter Component
const SecondsCounter = (props) => {
    return (
        <>
            <div className="d-flex bg-black justify-content-center p-5">
                <div className="card m-1">
                    <div className="card-body">
                        <p className="col-lg-1 display-5 m-0"><FontAwesomeIcon icon={faClock} /></p>
                    </div>
                </div>
                <div className="card m-1 ">
                    <div className="card-body">
                        <h1 className="card-title">{props.digit6}</h1>
                    </div>
                </div>
                <div className="card m-1 ">
                    <div className="card-body">
                        <h1 className="card-title">{props.digit5}</h1>
                    </div>
                </div>

                <div className="card m-1 ">
                    <div className="card-body">
                        <h1 className="card-title">{props.digit4}</h1>
                    </div>
                </div>
                <div className="card m-1 ">
                    <div className="card-body">
                        <h1 className="card-title">{props.digit3}</h1>
                    </div>
                </div>

                <div className="card m-1">
                    <div className="card-body">
                        <h1 className="card-title">{props.digit2}</h1>
                    </div>
                </div>
                <div className="card m-1">
                    <div className="card-body">
                        <h1 className="card-title text-black">{props.digit1}</h1>
                    </div>
                </div>
            </div>
            
        </>

    );
};

export default SecondsCounter;



// <div className="d-flex bg-black justify-content-center p-1" >
//                 <a href="#" className="btn btn-secondary m-3">Stop</a>
//                 <a href="#" className="btn btn-secondary m-3">Reset</a>
//                 <a href="#" className="btn btn-secondary m-3">Resume</a>             
// </div> 