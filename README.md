- No header, em vez de padding 60px, usei rem
- Usei outra imagem (pois a do projeto nao batia com as dimensoes do gifma, e configurei a largura da imagem em %)
- Adicionei fonte Lato 
- Fiz o desafio do header
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

- Nos itens do Menu:
  - troquei o uso de img por pseudoelementos
  - Troquei o uso de width por uma tecnica de espacamento intrinseco
  - Usei vertical align para alinhar icone e texto (para explorar alternativas ao flex)
  - Precisei usar flex para evitar que o a fosse para baixo dos icones (flex + white space no break)
  - Consegui resolver usando grid


Figma https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=Jbm1MnOnZGDa03Yr-0


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
