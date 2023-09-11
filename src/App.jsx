import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100dvh;

  .grid{
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1.73%;
  }
`;

const Main = styled.main`

`;


function App() {
  return (
    <FundoGradiente>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <section className="grid container">
        <Aside></Aside>
        <Main>
          <Banner></Banner>
          <Gallery></Gallery>
        </Main>
      </section>
    </ FundoGradiente>
  )
}

export default App
