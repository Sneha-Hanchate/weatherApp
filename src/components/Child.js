import React from "react";

function Child(props) {
    return <div>
               <h1 style={{color: "orange"}}>Weather Report</h1>
<h2>temp: {props.tempData}</h2>
    </div>
}

export default Child;