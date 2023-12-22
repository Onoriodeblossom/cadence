import { styled } from "styled-components";

export const Text = styled.p`

color:${({color})=>(color ? color: "#fff")};
font-size:${({size})=>(size ? size: "16px")};
font-weight:${({fontWeight})=>(fontWeight ? fontWeight: "600")};
text-align:${({align})=>(align ? align: "center")};
margin:5px;
font-family:${({fontFamily})=>(fontFamily ? fontFamily: " 'Manrope', sans-serif")};


background-color: ${({ background }) => background ? background : "transparent"};


@media (max-width: 600px) {

  
font-size:${({resSize})=>(resSize ? resSize: "16px")};
  };

  @media (max-width: 800px) {

  
   font-size:${({resSize800})=>(resSize800 ? resSize800: "26px")};
      };

`