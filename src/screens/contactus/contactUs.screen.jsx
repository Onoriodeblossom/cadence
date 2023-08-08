import React from "react"
import { ContactUsContainer, ContactUsSectionContainer } from "./styles"

import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";

const ContactUs = () =>{
    return(
        <ContactUsContainer>
            <ContactUsSectionContainer>
            <NavBar/>
            <ResponsiveNavBar/>

            </ContactUsSectionContainer>
            CONTACT US

        </ContactUsContainer>
    )
}

export  default ContactUs;