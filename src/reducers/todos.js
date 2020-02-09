import { ADD, DELETE } from "../constants";

const INITIAL_STATE = {
  todos:[]
};
export default function todos(state = INITIAL_STATE, action) {
 
  let todoNum = state.todos.length;

  switch (action.type) {

    case ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: todoNum,
          text: action.data,
          color:action.backgroundcolor,
          importance:action.importance,
        })
      };
    case DELETE:
      let newTodos = state.todos.filter(item => {
        return item.id !== action.id;
      });

      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
}
