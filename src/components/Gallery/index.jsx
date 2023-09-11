import styled from "styled-components";
import Filter from "./Filter";

const StyledGallery = styled.section`
  margin-top: var(--fs-56);
`;

const Gallery = () => {
  return(
    <StyledGallery>
      <Filter></Filter>
    </StyledGallery>
  )
};

export default Gallery;