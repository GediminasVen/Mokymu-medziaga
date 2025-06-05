export const getTodoList = (storeState) => storeState.todos;

export const getTodosByFilterValue = (state, filterValue) => {
  const allTodos = getTodoList(state);

  switch (filterValue) {
    case "completed":
      return allTodos.filter((item) => item.completed);
    case "incomplete":
      return allTodos.filter((item) => item.complete);
    case "all":
    default:
      return allTodos;
  }
};
