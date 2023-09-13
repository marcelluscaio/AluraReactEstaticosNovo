import styled from "styled-components";

const ButtonWithStyle = styled.button`
  background-image: ${props => props.$isLiked ? 'url("/icones/favorito-ativo.png")' :  'url("/icones/favorito.png")'};
`;

const Button = ({isLiked, setIsLiked}) => {
  return(
    <ButtonWithStyle aria-label="curtir" onClick={setIsLiked} $isLiked={isLiked}></ButtonWithStyle>
  )
};

export default Button;