export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodoAction = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodoAction = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId,
});

export const deleteTodoAction = todoId => ({
  type: DELETE_TODO,
  payload: todoId,
});
