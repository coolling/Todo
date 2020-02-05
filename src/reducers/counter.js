import { ADD, DELETE } from "../constants";

const INITIAL_STATE = {
  todos: [
    { id: 0, text: "第一条todo" },
    { id: 1, text: "第一条todo" },
    { id: 2, text: "第一条todo" },
    { id: 3, text: "第一条todo" }
  ]
};
export default function todos(state = INITIAL_STATE, action) {
  // 获取当前todos条数，用以id自增
  let todoNum = state.todos.length;

  switch (action.type) {
    // 根据指令处理todos
    case ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: todoNum,
          text: action.data
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
