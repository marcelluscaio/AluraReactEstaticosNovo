import styled from "styled-components";

const StyledBanner = styled.div`
  border-radius: 1.4vw;

  background-image: url("/imagens/banner.png");
  background-repeat: no-repeat;
  background-size: cover;


  h1{
    padding-block: 2.3em;
    padding-left: 1.6em;
    
    font-size: var(--fs-40);
    line-height: 1.2;
    font-weight: 400;
    color: var(--white);
    span{
      display: block
    }
  }
`;

const Banner = () => {
  return(
    <StyledBanner>
      <h1>A galeria mais <span>completa de</span> <span>fotos do espaço!</span></h1>
    </StyledBanner>
  )
};

export default Banner;