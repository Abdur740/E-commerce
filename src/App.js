import './App.css';
import Header from './Components/header';
import Cartpage from './Components/cartpage'
import Allcomponents from './Components/allcomponents'
import Creatingcontext from './Components/creatingcontext'
import { useContext, useState } from 'react';

function App() {
  const [data,setData]=useState([])
  return (
    <Creatingcontext.Provider value={[data,setData]}>
    <div>
      <Header/>
      <Allcomponents></Allcomponents>
      <Cartpage className="cart-page"></Cartpage>
    </div>
    </Creatingcontext.Provider>
  );
}

export default App;