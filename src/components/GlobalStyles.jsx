// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Yusei Magic', sans-serif;
    color: #2B394E;
  }
  @media screen and (min-width: 600px) {
      body {
          max-width: 1250px;
          margin: 0px auto;
      }
  }
`;
 
export default GlobalStyle;