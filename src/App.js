import './App.css';
import Header from './Components/header';
import Cartpage from './Components/cartpage'
import Allcomponents from './Components/allcomponents'

function App() {

  return (
    <div>
      <Header/>
      <Allcomponents></Allcomponents>
      <Cartpage className="cart-page"></Cartpage>
    </div>
  );
}

export default App;