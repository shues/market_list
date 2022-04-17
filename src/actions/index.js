export const INIT_LIST = "INIT_LIST";
export const APPROVE_LIST = "APPROVE_LIST";
export const COMPLITE_LIST = "COMPLITE_LIST";

// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const TOGGLE_PRODUCT = "TOGGLE_PRODUCT";

export function initList() {
  return { type: INIT_LIST };
}

export function approveList() {
  return { type: APPROVE_LIST };
}

export function compliteList() {
  return { type: COMPLITE_LIST };
}

// export function addProduct(id) {
//   return { type: ADD_PRODUCT, id };
// }

// export function removeProduct(id) {
//   return { type: REMOVE_PRODUCT, id };
// }

export function toggleProduct(id) {
  return { type: TOGGLE_PRODUCT, id };
}
