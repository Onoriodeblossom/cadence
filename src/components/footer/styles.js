import { styled } from "styled-components";
import { Container } from "../container/container";


export const FooterContainer = styled(Container)`
background-color:#343434;


`

export const FooterContainerWrapper = styled(Container)`
flex-direction:column;
width:90%;


`
export const Input = styled.input`

width:50%;
height:50px;
border-radius:10px;
border:0px;
font-size:24px;
padding-left:20px;
font-family:'Hi Melody', cursive;

@media (max-width: 800px) {
   
width:95%;
    }
`

export const Image = styled.img`
width:20%;
`

export const Divider = styled.div`
margin-top:10px;
margin-bottom:30px;
width:100%;
height:2px;
background:#fff

@media (max-width: 800px) {
   
    display:none
}

`
export const HorizontalDivider = styled.div`
margin-top:10px;
margin-bottom:30px;
width:2px;
height:290px;
background:#fff;


@media (max-width: 800px) {
   
    display:none
}

`


