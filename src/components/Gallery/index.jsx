import styled from "styled-components";
import Filter from "./Filter";
import GalleryMain from "./GalleryMain";

const StyledGallery = styled.section`
  margin-top: var(--fs-56);
`;

const Gallery = ({photos = [], filterTag, filterString, setFilterTag, isLiked, setIsLiked}) => {
  return(
    <StyledGallery>
      <Filter setFilterTag={setFilterTag} ></Filter>
      <GalleryMain photos={photos} filterTag={filterTag} filterString={filterString} isLiked={isLiked} setIsLiked={setIsLiked} ></GalleryMain>
    </StyledGallery>
  )
};

export default Gallery;