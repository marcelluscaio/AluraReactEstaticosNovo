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
          <ListItem isActive={true}>
            Início
          </ListItem>
          <ListItem>
            Mais Vistas
          </ListItem>
          <li>
            <a>Início</a>
          </li>
          <li>
            <a>Mais vistas</a>
          </li>
          <li>
            <a>Mais curtidas</a>
          </li>
          <li>
            <a>Novas</a>
          </li>
          <li>
            <a>Surpreenda-me</a>
          </li>
        </ListWithStyle>
      </nav>
    </aside>
  )
}
export default Aside;