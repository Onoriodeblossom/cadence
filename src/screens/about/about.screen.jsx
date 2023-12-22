import React from "react";
import {
  AboutContainer,
  AboutUsSectionContainer,
  BodyContainer,
} from "./styles";

import {
  NavBar,
  ResponsiveNavBar,
} from "../../components/navbar/navbar.component";
import { Text } from "../../components/Text/styles";
import image1 from "../../assets/em.jpg";
import image2 from "../../assets/emm.jpg";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import DoubleSectionContainer from "./twosectionContainer";

const About = () => {
  return (
    <AboutContainer>
      <AboutUsSectionContainer>
        <NavBar />
        <ResponsiveNavBar />
      </AboutUsSectionContainer>
      <BodyContainer>
        <FlexibleDiv
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop={"50px"}
          marginBottom={"50px"}
        >
          <Text fontFamily="'Manrope', sans-serif" size="40px" color="#b99b4b">
            The Cadence Records
          </Text>

          <Text fontFamily="'Manrope', sans-serif" align="left">
            Cadence is an African leading entertainment company.
          </Text>
        </FlexibleDiv>
        <DoubleSectionContainer
          Pic1={image1}
          Pic2={image2}
          Pic3={image1}
          text1={" city People Entertainment"}
          text2={"Best Record Label of the Year       "}
          text3={"The label won the aforementioned category at the 2014 City People Entertainment Awards."
          }
        />

<DoubleSectionContainer

flexDirection="row-reverse"
          Pic1={image1}
          Pic2={image2}
          Pic3={image1}
          text2={"Best Record Label of the Year       "}
          text3={"The label won the aforementioned category at the 2014 City People Entertainment Awards."
          }
        />
      </BodyContainer>
    </AboutContainer>
  );
};
export default About;
