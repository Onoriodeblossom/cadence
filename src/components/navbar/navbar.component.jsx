import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavContainerWrapper,NavLinkCOntainer,LogoImage} from "./styles";
import { LinkText } from "../route/styles";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Logo from "../../assets/Cadence  1.png"


export const NavBar = () =>{
    return (
        <NavContainer >
            <NavContainerWrapper>
                <LogoImage src={Logo} alt="mmf"/>
                <NavLinkCOntainer>

                <LinkText  to="/">Home</LinkText>
                <LinkText  to="/artists">Artists</LinkText>
                <LinkText  to="/musics">Musics</LinkText>
                <LinkText  to="/about">About</LinkText>
                <LinkText  to="/contactus">Contact Us</LinkText>
                <LinkText  to="/events">Events</LinkText>
                </NavLinkCOntainer>

            </NavContainerWrapper>


        </NavContainer>
    )
}