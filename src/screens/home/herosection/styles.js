import { styled } from "styled-components";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";
import { Container } from "../../../components/container/container";
import {Text}  from "../../../components/Text/styles"



export const HeroSectionContainer = styled(Container)`
flex-direction:column;


`

export const Image = styled.img`

width:500px;
height:300px;

` 
export const  TextDiv = styled(Text)`
color:#fff;
font-size:50px;
`
export const  ButtonContainer = styled.div`
width:20%;
`

export const  FacebookIconContainer = styled.div`
padding:8px;
margin-right:30px;
border:1px solid #fff;
border-radius:50%;
`

export const ArtistImage = styled.img`

width:200px;
border-radius:50%;
height:200px;

` 

// export const  FacebookIconContainer = styled.div`
// padding:8px;
// margin-right:30px;
// border:1px solid #fff;
// border-radius:50%;
// `

// ButtonContainer