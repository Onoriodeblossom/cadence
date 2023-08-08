import { styled } from "styled-components"
import {FlexibleDiv} from "../flexibleDiv/flexibleDiv.component"
import {Container} from "../container/container"

export const NavContainer = styled(Container)`
padding:0;
margin:0;


`

export const NavContainerWrapper = styled(FlexibleDiv)`
width:85%;


@media (max-width: 1020px) {
display:none;

}

`

export const NavLinkCOntainer = styled(FlexibleDiv)`
justify-content:space-evenly;
width:60%;

`

export const LogoImage = styled.img`
width:150px;
height:100px;


@media (max-width: 1020px) {
    display:none;
    
    }

`




export const ResponsiveNavBarNavContainer = styled(Container)`
padding:0;
margin:0;
display:none;

@media (max-width: 1020px) {
    display:block;

    display:flex;
align-content: center;
flex-direction: column;
justify-content: center;
    
    }


`

export const ResponsiveNavBarNavContainerWrapper = styled(FlexibleDiv)`
width:95%;

`

export const ResponsiveNavBarNavLinkCOntainer = styled(FlexibleDiv)`
flex-direction:column;
justify-content:space-evenly;
width:50%;
top:10px;
left:1px;
height:400px;
display: ${({showMenu})=> (showMenu ? "column" : "none")};
background-color: black;
position:absolute;


`




