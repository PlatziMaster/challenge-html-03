import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
      --color-primary: rgb(102, 68, 153);
      --background: #fff;
      --text: rgb(34, 34, 34);
   }


   * {
      box-sizing: border-box;
   }

   body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      background-color: var(--background);
      color: var(--text);
   }

   a {
      text-decoration: none;
   }
`