import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

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

// 3.send message
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
