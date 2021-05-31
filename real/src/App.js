import React from 'react'
import { NavBar } from './components/Navbar/NavBar'
import { Menu } from './components/Menu/Menu'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { ModalItem } from './components/ModalItem/ModalItem'
import { Order } from './components/Order/Order'

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
