import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { Home } from './components/pages/home/home'
import { Men } from './components/pages/men/men'
import { Women } from './components/pages/women/women'
import { Kids } from './components/pages/kids/kids'
import { Accesories } from './components/pages/accesories/accesories'
import { Cart } from './components/pages/cart/cart'
import { Account } from './components/pages/account/account'
import { View } from './components/pages/view/view'

const App = () => {
  return (
    <div className="App">

      <><Navbar /></>

      <Routes path="/E-Commerce" element={Home}>
        <Route exact path='/E-Commerce' element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accesories" element={<Accesories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view" element={<View />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <><Footer /></>

    </div>
  );
}

export default App;