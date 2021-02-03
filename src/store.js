import { createStore } from "redux";
import
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
