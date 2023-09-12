import styled from "styled-components";
import Cards from "./Cards";

const StyledGalleryMain = styled.div`
  margin-top: var(--fs-40);
`;

const GalleryMain = ({photos}) => {
  return(
    <StyledGalleryMain>
      <Cards photos={photos}></Cards>
    </StyledGalleryMain>
  )
};

export default GalleryMain;