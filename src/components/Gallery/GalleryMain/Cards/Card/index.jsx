import { useState } from "react";
import styled from "styled-components";

const CardWithStyle = styled.article`
  border-radius: 20px;

  color: var(--white);

  overflow: hidden;

  & > img{
    display: block;
    
    width: 100%;
    aspect-ratio: 448 / 256;
  }

  h3{
    font-size: var(--fs-20);
    font-weight: 700;
    line-height: 1.2;
  }

  h3 + p{
    padding-bottom: .065em;
    margin-top: .25em;

    font-size: var(--fs-16);
    line-height: 1.2;
  }

  & > footer{
    display: flex;

    padding: var(--fs-16);
    padding-left: var(--fs-20);
    
    background-color: var(--dark-blue);
  }

  footer > :nth-child(1){
    width: 100%
  }

  footer > :last-child{
    display: flex;
    align-items: flex-end;
    gap: var(--fs-24);
  }

  .cards__icones > img{
    width: var(--fs-24);
    height: var(--fs-24);
  }

  .cards__icones > button{
    width: var(--fs-24);
    height: var(--fs-24);
    border: none;

    background-color: transparent;
    
    background-repeat: no-repeat;
    background-size: 100% 100%;

    cursor: pointer;
  }

  .cards__icones > button:last-child{
    background-image: url("/icones/expandir.png");
  }
`;

const Button = styled.button`
  background-image: ${props => props.$isLiked ? 'url("/icones/favorito-ativo.png")' :  'url("/icones/favorito.png")'};
`;

const Card = ({photo}) => {

  const [isLiked, setIsLiked] = useState(false)

  return(
    <CardWithStyle key={photo.id} tabIndex="0">
      <img src={photo.path} alt={photo.titulo} />
      <footer>
        <div>
          <h3>{photo.titulo}</h3>
          <p>{photo.fonte}</p>
        </div>
        <div className="cards__icones">
          <Button aria-label="curtir" onClick={() => setIsLiked(!isLiked)} $isLiked={isLiked}></Button>
          <button aria-label="expandir"></button>
        </div>
      </footer>
    </CardWithStyle>
  )
};

export default Card;