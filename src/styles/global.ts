import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/githubBackground.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body{
    background: #666 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }
  body,input, button{
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }
  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

  }

  button{
    cursor: pointer;
  }

`;
