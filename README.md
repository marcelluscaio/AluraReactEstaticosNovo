# SpaceApp
>Readme written in English and in Portuguese

>Readme escrito em inglês e português

- [English](#english)
- [Português](#portugues)

## <a id="english">Table of Contents</a>

- [About the Project](#about)
- [What I Added to the Project](#added)
- [Challenges](#challenges)
- [Layout](#layout)
- [Access](#access)
- [Contributions](#contributions)

<br>
<br>

## <a id="about">About the Project</a>

This project was created during Alura's course "React: style components with Styled Components and handle static files." The course covered best practices in React development, as well as the use of the Styled Components library.

<br>
<br>

## <a id="added">What I Added to the Project</a>

During the course development, I sought to solve some problems differently from what the instructors did.

### Modal

- In the project, the instructors created an HTML dialog element that is populated with card information and triggered using the 'open' attribute.
- I created a dialog for each card. To trigger the modal, I used native methods of the dialog tag, allowing access to the backdrop pseudo-element. To achieve this, I used the useEffect and useRef hooks.

### Responsiveness and Intrinsic sizing

- I chose to define the size of elements based on their content + padding, as opposed to using width and height.
- The website was tested from 280px to 2600px in width. I used various techniques to reduce the need for media queries for responsiveness.
- The size and number of cards in the main gallery are dynamically defined using auto-fit in the display grid:

```css
.cards__container{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.7vw;

  margin-top: var(--fs-24);
}
```

### Accessibility for Users with Different Font Sizes

- I used the REM unit to adapt to the font chosen by users.

- Media queries were declared using  ```em```  to adapt to users' different default font sizes ;

- Stylization adjustments to accommodate different font sizes (e.g., using flex-wrap in the tag search component):

```css
ul{
  display: flex;
  flex-wrap: wrap;
  gap: max(1.64vw, 10px);

  list-style: none;
}
```


### Accessibility for Screen Readers

- I used aria-labels on favorite buttons.


### Keyboard Navigation

- I used tab index to allow keyboard navigation through the cards.


### Styled Scrollbars

- I styled the scrollbar in browsers that use Chromium (such as Google Chrome and Microsoft Edge).

<br>
<br>

## <a id="challenges">Challenges</a>

### Gradient Border

- We had the challenge of creating gradient borders for the top input and the filter button selection. I completed the challenge using the CSS Mask technique.

<br>
<br>

## <a id="layout">Layout</a>

[Access the project layout](https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=Jbm1MnOnZGDa03Yr-0)

<br>
<br>

## <a id="access">Access</a>

[Access the project right now by clicking here.](https://caio-spaceapp.vercel.app/) 

I invite you to check the responsiveness on different screens and default browser font sizes.

<br>
<br>

## <a id="contributions">Contributions</a>

Found a bug? Want to propose an improvement? Feel free to open a PR or issue.







## <a id="portugues">Índice</a>

- [Sobre o projeto](#sobre)
- [O que eu adicionei ao projeto](#adicionei)
- [Desafios](#desafios)
- [Leiaute](#leiaute)

<br>
<br>

## <a id="sobre">Sobre o projeto</a>

Este projeto foi criado durante o curso da Alura "React: estilize componentes com Styled Components e manipule arquivos estáticos". No curso foram abordadas boas práticas no desenvolvimento em React, além da utilização da biblioteca Styled Components.

<br>
<br>

## <a id="adicionei">O que eu adicionei ao projeto</a>

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

<br>
<br>

## <a id="desafios">Desafios</a>

### Borda gradiente

- Tínhamos o desafio de criar bordas gradientes para o input superior e na seleção dos botões de filtro. Realizei o desafio utilizando a técnica de Mask do CSS.

<br>
<br>

## <a id="leiaute">Leiaute</a>

[Acesse o leiaute do projeto](https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=Jbm1MnOnZGDa03Yr-0)

<br>
<br>

## <a id="acesse">Acesse</a>

[Acesse agora mesmo o projeto clicando aqui.](https://caio-spaceapp.vercel.app/) 

Convido você a observar a responsividade em diferentes telas e tamanhos de fonte padrão do navegador.

<br>
<br>

## <a id="contribuir">Contribuições</a>

Encontrou algum bug? Quer propor alguma melhoria? Fique à vontade para abrir um PR ou issue.