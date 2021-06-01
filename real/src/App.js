import React from 'react'
import { NavBar } from './components/Navbar/NavBar'
import { Menu } from './components/Menu/Menu'
import { GlobalStyle } from './components/Style/GlobalStyle/GlobalStyle'
import { ModalItem } from './components/Modal/ModalItem/ModalItem'
import { Order } from './components/Order/Order'
import { useOpenItem }from './components/Hooks/UseOpenItem/useOpenItem'
import { useOrder }from './components/Hooks/UseOrder/useOrder'



function App() {

  const openItem = useOpenItem();
  const orders = useOrder();


  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
