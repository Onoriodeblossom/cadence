import React from "react";
import {
  // ArtistContainer,
  // ArtistSectionContainer,
  BodyContainer,
  Icon,
  Intro,
  OurServiceContainer,
  OurServiceSectionContainer,
  Row,
} from "./styles";
import {
  NavBar,
  ResponsiveNavBar,
} from "../../components/navbar/navbar.component";
import { Text } from "../../components/Text/styles";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { MdMic } from "react-icons/md";

import img from "../../assets/picture.jpg";

import image1 from "../../assets/picture.jpg";
import DoubleSectionContainer from "./twosectionContainer ";

const OurService = () => {
  const Service = [
    {
      icon: <IoStarHalfSharp size={70} color="#b99b4b" />,
      label: "Brand PartnerShip",
    },

    {
      icon: <IoIosMusicalNotes size={70} color="#b99b4b" />,
      label: "Music Licensing",
    },
    {
      icon: <MdMic size={70} color="#b99b4b" />,
      label: "Performance & Appearance",
    },
    {
      icon: <HiMiniVideoCamera size={70} color="#b99b4b" />,
      label: "Content Production",
    },
  ];
  return (
    <OurServiceContainer>
      <OurServiceSectionContainer>
        <NavBar />
        <ResponsiveNavBar />
      </OurServiceSectionContainer>
      <BodyContainer>
        <Intro>
          <Text size="60px" color="#b89a4a" resSize600={"30px"}>
            Our Service
          </Text>

          <Row>
            {Service.map(({ icon, label }) => (
              <FlexibleDiv flexDirection="column">
                <Icon>{icon}</Icon>
                <Text color="#495057"    size={"18px"} >{label}</Text>
              </FlexibleDiv>
            ))}
          </Row>
        </Intro>

        <DoubleSectionContainer
          icon={<IoStarHalfSharp size={70} color="#b99b4b" />}
          image={image1}
          flexDirection="row-reverse"
          text2={"Brand Partnership & Activation"}
          text3={
            "Collaborate with Mavin to develop tailor made branded solutions for your marketing campaigns and brand activation efforts."
          }
        />

        <DoubleSectionContainer
          icon={<IoIosMusicalNotes size={70} color="#b99b4b" />}
          image={img}
          text2={"Brand Partnership & Activation"}
          text3={
            "Collaborate with Mavin to develop tailor made branded solutions for your marketing campaigns and brand activation efforts."
          }
        />
        <DoubleSectionContainer
          icon={<MdMic size={70} color="#b99b4b" />}
          image={image1}
          flexDirection="row-reverse"
          text2={"Brand Partnership & Activation"}
          text3={
            "Collaborate with Mavin to develop tailor made branded solutions for your marketing campaigns and brand activation efforts."
          }
        />
        <DoubleSectionContainer
          icon={<HiMiniVideoCamera size={70} color="#b99b4b" />}
          image={img}
          text2={"Brand Partnership & Activation"}
          text3={
            "Collaborate with Mavin to develop tailor made branded solutions for your marketing campaigns and brand activation efforts."
          }
        />
      </BodyContainer>
    </OurServiceContainer>
  );
};
export default OurService;
