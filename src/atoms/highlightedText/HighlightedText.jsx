import {
  RedHighlight,
  GreenHighlight,
  BlueHighlight,
} from "./HighlightedText.styles";

export const HIGHLIGHT_TYPE_CLASSES = {
  high: "high",
  medium: "medium",
  low: "low",
};

const getHighlighStyle = (highlightType = HIGHLIGHT_TYPE_CLASSES.low) =>
  ({
    [HIGHLIGHT_TYPE_CLASSES.high]: RedHighlight,
    [HIGHLIGHT_TYPE_CLASSES.medium]: GreenHighlight,
    [HIGHLIGHT_TYPE_CLASSES.low]: BlueHighlight,
  }[highlightType]);

const HighlightedText = ({ children, highlightType, ...otherProps }) => {
  const HighlightedText = getHighlighStyle(highlightType);
  return <HighlightedText {...otherProps}>{children}</HighlightedText>;
};

export default HighlightedText;
