import styled from "styled-components";
import tags from "./tags.json";
import { useState } from "react";

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
    flex-wrap: wrap;
    gap: max(1.64vw, 10px);

    list-style: none;

    button{
      border: 2px solid transparent;
      border-radius: .42em;
      padding: .42em .34em .5em;
      background-color: transparent;
      background: #dfdfdf45;

      color: var(--white);
      font-size: var(--fs-24);
      line-height: 1;

      cursor: pointer;
      isolation: isolate;

      &.gradient-border{
        position: relative;
        
        &::before{
          content: "";

          position: absolute;
          inset: -2px;

          border: 2px solid transparent;
          border-radius: .42em;

          background: linear-gradient(120deg, #c98cf1, #7b78e5) border-box;
          mask-image: 
            linear-gradient(#ffffff, #ffffff) padding-box, 
            linear-gradient(#ffffff, #ffffff);
          -webkit-mask: 
            linear-gradient(#ffffff, #ffffff) padding-box, 
            linear-gradient(#ffffff, #ffffff);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
        }

        }
      }
    }
  }
`;

const Filter = ({setFilterTag}) => {
  const [isActive, setIsActive] = useState(0);
  return(
    <StyledFilter>
      <h2>Busque por tags:</h2>
      <nav>
        <ul>
        {tags.map(tag => 
          <li key={tag.id}>
            <button  
              onClick={() =>
                { setFilterTag(tag.id);
                  setIsActive(tag.id);
                }
              }
              className={isActive===tag.id ? "gradient-border" : ""}
            >
              {tag.titulo}
            </button>
          </li>
          )
        }
        </ul>
      </nav>
    </StyledFilter>
  )
};

export default Filter;