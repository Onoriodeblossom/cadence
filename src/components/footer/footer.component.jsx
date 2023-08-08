import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../Text/styles";
import { Button } from "../button/button.component";
import {
  FooterContainer,
  Input,
  FooterContainerWrapper,
  Divider,
  HorizontalDivider,
  Image,
} from "./styles";
import LogoImage from "../../assets/Cadence  1.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerWrapper>
        <FlexibleDiv width="80%" resFlexDirection="row">
          <Text
            fontFamily={"'Hi Melody', cursive;"}
            color="#fff"
            size="24px"
            resSize={""}
          >
            Suscribe
          </Text>
          <FlexibleDiv width="50%">
            <Input placeholder="Enter  your e-mail" />
          </FlexibleDiv>

          <FlexibleDiv
            width="20%"
            background="black"
            height="60px"
            resMarginTop="20px"
          >
            <Button background={"transparent"} fontSize="24px">
              Submit
            </Button>
          </FlexibleDiv>
        </FlexibleDiv>
        <Divider />
        <FlexibleDiv gap="20px" alignItems="flex-start">
          <Image src={LogoImage} />
          <HorizontalDivider />

          <FlexibleDiv flexDirection="column">
            <Text color="white" size="30px">
              Follow
            </Text>
            <Text color="white" size="20px">
              Youtube
            </Text>
            <Text color="white" size="20px">
              Instagram
            </Text>
            <Text color="white" size="20px">
              Whatsapp
            </Text>
            <Text color="white" size="20px">
              Telegram
            </Text>
          </FlexibleDiv>
          <FlexibleDiv flexDirection="column">
            <Text color="white" resSize="18px" size="26px">
              Follow
            </Text>
            <Text color="white" resSize="18px" size="20px">
              Youtube
            </Text>
            <Text color="white" resSize="18px" size="20px">
              Instagram
            </Text>
            <Text color="white" resSize="18px" size="20px">
              Whatsapp
            </Text>
            <Text color="white" resSize="18px" size="20px">
              Telegram
            </Text>
          </FlexibleDiv>
          <FlexibleDiv flexDirection="column">
            <Text color="white" resSize="18px" size="26px" >Follow</Text>
          <Text color="white" resSize="18px" size="20px">Youtube</Text>
          <Text color="white" resSize="18px" size="20px">Instagram</Text>
          <Text color="white" resSize="18px" size="20px">Whatsapp</Text>
          <Text color="white" resSize="18px" size="20px">Telegram</Text>
          </FlexibleDiv>
          <FlexibleDiv flexDirection="column">
            <Text color="white" resSize="18px" size="26px" >Follow</Text>
          <Text color="white" resSize="18px" size="20px">Youtube</Text>
          <Text color="white" resSize="18px" size="20px">Instagram</Text>
          <Text color="white" resSize="18px" size="20px">Whatsapp</Text>
          <Text color="white" resSize="18px" size="20px">Telegram</Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </FooterContainerWrapper>
    </FooterContainer>
  );
};
