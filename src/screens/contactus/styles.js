import { styled } from "styled-components";
import { Container } from "../../components/container/container";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";


export const ContactUsContainer = styled(Container)`

flex-direction:column;
background:black;

`

export const ContactUsSectionContainer = styled(FlexibleDiv)`
  
  display: flex;
  background-size: cover;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

export const BodyContainer = styled.div`
width:80%;
// height:50%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`;

export const Intro = styled.div`
padding-top:50px;
// height:90vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
// background:red;

`;
  
export const Row = styled(FlexibleDiv)`

height:300px;
width:75%;
//  background:red;
`;

export const Icon = styled.div`



`;