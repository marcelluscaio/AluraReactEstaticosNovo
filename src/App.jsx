import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import { styled } from "styled-components";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  .flex{
    display: flex;
    gap: 1.73%
  }
`

function App() {
  return (
    <FundoGradiente>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <section className="flex container">
        <Aside></Aside>
        <Banner></Banner>
      </section>
    </ FundoGradiente>
  )
}

export default App
