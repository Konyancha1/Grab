import './index.css';
import Home from './components/Home';
import Scan from './components/Scanner';
import ShopAccess from './components/Access';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (   
    <Routes>
      <Route path="/admin" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAccess />} />
      <Route path='/checkout' element={<Payment />} />
      <Route path='/scan' element={<Scan />} />
      <Route path='/pay' element={<Checkout />} />
    </Routes>
  );
}

export default App;
