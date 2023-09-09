import { styled } from "styled-components";
import ListItem from "./ListItem";

const ListWithStyle = styled.ul`
  color: var(--gray);
  
  list-style: none;
  a{
    font-size: var(--fs-24);
    line-height: 1.25;

  }
`

const Aside = () => {
  return(
    <aside>
      <nav>
        <ListWithStyle>
          <ListItem 
            iconActive={"/icones/home-ativo.png"}
            iconInactive={"/icones/home-inativo.png"}
            isActive={true}>
            Início
          </ListItem>
          <ListItem
            iconActive={"/icones/mais-vistas-ativo.png"}
            iconInactive={"/icones/mais-vistas-inativo.png"}>
            Mais Vistas
          </ListItem>
          <ListItem
            iconActive={"/icones/mais-curtidas-ativo.png"}
            iconInactive={"/icones/mais-curtidas-inativo.png"}>
            Mais Curtidas
          </ListItem>
          <ListItem
            iconActive={"/icones/novas-ativo.png"}
            iconInactive={"/icones/novas-inativo.png"}>
            Novas
          </ListItem>
          <ListItem
            iconActive={"/icones/surpreenda-me-ativo.png"}
            iconInactive={"/icones/surpreenda-me-inativo.png"}>
            Surpreenda-me
          </ListItem>
        </ListWithStyle>
      </nav>
    </aside>
  )
}
export default Aside;