import { useEffect, useRef } from "react";

import styled from "styled-components";

const ModalWithStyle = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80.3%;
  max-width: 1200px;
  border: none;

  &::backdrop{
    background-color: rgba(0, 0, 0, 0.7);
  }
  & > .grid{
    display: grid;
    grid-template-rows: 1fr auto;
    
    aspect-ratio: 1156/740;
    max-height: 95vh;


    img{
      height: 100%;

    }
}
`;

const Modal = ({isOpen, setIsOpen, photoPath, photoTitle}) => {
  const ref = useRef();

  useEffect(() => {
    isOpen ? ref.current?.showModal() : ref.current?.close()
  }
  , [isOpen]);

  return(
    <ModalWithStyle
      ref={ref}
      onCancel={setIsOpen}
    >
      <div className="grid">
        <img src={photoPath} alt={photoTitle}  />
        <form method="dialog">
          <button onClick={setIsOpen}>x</button>
        </form>
      </div>
    </ModalWithStyle>
  )
};

export default Modal;