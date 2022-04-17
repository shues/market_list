import React from "react";
import "./index.css";

import { ControlItem } from "../controlItem";

export function Controls(props) {

  function menuEvent(type) {
    switch (type) {
      case "init":
        props.initList();
        break;
      case "approve":
        props.approveList();
        break;
        case "complite":
          props.compliteList();
          break;
      default:
        break;
    }
  }

  const items = ["init", "approve", "complite"].map((el, i) => (
    <ControlItem key={i} type={el} active={props.active} action={menuEvent} />
  ));

  return <div className="controls">{items}</div>;
}
