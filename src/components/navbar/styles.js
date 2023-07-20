import { styled } from "styled-components"
import {FlexibleDiv} from "../flexibleDiv/flexibleDiv.component"
import {Container} from "../container/container"

export const NavContainer = styled(Container)`
padding:0;
margin:0;


`

export const NavContainerWrapper = styled(FlexibleDiv)`
width:85%

`

export const NavLinkCOntainer = styled(FlexibleDiv)`
justify-content:space-evenly;
width:60%;

`

export const LogoImage = styled.img`
width:150px;
height:100px;

`

