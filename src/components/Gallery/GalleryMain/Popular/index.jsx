import styled from "styled-components";

const PopularWithStyle = styled.div`
  width: max(14.75vw, 10rem);
  @media (max-width: 50em){
    &{
      width: 100%
    }
  }
  h2{
    color: var(--purple);
    font-size: var(--fs-32);
    font-weight: 400;
    line-height: 1.2;
    text-align: center;

  }

  img{
    display: block;

    width: 100%;
    aspect-ratio: 212 / 158;
    border-radius: 1.45vw;

  }

  img + img{
    margin-top: 1.7vw;
  }

  img:first-of-type{
    margin-top: var(--fs-28)
  }

  img:last-of-type{
    margin-bottom: 1.7vw;
  }

  a{
    display: block;

    position: relative;

    width: 100%;
    max-width: 15rem;
    padding: .75em 1.25em;
    margin-inline: auto;
    
    font-weight: 700;
    font-size: var(--fs-20);
    line-height: 1.2;
    color: var(--white);
    text-decoration: none;
    text-align: center;

    &::before{
      content: "";
  
      position: absolute;
      inset: 0;
  
      border: 2px solid transparent;
      border-radius: clamp(8px, .75vw, 16px);
  
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
  }
`;

const Popular = ({photos}) => {
  return(
    <PopularWithStyle>
      <h2>Populares</h2>
      {photos.map((photo, index) => index < 5 && <img key={photo.id} src={photo.path} alt={photo.titulo} />)}
      <a href="">Ver Mais</a>
    </PopularWithStyle>
  )
};

export default Popular;