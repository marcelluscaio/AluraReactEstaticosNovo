import styled from "styled-components";
import tags from "./tags.json";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 4.25vw;
  h2{
    color: var(--gray);
    font-weight: 400;
    font-size: var(--fs-24);
    line-height: 1.2;
  }
  ul{
    display: flex;
    gap: 1.64vw;

    list-style: none;
    button{
      border: 2px solid transparent;
      border-radius: .42em;
      padding: .42em .34em .5em;

      background: #dfdfdf45;

      color: var(--white);
      font-size: var(--fs-24);
      line-height: 1;
    }
  }
`;

const Filter = () => {
  return(
    <StyledFilter>
      <h2>Busque por tags:</h2>
      <nav>
        <ul>
        {tags.map(tag => 
          <li>
            <button key={tag.id}>{tag.titulo}</button>
          </li>
          )
        }
        </ul>
      </nav>
    </StyledFilter>
  )
};

export default Filter;