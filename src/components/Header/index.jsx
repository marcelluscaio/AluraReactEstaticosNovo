import Input from "./Input";
import { styled } from "styled-components";

const HeaderWithStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
    
  padding: 3.75rem 0;
  img{
    width: 15.2%;
    min-width: 150px;
    aspect-ratio: 211 / 65
  }

`

const Header = ({setFilter}) => {
  return(
    <HeaderWithStyle className="container">
      <img src="/imagens/Logo2.png" />
      <Input setFilter={setFilter}></Input>
    </HeaderWithStyle>
  )
}

export default Header