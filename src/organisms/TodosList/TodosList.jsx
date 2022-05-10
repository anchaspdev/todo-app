import React, { Fragment } from "react";
import { useState } from "react";
import {
  MultiCheckboxContainer,
  TodoRow,
  TodoRowDetails,
  TodoColumn,
  TodoDetailsColumn,
  TodoColumnHeader,
  TodoListAddContainer,
} from "./TodosList.styles";
import HighlightedText from "../../atoms/highlightedText/HighlightedText";
import Checkbox from "../../atoms/forms/checkbox/Checkbox";
import RoundIcon from "../../atoms/imgIcon/RoundIcon";
import AddEditTodoModal from "../AddTodoModal/AddEditTodoModal";
import useModal from "../../hoc/sideModal/useModal";
import SideModal from "../../hoc/sideModal/SideModal";
import Button, { BUTTON_TYPE_CLASSES } from "../../atoms/button/Button";

const TodosList = React.memo(({ itemsArray }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(itemsArray.length).fill(false)
  );
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { isShowing, toggle } = useModal();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const openAndCloseModalHandler = () => {
    toggle();
  };

  const handleAddEditOpen = (todo) => {
    todo ? setSelectedTodo({ ...todo }) : setSelectedTodo(null);
    openAndCloseModalHandler();
  };

  return (
    <Fragment>
      <SideModal isShowing={isShowing} onClose={openAndCloseModalHandler}>
        <AddEditTodoModal
          todo={selectedTodo}
          onClose={openAndCloseModalHandler}
        />
      </SideModal>
      <TodoListAddContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.add}
          type="button"
          onClick={() => handleAddEditOpen(null)}
        >
          Add
        </Button>
      </TodoListAddContainer>

      <MultiCheckboxContainer>
        <TodoRow>
          <TodoColumn>
            <TodoColumnHeader>Todo</TodoColumnHeader>
          </TodoColumn>

          <TodoRowDetails>
            <TodoDetailsColumn>
              <TodoColumnHeader>Priority</TodoColumnHeader>
            </TodoDetailsColumn>
            <TodoDetailsColumn>
              <TodoColumnHeader>Due Date</TodoColumnHeader>
            </TodoDetailsColumn>
            <TodoDetailsColumn>
              <TodoColumnHeader>Assigned User</TodoColumnHeader>
            </TodoDetailsColumn>
            <TodoDetailsColumn>
              <TodoColumnHeader>Created User</TodoColumnHeader>
            </TodoDetailsColumn>
            <TodoDetailsColumn>
              <TodoColumnHeader>Action</TodoColumnHeader>
            </TodoDetailsColumn>
          </TodoRowDetails>
        </TodoRow>
      </MultiCheckboxContainer>

      <MultiCheckboxContainer>
        {itemsArray.map(
          (
            { id, todo, assignedUser, priority, dueDate, createdUser },
            index
          ) => {
            return (
              <TodoRow key={id}>
                <TodoColumn>
                  <Checkbox
                    id={id}
                    name={todo}
                    value={todo}
                    checked={checkedState[id]}
                    onChangeHandler={() => handleOnChange(id)}
                  />
                </TodoColumn>

                <TodoRowDetails>
                  <TodoDetailsColumn>
                    <HighlightedText highlightType={priority.code}>
                      {priority.name}
                    </HighlightedText>
                  </TodoDetailsColumn>
                  <TodoDetailsColumn>
                    <div>{dueDate}</div>
                  </TodoDetailsColumn>
                  <TodoDetailsColumn>
                    <RoundIcon
                      src={assignedUser.imageUrl}
                      alt={`${assignedUser.name}`}
                    />
                  </TodoDetailsColumn>
                  <TodoDetailsColumn>
                    <RoundIcon
                      src={createdUser.imageUrl}
                      alt={`${createdUser.name}`}
                    />
                  </TodoDetailsColumn>
                  <TodoDetailsColumn>
                    <div
                      onClick={() => {
                        handleAddEditOpen({
                          id,
                          todo,
                          assignedUser,
                          priority,
                          dueDate,
                          createdUser,
                        });
                      }}
                    >
                      Edit
                    </div>
                  </TodoDetailsColumn>
                </TodoRowDetails>
              </TodoRow>
            );
          }
        )}
      </MultiCheckboxContainer>
    </Fragment>
  );
});

export default TodosList;
