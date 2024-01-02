import { styled } from "styled-components";
import { Container } from "../../components/container/container";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
// import img from "../../assets/bg.jpeg";

export const OurServiceContainer = styled(Container)`
  flex-direction: column;
  background: #000;
`;

export const Intro = styled.div`
padding-top:100px;
height:90vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


// background:red;

@media (min-width: 320px) {
  padding-top:0px;
  // height:125vh;

justify-content:space-evenly;
  
  
  

`;

export const OurServiceSectionContainer = styled(FlexibleDiv)`
  display: flex;
  background-size: cover;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  width: 80%;
  // height:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled(FlexibleDiv)`
  height: 300px;
  width: 75%;
  //  background:red;

  @media (min-width: 320px) {
    width: 90%;

    height: auto;
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
  }
`;

export const Icon = styled.div``;
