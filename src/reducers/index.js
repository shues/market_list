import { combineReducers } from "redux";
import {
  INIT_LIST,
  APPROVE_LIST,
  COMPLITE_LIST,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  TOGGLE_PRODUCT,
} from "../actions";

const products = [
  "мясо",
  "овощи",
  "крупы",
  "фрукты",
  "яйца",
  "молочка",
  "масло",
  "хлеб",
  "к чаю",
  "соус",
  "майонез",
];

function list(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case INIT_LIST:
      return Object.assign({}, state, {
        products: products.map((el, i) => {
          // console.log(el, i);
          return { id: i, name: el, active: true };
        }),
      });
    case TOGGLE_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.map((el, i) => {
          if (el.id === action.id) {
            // console.log(el, action.id);
            return Object.assign(
              {},
              { id: el.id, name: el.name, active: !el.active }
            );
          } else {
            return el;
          }
        }),
      });
    case APPROVE_LIST:
      return Object.assign({}, state, {
        products: state.products
          .filter((el) => el.active === true).map(el=>{
            return Object.assign({}, el, {active: !el.active})
          })
      });
    default:
      return state;
  }
}

function controls(state = {}, action) {
  switch (action.type) {
    case INIT_LIST:
      return Object.assign({}, state, { active: "init" });
    case APPROVE_LIST:
      return Object.assign({}, state, { active: "approve" });
    case COMPLITE_LIST:
      return Object.assign({}, state, { active: "complite" });
    default:
      return state;
  }
}

const toggler = combineReducers({
  controls,
  list,
});

export default toggler;
