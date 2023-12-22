import { styled } from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import img from "../../assets/bg.jpeg";

export const HeroSectionContainer = styled(FlexibleDiv)`
  // background-image:url(${img});
  background-repeat: no-repeat;

  background: #000;
  display: flex;
  background-size: cover;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
