import React from "react";
import { Container } from "../../../components/container/container";
import Logo from "../../../assets/Cadence  1.png";
import {
  HeroSectionContainer,
  Image,
  TextDiv,
  FacebookIconContainer,
  ButtonContainer,
  ArtistImage
} from "./styles";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { Button } from "../../../components/button/button.component";
import man from "../../../assets/Cadence  1.png"

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
      <TextDiv size={"30px"}>Hip hop forever</TextDiv>

      <FlexibleDiv width={"70%"}>
        <FlexibleDiv width={"20%"} justifyContent="center">
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
            fontSize={"30px"}
          >
            Listen Now
          </Button>
        </ButtonContainer>
      </FlexibleDiv>
      <FlexibleDiv>
        {topArtist.map(({image}) => (

          <ArtistImage src={image}  alt="images"/>
        )
        )}
      </FlexibleDiv>
    </HeroSectionContainer>
  );
};
