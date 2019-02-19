import React from "react";
import { Col } from "./Grid";
import Counter from "./Counter";

function Card(props) {
    return (
        <Col size="md-3">
            <a className="btn p-2 card-size" data-id={props.id}><img className="mt-1 center-cropped" alt={props.name} src={props.image}></img></a>
        </Col>
    )
}

export default Card;