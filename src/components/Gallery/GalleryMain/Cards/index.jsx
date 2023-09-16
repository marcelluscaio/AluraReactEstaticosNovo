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
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.7vw;

    margin-top: var(--fs-24);

    
  }
`;

const Cards = ({photos, filterTag, filterString, isLiked, setIsLiked}) => {  
  /* Fazer: filter tag e filter String. Juntar os dois: filter tag && filter string */
  /* const filteredPhotos = Number.isInteger(filter) ? photos.filter(photo => filter === 0 || photo.tagId === filter) : photos.filter(photo => photo.titulo === filter); */
  function normalizeString(string){
    return string.replace(" ", "").toLowerCase();
  };

  function compareString(string, substring){
    return normalizeString(string).includes(normalizeString(substring));
  };
  
  const filteredPhotos = photos.filter(photo => (filterTag === 0 || photo.tagId === filterTag) && (filterString === '' || compareString(photo.titulo, filterString)));

  return(
    <StyledCards>
      <h2>Navegue pela galeria</h2>
      <div className="cards__container">
        {filteredPhotos.map(photo => 
          <Card key={photo.id} photo={photo} isLiked={isLiked} setIsLiked={setIsLiked}></Card>
        )}
      </div>
    </StyledCards>
  )
};

export default Cards;