import { styled } from "styled-components";

export const Text = styled.p`
color:${({color})=>(color ? color: "#000")};
font-size:${({size})=>(size ? size: "16px")};
font-weight:${({fontWeight})=>(fontWeight ? fontWeight: "600")};
text-align:center;
font-family:${({fontFamily})=>(fontFamily ? fontFamily: 'Dancing Script, cursive;')}


`