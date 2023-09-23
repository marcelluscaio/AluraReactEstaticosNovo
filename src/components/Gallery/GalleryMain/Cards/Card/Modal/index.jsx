import { useEffect, useRef } from "react";
import Button from "../Button";
import styled from "styled-components";

const ModalWithStyle = styled.dialog`

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80.3%;
  max-width: 1200px;
  
  border: none;
  
  border-radius: min(1.5vw, 30px);
  overflow: hidden;

  background: none;

  &::backdrop{
    background-color: rgba(0, 0, 0, 0.7);
  }



  > button{
    position: absolute;
    top: min(1.7vw, 32px);
    right: min(1.7vw, 32px);

    width: max(2.8%, 1.25rem);
    aspect-ratio: 1;
    border: none;

    background-color: transparent;
    background-image: url(/icones/fechar.png);
    background-size: 66% 66%;
    background-repeat: no-repeat;
    background-position: center;

    cursor: pointer;
  }

  > .wrapper{
    display: grid;
    grid-template-rows: auto 1fr;

    width: 100%;
    aspect-ratio: 1156/740;
    max-height: 95vh;

    overflow-y: auto;
    /*Foi necessario colocar auto porque o elemento herda do elemento pai o hidden. Colocar scroll deixava o espaco do scroll mesmo quando nao necessario*/

    @media (max-width: 45em){
      aspect-ratio: 3 / 4
    }

    &::-webkit-scrollbar{
      width: min(1.4vw, 1rem);
  
      background-color: var(--dark-blue)
    }
    &::-webkit-scrollbar-thumb{
      border-radius: min(1.4vw, 1rem);
      
      background-color: var(--purple);
  
      box-shadow: inset 1rem 0 rgba(0, 0, 0, .5)
    }


  }

  > .wrapper > img{
    display: block;

    width: 100%;
    aspect-ratio: 1156 / 600;
    max-height: calc(95vh * 0.9);

    object-fit: cover;

    @media (max-width: 45em){
      aspect-ratio: 4 / 3
    }
  }

  > .wrapper > footer{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-block: var(--fs-16);
    padding-inline: var(--fs-24);
    
    background-color: var(--dark-blue);

    color: var(--white);

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
  }
}
`;

const Modal = ({isOpen, setIsOpen, photoPath, photoTitle, photoSource, isLiked, setIsLiked, id}) => {
  const ref = useRef();

  useEffect(() => {
    isOpen ? ref.current?.showModal() : ref.current?.close()
  }
  , [isOpen]);

  return(
    <ModalWithStyle
      ref={ref}
      onCancel={setIsOpen}
      onClick={(e) => 
        {
          if(e.target.tagName === "DIALOG"){
            setIsOpen();
          }
        }
      }
    >
      <button onClick={setIsOpen} aria-label="Close"></button>
      <div className="wrapper">
        <img src={photoPath} alt={photoTitle}  />
        <footer>
          <div>
            <h3>{photoTitle}</h3>
            <p>{photoSource}</p>
          </div>

          <Button isLiked={isLiked} setIsLiked={setIsLiked} id={id}></Button>
        </footer>
      </div>
      
    </ModalWithStyle>
  )
};

export default Modal;