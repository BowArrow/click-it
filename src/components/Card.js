import React from "react";
import { Col } from "./Grid";

function Card(props) {
    return (
        <Col size="md-3">
            <button className="btn p-2 card-size" data-id={props.id} key={props.key} onClick={() => props.checkIfClicked(props.id)}><img className="mt-1 center-cropped" alt={props.name} src={props.image}></img></button>
        </Col>
    )
}

export default Card;