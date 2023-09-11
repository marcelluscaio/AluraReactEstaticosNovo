import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;

  background-image: url("src/assets/banner.png");
  background-repeat: no-repeat;
  background-size: cover;


  h1{
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