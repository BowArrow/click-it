import React from "react";
import Counter from "./Counter";
import { Col } from "./Grid";

function Nav(props) {
    return (
        <nav className="navbar navbar-light blue lighten-4 row">
                <Col size="md-4">
                    <span class="navbar-brand">Play Memory!</span>
                </Col>
                <Col size="md-4">
                    <strong className="float-left"><Counter topCount={props.topCount} count={props.count}/></strong>
                </Col>
                <Col size="md-4">
                </Col>
        </nav>
    )
}

export default Nav;