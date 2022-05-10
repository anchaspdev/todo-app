import { Input, Group } from "./InputText.styles";

const InputText = ({ label, ...otherProps }) => {
  return (
    <Group>
      <label>{label}</label>
      <Input {...otherProps} />
    </Group>
  );
};

export default InputText;
