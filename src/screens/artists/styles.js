import { styled } from "styled-components";
import { Container } from "../../components/container/container";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import img from "../../assets/bg.jpeg";


export const ArtistContainer = styled(Container)`

flex-direction:column;
background:#000;

`  

export const ArtistSectionContainer = styled(FlexibleDiv)`
  background-image:url(${img});
  background-repeat: no-repeat;

  // background: blue;
  display: flex;
  background-size: cover;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
