import React from "react";

function Counter(props) {
        return (
            <h3 className="float-right">Score: {props.count} | Top Score: {props.topCount}</h3>
        )
    }

export default Counter;