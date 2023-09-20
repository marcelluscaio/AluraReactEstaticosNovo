[Sobre](#sobre)

> criar em inglês

# SpaceApp

## <a id="sobre">Sobre o projeto</a>

Este projeto foi criado durante o curso da Alura "React: estilize componentes com Styled Components e manipule arquivos estáticos". No curso foram abordadas boas práticas no desenvolvimento em React, além da utilização da biblioteca Styled Components.


## O que eu adicionei ao projeto

Durante o desenvolvimento do curso busquei resolver alguns problemas de forma diferente da realizada pelos instrutores.

### Modal

- No projeto os instrutores criam um elemento HTML dialog, que é povoado com as informações dos cards e acionado a partir do atributo 'open';
- Eu criei um dialog para cada card. Para acionar o modal eu utilizei os métodos nativos da tag dialog, permitindo acesso ao pseudoelemento backdrop. Para isso, utilizei os hooks useEffect e useRef;


### Responsividade e dimensionamento intrínseco

- Dei preferência para definir o tamanho de elementos a partir de seu conteúdo + padding, em oposição a utilizar width e height;

- O site foi testado de 280px a 2600px de largura. Utilizei diversas técnicas que reduzem a necessidade do uso de media queries para responsividade;

- O tamanho e quantidade de cards na galeria principal é definida de forma dinâmica utilizando o auto-fit do display grid;

```css
.cards__container{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.7vw;

  margin-top: var(--fs-24);
}
```

### Acessibilidade para usuários com tamanhos de fonte diferentes

- Uso da unidade REM para adequação à fonte escolhida pelos usuários;

- Media queries declaradas utilizando ```em``` para se adequar a usuários com fontes de tamanhos diferentes;

- Adaptações na estilização para comportar tamanhos de fontes diferentes (e.g. utilizar flex-wrap no componente de busca por tags);

```css
ul{
  display: flex;
  flex-wrap: wrap;
  gap: max(1.64vw, 10px);

  list-style: none;
}
```


### Acessibilidade para leitores de tela

- Utilizei aria-labels nos botões de favoritar;


### Navegação pelo teclado

- Utilizei tab index para permitir navegação pelos cards a partir do teclado;


### Scrollbars estilizadas

- Estilizei a scrollbar em navegadores que utilizam chromium (Como Google Chrome e Microsoft Edge);


## Desafios

### Borda gradiente

- Tínhamos o desafio de criar bordas gradientes para o input superior e na seleção dos botões de filtro. Realizei o desafio utilizando a técnica de MAsk do CSSç



## Figma do projeto

 https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=Jbm1MnOnZGDa03Yr-0
