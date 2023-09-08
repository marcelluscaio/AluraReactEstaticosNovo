import { styled } from "styled-components";

const ListItemWithStyle = styled.li`
  

&::before{
    content: '';
    display: inline-block;

    width: var(--fs-32);
    aspect-ratio: 1;
    margin-right: var(--fs-16);

    background-image: ${props => props.$isActive ? "url('/icones/home-ativo.png')" : "url('/icones/home-inativo.png')"};
    background-repeat: no-repeat;
    background-size: contain;
    
    
    vertical-align: middle;
  }

  a{
    font-size: var(--fs-24);
    line-height: 1.25;

    vertical-align: middle;
    color: ${props => props.$isActive ? "var(--purple)" : "var(--gray)"};
  }
`

const ListItem = ({children, iconActive, iconInactive, isActive = false}) => {
  return(
    <ListItemWithStyle $isActive={isActive}>
      <a>{children}</a>
      {console.log(isActive)}
    </ListItemWithStyle>
  )
}

export default ListItem;