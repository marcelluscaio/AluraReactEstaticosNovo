import styled from "styled-components";

const StyledCards = styled.div`
  .cards__container{
    display:grid;
    /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))*/
    grid-template-columns: repeat(2, 1fr);
    gap: 1.7vw;

    article{
      border-radius: 20px;

      color: var(--white);

      overflow: hidden;
    }

    article > img{
      display: block;
      
      width: 100%;
      aspect-ratio: 448 / 256;
    }

    article h3{
      font-size: var(--fs-20);
      font-weight: 700;
      line-height: 1.2;
    }

    article h3 + p{
      padding-bottom: .065em;
      margin-top: .25em;

      font-size: var(--fs-16);
      line-height: 1.2;
    }

    article > footer{
      display: flex;

      padding: var(--fs-16);
      padding-left: var(--fs-20);
      
      background-color: var(--dark-blue);
    }

    footer > :nth-child(1){
      width: 100%
    }

    footer > :last-child{
      display: flex;
      align-items: flex-end;
      gap: var(--fs-24);
    }

    .cards__icones > img{
      width: var(--fs-24);
      height: var(--fs-24);
    }
  }
`;

const Cards = () => {
  return(
    <StyledCards>
      <h2>Navegue pela galeria</h2>
      <div className="cards__container">
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div className="cards__icones">
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div>
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div>
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div>
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div>
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
        <article>
          <img src="/imagens/galeria/foto-1.png" alt="" />
          <footer>
            <div>
              <h3>Nome da foto</h3>
              <p>Fonte/foto/satelite</p>
            </div>
            <div>
              <img src="/icones/favorito.png" alt=""/>
              <img src="/icones/expandir.png" alt=""/>
            </div>
          </footer>
        </article>
      </div>
    </StyledCards>
  )
};

export default Cards;