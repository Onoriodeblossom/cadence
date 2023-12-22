import { styled } from "styled-components";
import { Container } from "../../components/container/container";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
// import img from "../../assets/bg.jpeg";
// import { Text } from "../../components/Text/styles";


export const AboutContainer = styled(Container)`

flex-direction:column;
background:#000;


@media (max-width: 370px) {
  width: ${({ resWidth }) => (resWidth ? resWidth : "100%")};
  // background:yellow;
  // display:none;
}

`;
export const AboutUsSectionContainer = styled(FlexibleDiv)`
  background:black;
  background-repeat: no-repeat;

  display: flex;
  background-size: cover;
  align-content: center;
  flex-direction: column;
  justify-content: center;


  @media (max-width: 300px) {
    width: ${({ resWidth }) => (resWidth ? resWidth : "100%")};
    background:yellow;
  }
`;
export const Intro = styled.div`
// padding-top:150px;
height:40vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
// background:red;

`;

export const BodyContainer = styled.div`
width:80%;
// height:50%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`;

// export const Section1  = styled.div`
// width:35%;




// `;


// export const Section2  = styled.div`
// width:35%;
// margin-top:40px;
// display:flex;
// flex-direction:column;

// // height:60vh;




// `


// export const Picture1  = styled.div`

// width:180px;
// border-radius:10px;
// height:128px;
// position:relative;

// right:-290px



// `
// export const Picture2  = styled.div`

// width:393px;
// border-radius:10px;
// height:319px;
// position:relative;
// top:-20px;




// `
// export const Picture3  = styled.div`

// width:200px;
// height:180px;
// border-radius:10px;

// position:relative;
// top:-70px;
// right:-290px



// `



// export const Image = styled.img`
// width:100%;
// height:100%;
// border-radius:10px;


// `;
// export const Artistes  = styled.div`
// background:gray;




// `
// export const P  = styled(Text)`


// font-family:'Manrope', sans-serif


// `
