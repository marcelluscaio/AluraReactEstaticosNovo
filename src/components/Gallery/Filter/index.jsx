import styled from "styled-components";

const StyledFilter = styled.div`
  h2{
    color: var(--gray);
    font-weight: 400;
    font-size: var(--fs-24);
    line-height: 1.2;
  }
`;

const Filter = () => {
  return(
    <StyledFilter>
      <h2>Busque por tags:</h2>
    </StyledFilter>
  )
};

export default Filter;