import styled from "styled-components";
import Filter from "./Filter";
import GalleryMain from "./GalleryMain";

const StyledGallery = styled.section`
  margin-top: var(--fs-56);
`;

const Gallery = () => {
  return(
    <StyledGallery>
      <Filter></Filter>
      <GalleryMain></GalleryMain>
    </StyledGallery>
  )
};

export default Gallery;