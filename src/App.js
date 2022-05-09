import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import getHomePageItems from './utils/apiCalls';

function App() {

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
