
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
function App() {
  return (
    <div className="App">
      <useShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes> 
      </Router>
      </useShopContextProvider>
    </div>
  );
}

export default App;
