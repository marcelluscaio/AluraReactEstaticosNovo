import { styled } from "styled-components";

const InputWithStyle = styled.div`
  position: relative;

  min-width: 43.3%;

  &::before{
    content: "";

    position: absolute;
    inset: 0;

    border: 2px solid transparent;
    border-radius: .75vw;

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
  input{
    position: relative;
    z-index: 1;
    width: 100%;
    padding-block: .9em;
    padding-inline-start: .8em;
    border: none;

    background: transparent;

    font-size: var(--fs-20);
    color: var(--gray);
    &::placeholder{
      color: inherit;

      opacity: .5;
    }
  }
`

const Input = () => {
  return(
    <InputWithStyle>
      <input placeholder="O que você procura?" />
    </InputWithStyle>
  )
}

export default Input;