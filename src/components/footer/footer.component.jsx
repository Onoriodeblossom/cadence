import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../Text/styles";
import { Button } from "../button/button.component";
import { FooterContainer, Input,FooterContainerWrapper,Divider } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer >
        <FooterContainerWrapper>

      <FlexibleDiv width="80%" resFlexDirection="row">

        <Text fontFamily={"'Hi Melody', cursive;"} color="#fff" size="24px" resSize={""} >Suscribe</Text>
      <FlexibleDiv width="50%">

        <Input placeholder="Enter  your e-mail" />
      </FlexibleDiv>
  
        <FlexibleDiv width="20%">
          <Button background={"black"} fontSize="24px">Submit</Button>
        </FlexibleDiv>
      </FlexibleDiv>
      <Divider/>
        </FooterContainerWrapper>

    </FooterContainer>
  );
};
