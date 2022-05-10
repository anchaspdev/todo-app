import { RoundImage } from "./RoundIcon.styles";

const RoundIcon = ({ children, ...otherProps }) => {
  return <RoundImage {...otherProps}>{children}</RoundImage>;
};

export default RoundIcon;
