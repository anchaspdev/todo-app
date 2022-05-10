import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideOverlay,
  OverlayHeader,
  OverlayBody,
  OverlayFooter,
} from "./AddEditTodoModal.styles";
import { refreshTodosList } from "../../store/todos/todos.action";
import {
  fetchPrioritiesListAsync,
  fetchUsersListAsync,
} from "../../store/seedData/seed.action";
import {
  selectPrioritiesArray,
  selectUsersArray,
} from "../../store/seedData/seed.selector";

import InputText from "../../atoms/forms/inputText/InputText";
import SelectInput from "../../atoms/forms/selectInput/SelectInput";
import {
  getFormattedOptions,
  getFormattedValue,
} from "../../atoms/forms/selectInput/selectInputUtil";
import Button from "../../atoms/button/Button";
import { BUTTON_TYPE_CLASSES } from "../../atoms/button/Button";

const AddEditTodoModal = ({ todo, onClose }) => {
  const usersArray = useSelector(selectUsersArray);
  const prioritiesArray = useSelector(selectPrioritiesArray);

  const dispatch = useDispatch();

  const [updatedTodoObject, setUpdatedTodoObject] = useState(todo);
  const [selectedTodo, setSelectedTodo] = useState(todo ? todo.todo : "");
  const [selectedPriority, setSelectedPriority] = useState(
    todo ? getFormattedValue(todo.priority) : null
  );
  const [selectedDueDate, setSelectedDueDate] = useState(
    todo ? todo.dueDate : ""
  );
  const [selectedAssignedUser, setSelectedAssignedUser] = useState(
    todo ? getFormattedValue(todo.assignedUser) : null
  );

  // handle onChange event of the dropdown
  const onAssigneeUserChangeHandler = (selectedValue) => {
    setSelectedAssignedUser(selectedValue);
    setUpdatedTodoObject({
      ...updatedTodoObject,
      assignedUser: { id: selectedValue.value },
    });
  };

  const onPriorityChangeHandler = (selectedValue) => {
    setSelectedPriority(selectedValue);
    setUpdatedTodoObject({
      ...updatedTodoObject,
      priority: { id: selectedValue.value },
    });
  };

  const onTodoChangeHandler = (event) => {
    const updatedTodo = event.target.value;
    setSelectedTodo(updatedTodo);
    setUpdatedTodoObject({ ...updatedTodoObject, todo: updatedTodo });
  };

  const saveAndcloseActionHandler = () => {
    dispatch(refreshTodosList());
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Dispatch action to Save
    saveAndcloseActionHandler();
  };

  const handleAdd = (event) => {
    event.preventDefault();
    //Dispatch action to Add
    onClose();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    if (!usersArray || usersArray.length === 0) {
      dispatch(fetchUsersListAsync());
    }
    if (!prioritiesArray || prioritiesArray.length === 0) {
      dispatch(fetchPrioritiesListAsync());
    }
  }, [dispatch]);

  return (
    <SideOverlay>
      <OverlayHeader>
        <div className="h0">{todo && todo.id ? "Edit Todo" : "Add Todo"}</div>
      </OverlayHeader>
      <OverlayBody>
        <form onSubmit={handleSubmit}>
          <InputText
            label="Todo"
            name="todo"
            value={selectedTodo}
            onChange={onTodoChangeHandler}
          ></InputText>

          <SelectInput
            placeholder="Assigned User"
            value={selectedAssignedUser}
            options={getFormattedOptions(usersArray)}
            onChange={onAssigneeUserChangeHandler}
          ></SelectInput>

          <SelectInput
            placeholder="Priority"
            value={selectedPriority}
            options={getFormattedOptions(prioritiesArray)}
            onChange={onPriorityChangeHandler}
          ></SelectInput>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.cancel}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          {todo ? (
            <Button
              buttonType={BUTTON_TYPE_CLASSES.submit}
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              buttonType={BUTTON_TYPE_CLASSES.add}
              type="button"
              onClick={handleAdd}
            >
              Add
            </Button>
          )}
        </form>
      </OverlayBody>
      <OverlayFooter></OverlayFooter>
    </SideOverlay>
  );
};

export default AddEditTodoModal;
