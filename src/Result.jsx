import React from "react";

function Result(props) {

    let stat = props.statName;

  return (
    <div>
      <p> {stat.toUpperCase()} = {props.val}</p>
    </div>
  );
}

export default Result;
