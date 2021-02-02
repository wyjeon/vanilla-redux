import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer
const countModifie = (count = 0) => {
  return count;
};

//store
const countStore = createStore(countModifie);

console.log(countStore.getState());
