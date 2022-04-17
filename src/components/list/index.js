import React from "react";
import { Product } from "../product";
import "./index.css";

export function List(props) {
  let prodList = [];
  if (props.products !== undefined) {
    prodList = props.products.map((el, i) => <Product data={el} toggle={props.toggleProduct} key={i} />);
  }
  return <div className="list">{prodList}</div>;
}
