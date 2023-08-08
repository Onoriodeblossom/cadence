import React from "react";
import { AboutContainer, AboutUsSectionContainer } from "./styles";

import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";

const About = () =>{


    return(
        <AboutContainer>
            <AboutUsSectionContainer>

            <NavBar/>
            <ResponsiveNavBar/>
            </AboutUsSectionContainer>
ABOUT
        </AboutContainer>
    )
}
export default About;