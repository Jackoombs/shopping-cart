import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

function App() {

  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics')
      const data = await response.json()
      setProducts(data)
    }
    getItems()
  },[])

  useEffect(() => {
    const quantitys = basket.map(element => element.quantity)
    const numberOfItems = quantitys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotalItems(numberOfItems)
  },[basket])

  return (
    <Router>
      <div className='App'>
        <Nav basketCounter={totalItems}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop products={products} setBasket={setBasket} basket={basket}/>} />
          <Route path="/checkout" element={<Checkout basket={basket}/>} /> 
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
