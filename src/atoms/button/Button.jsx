import { CancelButton, AddButton, SubmitButton } from "./Button.styles";

export const BUTTON_TYPE_CLASSES = {
  cancel: "cancel",
  add: "add",
  submit: "submit",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.cancel) =>
  ({
    [BUTTON_TYPE_CLASSES.cancel]: CancelButton,
    [BUTTON_TYPE_CLASSES.add]: AddButton,
    [BUTTON_TYPE_CLASSES.submit]: SubmitButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
