import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}
body {
  margin: 0;
  min-height: 100dvh;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}




*{
  box-sizing: border-box;
  padding: 0;
  margin: 0
}
h1{
  margin:  0
}

body{
  font-family: 'Lato', sans-serif;
}

:root{
  --fs-16: 1rem;
  --fs-20: 1.25rem;
  --fs-24: 1.5rem;
  --fs-28: 1.75rem;
  --fs-32: 2rem;
  --fs-40: 2.5rem;
  --fs-56: 3.5rem;


  --white: #FFFFFF;
  --gray: #D9D9D9;
  --purple: #7B78E5;
  --dark-blue: #001634;
}

.container{
  width: 96.66%;
  max-width: 132rem;
  margin-inline: auto;
}

::-webkit-scrollbar{
  width: min(1.4vw, 1rem);

  background-color: var(--dark-blue)
}
::-webkit-scrollbar-thumb{
  border-radius: min(1.4vw, 1rem);
  
  background-color: var(--purple);

  box-shadow: inset 1rem 0 rgba(0, 0, 0, .5);

}
`

export default GlobalStyles