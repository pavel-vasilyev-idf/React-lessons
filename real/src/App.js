import React from 'react'
import { NavBar } from './components/Navbar/NavBar'
import { Menu } from './components/Menu/Menu'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'


function App() {
  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
    </>
  );
}

export default App;
