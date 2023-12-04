
import './App.css';
import CartPage from './Page/CartPage';
import HomePage from './Page/HomePage';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
    <Route index element={<HomePage />} />
    <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
   </>
   
  );
}

export default App;
