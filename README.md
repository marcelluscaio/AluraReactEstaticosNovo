> criar em inglês

# SpaceApp

## Sobre o projeto

Este projeto foi criado durante o curso da Alura "React: estilize componentes com Styled Components e manipule arquivos estáticos".

Durante o desenvolvimento do curso busquei resolver alguns problemas de forma diferente da realizada pelos instrutores.


## Características distintas da minha implementação

### Modal

- No projeto os instrutores criam um elemento HTML dialog, que é povoado com as informações dos cards e acionado a partir do atributo 'open';
- Eu criei um dialog para cada card. Para acionar o modal eu utilizei os métodos nativos da tag dialog, permitindo acesso ao pseudoelemento backdrop. Para isso, utilizei os hooks useEffect e useRef;

#### Referências:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

https://stackoverflow.com/questions/76616735/tailwind-backdrop-not-applying-to-dialog-element

https://medium.com/@dimterion/modals-with-html-dialog-element-in-javascript-and-react-fb23c885d62e#:~:text=In%20general%2C%20makes,as%20the%20modal%20is%20opened.

https://blog.webdevsimplified.com/2023-04/html-dialog/


### Design intrínseco

- Containers foram definidos cutilizando valores em %;
- Dei preferência para definir o tamanho de elementos a partir de seu conteúdo + padding, em oposição a utilizar width e height;
- O tamanho e quantidade de cards na galeria principal é definida de forma dinâmica utilizando o auto-fit do display grid;


### Acessibilidade para usuários com tamanhos de fonte diferentes

- Uso da unidade REM para adequação à fonte escolhida pelos usuários;
- Adaptações na estilização para comportar tamanhos de fontes diferentes (e.g. utilizar flex-wrap no componente de busca por tags);


### Acessibilidade para leitores de tela

- Utilizei aria-labels nos botões de favoritar

#### Referências:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label


### Navegação pelo teclado

- Utilizei tab index para permitir navegação pelos cards a partir do teclado

#### Referências:
https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex


### Estrutura

- Os instrutores utilizaram uma composição de flex para estruturar o conteúdo. Entendi ser mais interessante resolver a estrutura do conteúdo principal utilizando display grid (na section com classe "grid" no App.jsx).


### Scrollbars estilizadas

- Estilizei a scrollbar em navegadores que utilizam chromium (Como Google Chrome e Microsoft Edge);


## Desafios

### Borda gradiente
- INput com border colorida
  - Border image nao funciona com border radius
      border-image: linear-gradient(180deg, green, orange);
      border-image-slice: 1;
  - Usar um ::before por tras nao daria porque o input é transparente
    - header isolation isolate
    - div
      (
      position: relative;

      background-color: white;
      background-clip: padding-box;
      )
    - ::before
      (
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: linear-gradient(45deg, red, pink);
      )
  - tecnica do background clip (padding e border) tambem nao funcionaria
  - 
  refs:
  KP - border-image
  https://www.youtube.com/watch?v=ypstT5UfCsk

  Pseudoelemento
  https://css-tricks.com/gradient-borders-in-css/

  Padding-box + border box
  https://codyhouse.co/nuggets/css-gradient-borders

  Mask
  https://nikitahl.com/gradient-border-css

  Deep on masking
  https://ishadeed.com/article/css-masking/
  https://css-tricks.com/clipping-masking-css/
  https://www.youtube.com/watch?v=FCuNtCq3nRg



## Figma do projeto

 https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=Jbm1MnOnZGDa03Yr-0
