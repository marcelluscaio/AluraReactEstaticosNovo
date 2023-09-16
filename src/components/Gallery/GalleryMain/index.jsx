import styled from "styled-components";
import Cards from "./Cards";
import Popular from "./Popular";

const StyledGalleryMain = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  /* Queria fazer isso de forma responsiva sem usar media query, mas nao consegui) */
  /*grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) minmax(10rem, auto));*/
  column-gap: 1.7vw;

  margin-top: var(--fs-40);

  @media (max-width: 50em){
    &{
      grid-template-columns: 1fr;
    }
  }
`;

const GalleryMain = ({photos, filterTag, filterString, isLiked, setIsLiked}) => {
  
  return(
    <StyledGalleryMain>
      <Cards photos={photos} filterTag={filterTag} filterString={filterString} isLiked={isLiked} setIsLiked={setIsLiked}></Cards>
      <Popular photos={photos}></Popular>
    </StyledGalleryMain>
  )
};

export default GalleryMain;