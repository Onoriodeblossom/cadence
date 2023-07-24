import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../Text/styles";
import { Button } from "../button/button.component";
import { FooterContainer, Input,FooterContainerWrapper,Divider } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer >
        <FooterContainerWrapper>

      <FlexibleDiv>
      <FlexibleDiv width="40%">

        <Text fontFamily={"'Hi Melody', cursive;"} color="#fff" size="24px" >Suscribe</Text>

        <Input placeholder="Enter  your e-mail" />
      </FlexibleDiv>

        <FlexibleDiv width="10%">
          <Button background={"black"} fontSize="24px">Submit</Button>
        </FlexibleDiv>
      </FlexibleDiv>
      <Divider/>
        </FooterContainerWrapper>

    </FooterContainer>
  );
};
