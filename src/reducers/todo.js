import { v4 as uuid } from "uuid";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todos";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Read a bit",
      complete: true,
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: false,
    },
  ],
};

const todos = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todos;
