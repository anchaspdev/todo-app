import styled from "styled-components";

export const NameImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AlignImageRight = styled(NameImageContainer)`
  flex-direction: row;
`;

export const AlignImageLeft = styled(NameImageContainer)`
  flex-direction: row-reverse;
`;
