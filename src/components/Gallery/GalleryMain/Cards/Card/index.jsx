import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const CardWithStyle = styled.article`
  border-radius: min(1.5vw, 30px);

  color: var(--white);

  overflow: hidden;

  & > img{
    display: block;
    
    width: 100%;
    aspect-ratio: 448 / 256;
    object-fit: cover;
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


const Card = ({photo}) => {

  const [isLiked, setIsLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <CardWithStyle key={photo.id} tabIndex="0">
        <img src={photo.path} alt={photo.titulo} />
        <footer>
          <div>
            <h3>{photo.titulo}</h3>
            <p>{photo.fonte}</p>
          </div>
          <div className="cards__icones">
            <Button 
              isLiked={isLiked}
              setIsLiked={() => setIsLiked(!isLiked)}
            >
            </Button>
            <button aria-label="expandir" onClick={() => {setIsOpen(!isOpen)}}></button>
          </div>
        </footer>
      </CardWithStyle>

      <Modal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        photoPath={photo.path}
        photoTitle={photo.titulo}
        photoSource={photo.fonte}
        isLiked={isLiked}
        setIsLiked={() => setIsLiked(!isLiked)}
        >
      </Modal>
        {/* 
          Primeira tentativa. Assim nao funcionava, ainda nao entendi o porque.
  
          <dialog key={photo.id} open={isOpen}>
          <button onCLick={() => setIsOpen(!isOpen)}>x</button>
          <img src={photo.path} alt={photo.titulo}  />
        </dialog> */}
        {/* 
          Segunda tentativa. Assim funcionava, mas nao tinha ::backdrop. O MDN recomenda nao usar o open como eu estava fazendo. 
  
          <Modal key={photo.id} open={isOpen}>
          <div className="grid">
            <img src={photo.path} alt={photo.titulo}  />
            <form method="dialog">
              <button onClick={() => {setIsOpen(!isOpen)}}>x</button>
            </form>
          </div>
        </Modal> */}
    </>
  )
};

export default Card;