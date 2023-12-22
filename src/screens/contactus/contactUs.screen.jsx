import React from "react"
import { ContactUsContainer, ContactUsSectionContainer, Icon, Intro, Row } from "./styles"

import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Text } from "../../components/Text/styles";
import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";
import { BodyContainer } from "./styles";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdMic } from "react-icons/md";

const ContactUs = () =>{

    const contact = [
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
     
      ];
    return(
        <ContactUsContainer>
            <ContactUsSectionContainer>
            <NavBar/>
            <ResponsiveNavBar/>
            </ContactUsSectionContainer>
            <BodyContainer>


        <Intro>


      
<Text size="60px" color="#b89a4a">
  Contact us
</Text>

<Row>
  {contact.map(({ icon, label }) => (
    <FlexibleDiv flexDirection="column">
      <Icon>{icon}</Icon>
      <Text color="#495057">{label}</Text>
    </FlexibleDiv>
  ))}
</Row>
</Intro>

            CONTACT US
Zhzhzhzshhshh
            </BodyContainer>
        </ContactUsContainer>
    )
}

export  default ContactUs;