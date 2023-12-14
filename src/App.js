
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import {ShopContextProvider} from "./context/shopContext"
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes> 
      </Router>
      </ShopContextProvider>  
    </div>
  );
}

export default App;
