import styled from "styled-components";

export const MultiCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;

export const TodoListAddContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const TodoColumn = styled.div`
  width: 50%;
`;

export const TodoDetailsColumn = styled.div`
  flex: 1;
`;

export const TodoRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
`;

export const TodoRowDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  width: 50%;
`;

export const TodoColumnHeader = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */

  letter-spacing: 0.04em;
`;
