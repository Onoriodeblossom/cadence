import React, { useState } from "react";
import {
  NavContainer,
  NavContainerWrapper,
  NavLinkCOntainer,
  LogoImage,
  ResponsiveNavBarNavContainer,
  ResponsiveNavBarNavContainerWrapper,
  ResponsiveNavBarNavLinkCOntainer,
  LogoContainer,
  Line,
} from "./styles";
import { LinkText } from "../route/styles";
import Logo from "../../assets/Cadence  1.png";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  return (
    <NavContainer>
      <NavContainerWrapper>
        <LogoContainer>
          <LogoImage src={Logo} alt="mmf" />

          <Line />
        </LogoContainer>
        <NavLinkCOntainer>
          <LinkText to="/">Home</LinkText>
          <LinkText to="/about">About Us</LinkText>
          <LinkText to="/ourservice">Our Service</LinkText>
          <LinkText to="/musics">Music</LinkText>
          <LinkText to="/contactus">Contact Us</LinkText>
          <LinkText to="/events">Blog</LinkText>
          <LinkText to="/events">Artist</LinkText>
        </NavLinkCOntainer>
      </NavContainerWrapper>
    </NavContainer>
  );
};

export const ResponsiveNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <ResponsiveNavBarNavContainer>
      <ResponsiveNavBarNavContainerWrapper resFlexDirection="row">
        <LogoImage src={Logo} alt="mmf" />
        <VscMenu size={24} onClick={handleMenuToggle} />
      </ResponsiveNavBarNavContainerWrapper>
      <ResponsiveNavBarNavLinkCOntainer showMenu={showMenu}>
        <AiOutlineClose size={30} color="white" onClick={handleMenuToggle} />
        <LinkText to="/">Home</LinkText>
        <LinkText to="/artists">Artists</LinkText>
        <LinkText to="/musics">Musics</LinkText>
        <LinkText to="/about">About</LinkText>
        <LinkText to="/contactus">Contact Us</LinkText>
        <LinkText to="/events">Events</LinkText>
      </ResponsiveNavBarNavLinkCOntainer>
    </ResponsiveNavBarNavContainer>
  );
};
