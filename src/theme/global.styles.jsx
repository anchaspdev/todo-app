import { createGlobalStyle } from "styled-components";
import {
  fontFamily,
  normalFontStyle,
  grayLightColor,
} from "./variables.styles";

//Several below styles should be extracted out to variables

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${grayLightColor};

    font-family: ${fontFamily};
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #000000;

  }
  div.h0{
    font-style: ${normalFontStyle};
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.04em;
  }
  h1{
    font-family: ${fontFamily};
    font-style: ${normalFontStyle};
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
  }
`;

export default GlobalStyle;
