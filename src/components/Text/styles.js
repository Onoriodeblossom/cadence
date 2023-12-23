import { styled } from "styled-components";

export const Text = styled.p`
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? size : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  text-align: ${({ align }) => (align ? align : "center")};
  margin: 5px;
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : " 'Manrope', sans-serif"};
  background-color: ${({ background }) =>
    background ? background : "transparent"};

  @media (min-width: 320px) {
    font-size: ${({ resSize600 }) => (resSize600 ? resSize600 : "28px")};
    // color: ${({ color360 }) => (color360 ? color360 : "green")};
    text-align: ${({ align360 }) => (align360 ? align360 : "center")};
    
  }
`;
