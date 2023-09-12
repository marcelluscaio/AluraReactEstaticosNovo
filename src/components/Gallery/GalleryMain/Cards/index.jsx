import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";


const StyledCards = styled.div`
  h2{
    color: var(--purple);
    font-size: var(--fs-32);
    font-weight: 400;
    line-height: 1.2;
  }

  .cards__container{
    display:grid;
    /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))*/
    grid-template-columns: repeat(2, 1fr);
    gap: 1.7vw;

    margin-top: var(--fs-24);

    
  }
`;

const Cards = ({photos}) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return(
    <StyledCards>
      <h2>Navegue pela galeria</h2>
      <div className="cards__container">
        {photos.map(photo => <Card photo={photo}></Card>)}
      </div>
    </StyledCards>
  )
};

export default Cards;