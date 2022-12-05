import './index.css';
import Home from './components/Home';
import ShopAccess from './components/Access';
import Cam from './components/Webcam';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAccess />} />
      <Route path="/webcam" element={<Cam />} />
    </Routes>
  );
}

export default App;
