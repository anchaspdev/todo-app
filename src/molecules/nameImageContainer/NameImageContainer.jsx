import React from "react";
import RoundIcon from "../../atoms/imgIcon/RoundIcon";
import Text from "../../atoms/text/Text";
import { AlignImageRight } from "./NameImageContainer.style";

const NameImageContainer = ({
  name,
  imageUrl,
  alignImage = AlignImageRight,
}) => {
  const AlignContainer = alignImage;
  return (
    <AlignContainer className={alignImage}>
      <Text value={name}>{name}</Text>
      <RoundIcon src={imageUrl} alt={`${name}`} />
    </AlignContainer>
  );
};

export default NameImageContainer;
