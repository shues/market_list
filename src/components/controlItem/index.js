import React from "react";

export function ControlItem(props) {
  return (
    <div
      className={
        props.type + " control " + (props.active === props.type ? "active" : "")
      }
      onClick={() => props.action(props.type)}
    ></div>
  );
}
