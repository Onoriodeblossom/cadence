import React from "react";
import Logo from "../../../assets/Cadence  1.png";
import {
  HeroSectionContainer,
  Image,
  FacebookIconContainer,
  ButtonContainer,
  ArtistImageContainer,
  ArtistImage
} from "./styles";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { Button } from "../../../components/button/button.component";
import { Text } from "../../../components/Text/styles";

export const HeroSection = () => {
  const topArtist = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z7HjOc0vh82r0MxZv5voYrUiCZptcXmwIQ&usqp=CAU"
    },
  
  



 
  ];

  return (
    <HeroSectionContainer>
      <Image src={Logo} />
      <Text resSize={"35px"} size={"40px"} color="#FFF">Hip hop forever</Text>

      <FlexibleDiv width={"70%"} resWidth="90%" resFlexDirection="row" >
        <FlexibleDiv width={"20%"} resWidth="max-content" gap={"16px"} resFlexDirection="row" justifyContent="center">
          <FacebookIconContainer>
            <BiLogoFacebook size={26} />
          </FacebookIconContainer>

          <FacebookIconContainer>
            <BsInstagram size={26} />
          </FacebookIconContainer>
        </FlexibleDiv>

        <ButtonContainer>
          <Button
            background={"transparent"}
            border={"3px solid #fff"}
            // fontSize={"24px"}
          >
            Listen Now
          </Button>
        </ButtonContainer>
      </FlexibleDiv>
      <FlexibleDiv  display="none" background="red" marginTop="200px" gap="40px" justifyContent="center" >
        {topArtist.map(({image}) => (
          <ArtistImageContainer >
            <ArtistImage src={image}  alt="images"/>

          </ArtistImageContainer>

        )
        )}
      </FlexibleDiv>
  
    </HeroSectionContainer>
  );
};
