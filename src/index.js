import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

//reducer, 2.modify data
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store, 1.create store
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
//4. detect change
countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

// 3.send message
plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
