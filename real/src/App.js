import React from 'react'
import { NavBar } from './components/Navbar/NavBar'
import { Menu } from './components/Menu/Menu'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { ModalItem } from './components/ModalItem/ModalItem'

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
