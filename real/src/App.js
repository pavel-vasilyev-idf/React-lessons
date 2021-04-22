import React from 'react'
import {createGlobalStyle} from 'styled-components';
import { NavBar } from './components/Navbar/NavBar'


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;

  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,h2,h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

`;

function App() {
  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
