import { styled } from "styled-components";
import photos from "./photos.json";
import { useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100dvh;

  & > .grid{
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1.7vw;

    @media (max-width: 50em){
    &{
      grid-template-columns: 1fr;
      row-gap: 5vh
    }
  }
`;

const Main = styled.main`

`;


const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [filterTag, setFilterTag] = useState(0);
  const [filterString, setFilterString] = useState('');
  const [isLiked, setIsLiked] = useState([]);

  return (
    <FundoGradiente>
      <GlobalStyles></GlobalStyles>
      <Header setFilterString={setFilterString}></Header>
      <section className="grid container">
        <Aside></Aside>
        <Main>
          <Banner></Banner>
          <Gallery photos={galleryPhotos} filterTag={filterTag} filterString={filterString} setFilterTag={setFilterTag} isLiked={isLiked} setIsLiked={setIsLiked}></Gallery>
        </Main>
      </section>
    </ FundoGradiente>
  )
}

export default App
