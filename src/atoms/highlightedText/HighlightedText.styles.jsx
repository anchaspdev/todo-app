import styled from "styled-components";

const HighlighStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 3px;
  border-radius: 6px;
  width: fit-content;
  height: auto;
`;

export const RedHighlight = styled(HighlighStyle)`
  background: #fbd9e1;
  color: #e5000e;
`;

export const GreenHighlight = styled(HighlighStyle)`
  background: #d2ffec;
  color: #1c8a34;
`;

export const BlueHighlight = styled(HighlighStyle)`
  background: #e3f8ff;
  color: #20989f;
`;
