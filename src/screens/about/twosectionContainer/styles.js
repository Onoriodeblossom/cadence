import { styled,keyframes } from "styled-components";
import { Container } from "../../../components/container/container";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";
import img from "../../../assets/bg.jpeg";
import { Text } from "../../../components/Text/styles";
const MoveUpDown = keyframes  `

0% { height:379px; width: 320px;   transform: translateY(0); }
100% { height: 379px; width: 320px; transform: translateY(3%)   
  
}

`




export const Section1  = styled.div`
width:40%;



// height:73vh;

`;


export const Section2  = styled.div`
width:40%;
margin-top:40px;
display:flex;
flex-direction:column;

position:relative;




`


export const Picture1  = styled.div`

width:210px;
border-radius:10px;
height:118px;
position:relative;

right:-200px



`
export const Picture2  = styled.div`

width:393px;
border-radius:10px;
height:379px;
position:relative;
z-index:2;
top:-40px;
transition:4s ;

// right:100px

// animation: ${MoveUpDown} 3s   infinite;




`
export const Picture3  = styled.div`

width:300px;
height:180px;
border-radius:10px;

position:relative;
top:-110px;
right:-100px



`



export const Image = styled.img`
width:100%;
height:100%;
border-radius:10px;


`;

export const Artistes  = styled.div`
background:gray;


`
export const P  = styled(Text)`


font-family:'Manrope', sans-serif


`
