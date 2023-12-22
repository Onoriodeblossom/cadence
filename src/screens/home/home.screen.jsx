import React from "react";
import { Container } from "../../components/container/container";
import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";
import { HeroSection } from "./herosection/herosection";
import { HeroSectionContainer } from "./styles";
// import { IntroSection } from "./intro/intro";
// import { Footer } from "../../components/footer/footer.component";



const Home = () =>{

    return(
        <Container flexDirection="column" background="#000" >
            <HeroSectionContainer flexDirection="column">
            <NavBar/>
            <ResponsiveNavBar/>
            <HeroSection/>


            </HeroSectionContainer>
            {/* <IntroSection/> */}
            {/* <Footer/> */}

    
        </Container>
    )
}

export default Home;