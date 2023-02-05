import React from "react";
import ReactDom from "react-dom";
import Avatar from "./Avatar";

function Card(props){
    return(
        <div className="card">
            <h1 className="fname">{props.name}</h1>
            <Avatar img={props.img}/>
            <h2>{props.mob}</h2>
            <p>{props.name}@email.com</p>
        </div>
    )
}

export default Card;