import React from "react";
import { useState } from "react";
import {
  MultiCheckboxContainer,
  TodoRow,
  TodoRowDetails,
} from "./DashboardTodosList.styles";
import HighlightedText from "../../atoms/highlightedText/HighlightedText";
import Checkbox from "../../atoms/forms/checkbox/Checkbox";
import NameImageContainer from "../../molecules/nameImageContainer/NameImageContainer";


const DashboardTodosList = ({ itemsArray }) => {
  const [checkedState, setCheckedState] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <MultiCheckboxContainer>
      {itemsArray.map(({ id, todo, assignedUser, priority }) => {
        return (
          <TodoRow key={id}>
            <Checkbox
              id={id}
              name={todo}
              value={todo}
              checked={checkedState[id]}
              onChangeHandler={() => handleOnChange(id)}
            />
            <TodoRowDetails>
              <HighlightedText highlightType={priority.code}>
                {priority.name}
              </HighlightedText>
              <NameImageContainer
                name={assignedUser.name}
                imageUrl={assignedUser.imageUrl}
              ></NameImageContainer>
            </TodoRowDetails>
          </TodoRow>
        );
      })}
    </MultiCheckboxContainer>
  );
};

export default DashboardTodosList;
