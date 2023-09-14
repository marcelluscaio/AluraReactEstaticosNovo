import styled from "styled-components";
import Cards from "./Cards";
import Popular from "./Popular";

const StyledGalleryMain = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  /*grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) minmax(10rem, auto));*/
  column-gap: 1.7vw;

  margin-top: var(--fs-40);

  @media (max-width: 50em){
    &{
      grid-template-columns: 1fr;
    }
  }
`;

const GalleryMain = ({photos, filter}) => {
  return(
    <StyledGalleryMain>
      <Cards photos={photos} filter={filter}></Cards>
      <Popular photos={photos}></Popular>
    </StyledGalleryMain>
  )
};

export default GalleryMain;