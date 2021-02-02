import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

//reducer, 2.modify data
const countModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

//store, 1.create store
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: "PLUS" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

// 3.send message
plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
