// import React from "react";
import { connect } from "react-redux";
import { List } from "../components/list";
import { toggleProduct } from "../actions";

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    products: state.list.products,
  };
};

const mapDispatchToProps = (dispatch) => {return {
  toggleProduct: (id) => dispatch(toggleProduct(id))
}};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
