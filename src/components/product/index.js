import React from "react";
import "./index.css";

export function Product(props) {
  const { id, name, active } = props.data;
  return (
    <div className="productWrapper">
      <div
        className={(active ? "marked" : "") + " checker"}
        onClick={() => props.toggle(id)}
      ></div>
      <div className="product" id={id}>
        {name}
      </div>
    </div>
  );
}
