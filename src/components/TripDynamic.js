import React from 'react';
import "./DestinationStyle.css"

const TripDynamic = (props) => {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.img1} alt="image"/>
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
};

export default TripDynamic;