import styled from "styled-components";

const StyledBanner = styled.div`


  h1{
    font-size: var(--fs-40);
    color: var(--white)
  }
`;

const Banner = () => {
  return(
    <StyledBanner>
      <h1>A galeria mais completa de fotos do espaço</h1>
    </StyledBanner>
  )
};

export default Banner;