import { styled } from "styled-components";
import { Text } from "../../../components/Text/styles";
// const MoveUpDown = keyframes  `

// 0% { height:379px; width: 320px;   transform: translateY(0); }
// 100% { height: 379px; width: 320px; transform: translateY(3%)

// }

// `

export const Section1 = styled.div`
  width: 50%;
  // background:red;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  // height:73vh;

  @media (min-width: 320px) {
    width: 100%;

    // height:auto;
  }
`;

export const Section2 = styled.div`
  width: 50%;
  margin-top: 40px;
  display: flex;
  // background:blue;
  flex-direction: column;

  // position:relative;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const Picture1 = styled.div`
  width: 80%;
  // border-radius:10px;
  height: 500px;
  // background:green;

  @media (max-width: 320px) {
    width: 100%;
    height: 350px;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const Artistes = styled.div`
  background: gray;
`;
export const P = styled(Text)`
  font-family: "Manrope", sans-serif;
  // background:red;
`;

export const Icon = styled.div``;
