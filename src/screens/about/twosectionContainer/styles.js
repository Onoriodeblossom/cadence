import { styled,keyframes } from "styled-components";
import { Text } from "../../../components/Text/styles";
const MoveUpDown = keyframes  `

0% { height:379px; width: 320px;   transform: translateY(0); }
100% { height: 379px; width: 320px; transform: translateY(3%)   
  
}

`




export const Section1  = styled.div`
width:40%;

// background:red;

// height:73vh;
@media (max-width: 370px) {
    width:80%;
  }
`;


export const Section2  = styled.div`
width:40%;
margin-top:40px;
display:flex;
flex-direction:column;
// background:red;
position:relative;

@media (max-width: 370px) {
    width:100%;

  }


`


export const Picture1  = styled.div`

width:210px;
border-radius:10px;
height:118px;
position:relative;


right:-200px;
@media (max-width: 370px) {


    // width:100px;
    height:160px;
        width:70%;
        background:red;
    
        top:-0px;
    right:40px
      }

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


@media (max-width: 370px) {
    width:100%;
  }




`
export const Picture3  = styled.div`

width:300px;
height:180px;
border-radius:10px;

position:relative;
top:-110px;
right:-100px;
@media (max-width: 370px) {


// width:100px;
height:160px;
    width:70%;
    background:red;
    top:-120px;
right:-100px
  }


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


font-family:'Manrope', sans-serif;






`
