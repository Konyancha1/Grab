import './index.css';
import Home from './components/Home';
import ShopAccess from './components/Access';
import BarcodeScanner from './components/BarcodeScanner';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAccess />} />
      <Route path="/scan" element={<BarcodeScanner />} />
      <Route path='/checkout' element={<Payment />} />
      <Route path='/pay' element={<Checkout />} />
    </Routes>
  );
}

export default App;
