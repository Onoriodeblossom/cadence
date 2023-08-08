import React from "react";
import { EventContainer, EventSectionContainer } from "./styles";

import { NavBar, ResponsiveNavBar } from "../../components/navbar/navbar.component";

const Events = () =>{
    return(
        <EventContainer>
            <EventSectionContainer>
            <NavBar/>
<ResponsiveNavBar/>
            </EventSectionContainer>
       EVENT     
        </EventContainer>
    )
}

export default Events;