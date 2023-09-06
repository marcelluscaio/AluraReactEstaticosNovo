import { styled } from "styled-components";

const InputWithStyle = styled.div`
  min-width: 43%;
  border: 2px solid #ffffff;
  border-radius: .75vw;
  input{
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