import React from "react";
import { ArtistContainer, ArtistSectionContainer } from "./styles";
import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";


const Artist = () =>{


    return(
        <ArtistContainer>
           <ArtistSectionContainer>
            <NavBar/>
            <ResponsiveNavBar/>
           </ArtistSectionContainer>
ARTISTS
        </ArtistContainer>
    )
}
export default Artist;