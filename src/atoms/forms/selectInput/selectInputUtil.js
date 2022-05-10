export const getFormattedOptions = (data) => {
  return data.map((item) => getFormattedValue(item));
};

export const getFormattedValue = ({ id, name, imageUrl }) => {
  const optionsItem = {};
  optionsItem.value = id;
  optionsItem.text = name;
  if (imageUrl) {
    optionsItem.icon = imageUrl;
  }
  return optionsItem;
};
