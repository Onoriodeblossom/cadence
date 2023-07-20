import React from "react";
import { Container } from "../../components/container/container";
import { NavBar } from "../../components/navbar/navbar.component";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { HeroSection } from "./herosection/herosection";
import { HeroSectionContainer } from "./styles";



const Home = () =>{

    return(
        <Container flexDirection="column" background="green">
            <HeroSectionContainer flexDirection="column">
            <NavBar/>
            <HeroSection/>

            </HeroSectionContainer>

    
        </Container>
    )
}

export default Home;