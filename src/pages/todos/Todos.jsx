import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsReloading,
  selectSortedTodoList,
} from "../../store/todos/todos.selector";
import { fetchTodosListStartAsync } from "../../store/todos/todos.action";
import { updateIsHomePage } from "../../store/dashboard/dashboard.action";
import TodosList from "../../organisms/TodosList/TodosList";
import TodoTile from "../../atoms/todoTile/TodoTile";
import { TodoListContainer } from "./Todos.styles";

const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectSortedTodoList);
  const isReloadTodos = useSelector(selectIsReloading);

  useEffect(() => {
    dispatch(updateIsHomePage(false));
    fetchTodos();
  }, [dispatch]);

  const fetchTodos = () => {
    dispatch(fetchTodosListStartAsync());
  };

  useEffect(
    (isReloadTodos) => {
      if (isReloadTodos) {
        fetchTodos();
      }
    },
    [isReloadTodos]
  );

  return (
    <TodoListContainer>
      <TodoTile>
        <TodosList
          key="dashboard-todos"
          refetchTodos={fetchTodos}
          itemsArray={todoList}
        ></TodosList>
      </TodoTile>
    </TodoListContainer>
  );
};

export default Todos;
