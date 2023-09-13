import styled from "styled-components";

const ButtonWithStyle = styled.button`
width: var(--fs-24);
height: var(--fs-24);
border: none;

background-color: transparent;

background-repeat: no-repeat;
background-size: 100% 100%;

cursor: pointer;  

background-image: ${props => props.$isLiked ? 'url("/icones/favorito-ativo.png")' :  'url("/icones/favorito.png")'};
`;

const Button = ({isLiked, setIsLiked}) => {
  return(
    <ButtonWithStyle aria-label="curtir" onClick={setIsLiked} $isLiked={isLiked}></ButtonWithStyle>
  )
};

export default Button;