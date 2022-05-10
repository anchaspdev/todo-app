export const sortedTodosListByPriority = (unsortedTodos) => {
  if (!unsortedTodos) {
    return unsortedTodos;
  }
  const sortedTodosList = unsortedTodos.sort(function (todo1, todo2) {
    return todo1.priority.weight - todo2.priority.weight;
  });

  return sortedTodosList;
};
