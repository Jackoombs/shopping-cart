import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics')
      const data = await response.json()
      setProducts(data)
    }

    getItems()
  },[])

  useEffect(() => {
    console.log(products)
  },[products])

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop products={products}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
