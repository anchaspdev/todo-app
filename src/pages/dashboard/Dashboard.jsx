import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStartAsync } from "../../store/dashboard/dashboard.action";
import { selectDashboardTodoList } from "../../store/dashboard/dashboard.selector";
import { selectFilteredTodos } from "../../store/dashboard/dashboard.selector";
import {
  DashboardTodosContainer,
  TodoListTilesContainer,
  TodoTitleContainer,
  TodosListContainer,
  ViewAllLinkContainer,
} from "./Dashboard.styles";
import DashboardTodosList from "../../organisms/dashboardTodosList/DashboardTodosList";
import TodoTile from "../../atoms/todoTile/TodoTile";
import NavLink from "../../atoms/navLink/NavLink";

const Dashboard = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectDashboardTodoList);

  useEffect(() => {
    dispatch(fetchDashboardStartAsync());
  }, [dispatch]);

  return todoList ? (
    <DashboardTodosContainer>
      <TodoListTilesContainer>
        <TodoTile>
          <TodoTitleContainer>
          <div className="h0">All Todos</div>
          </TodoTitleContainer>
          <TodosListContainer>
            <DashboardTodosList
              key="dashboard-todos"
              itemsArray={todoList}
            ></DashboardTodosList>
          </TodosListContainer>
          <ViewAllLinkContainer>
            <NavLink to="/todos">View All</NavLink>
          </ViewAllLinkContainer>
        </TodoTile>
      </TodoListTilesContainer>
    </DashboardTodosContainer>
  ) : (
    <div>No Todo Elements</div>
  );
};

export default Dashboard;
