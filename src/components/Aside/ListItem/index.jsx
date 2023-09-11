import { styled } from "styled-components";

const ListItemWithStyle = styled.li`
  & + li{
    margin-top: var(--fs-28);
  }
  &::before{
    content: '';
    display: inline-block;

    width: var(--fs-32);
    aspect-ratio: 1;
    margin-right: var(--fs-16);

    background-image: ${props => props.$isActive ? `url(${props.$iconActive})` : `url(${props.$iconInactive})`};
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
    <ListItemWithStyle $isActive={isActive} $iconActive={iconActive} $iconInactive={iconInactive}>
      <a>{children}</a>
    </ListItemWithStyle>
  )
}

export default ListItem;