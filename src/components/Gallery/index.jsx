import styled from "styled-components";
import Filter from "./Filter";
import GalleryMain from "./GalleryMain";

const StyledGallery = styled.section`
  margin-top: var(--fs-56);
`;

const Gallery = ({photos = [], filter, setFilter, isLiked, setIsLiked}) => {
  return(
    <StyledGallery>
      <Filter setFilter={setFilter} ></Filter>
      <GalleryMain photos={photos} filter={filter} isLiked={isLiked} setIsLiked={setIsLiked} ></GalleryMain>
    </StyledGallery>
  )
};

export default Gallery;