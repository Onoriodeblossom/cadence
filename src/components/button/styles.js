import styled from "styled-components";

export const ButtonStyles = styled.button`
  cursor: pointer;
  width: ${({ btnWidth }) => (btnWidth ? btnWidth : "100%")};
  min-width: ${({ btnMinWidth }) => (btnMinWidth ? btnMinWidth : "auto")};
  background: ${({ background }) => (background ? background : "#2962ff")};
  border: ${({ border }) => (border ? border : "0px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  color: ${({ btnColor }) => (btnColor ? btnColor : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.p`
  // padding: 0 0.2rem;
  color: ${({ btnColor }) => (btnColor ? btnColor : "#fff")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};

  font-family: 'Hi Melody', cursive;

  @media (max-width: 1020px) {
    font-size: ${({ resFontSize }) => (resFontSize ? resFontSize : "20px")};
    
    }

`;
