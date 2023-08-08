import { styled } from "styled-components";
import { Container } from "../../../components/container/container";

export const HeroSectionContainer = styled(Container)`
  flex-direction: column;
`;

export const Image = styled.img`


@media (max-width: 600px) {
  width:80%
  
  };
`;

export const ButtonContainer = styled.div`
  width: 20%;
  @media (max-width: 800px) {
   width:auto;
    
    };


@media (max-width: 1020px) {
  // width:30%
  
  };
`;

export const FacebookIconContainer = styled.div`
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

export const ArtistImage = styled.img`
  width: 200px;
  border-radius: 50%;
  height: 200px;

`;

export const ArtistImageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  
`;

// ButtonContainer
