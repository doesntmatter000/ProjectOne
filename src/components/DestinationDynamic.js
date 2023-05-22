import React from 'react';
import "./DestinationStyle.css"

const DestinationDynamic = (props) => {
    return (
        <div className={props.class}>
            <div className="des-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img src={props.img1} alt="image"/>
                <img src={props.img2} alt="image"/>
            </div>
        </div>
    );
};

export default DestinationDynamic;