import '../src/assets/global.css';
import { Route, Routes } from 'react-router-dom';
// Components
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
// Pages
import { Home } from '../src/pages/home/home'
import { Men } from '../src/pages/men/men'
import { Women } from '../src/pages/women/women'
import { Kids } from '../src/pages/kids/kids'
import { Accesories } from '../src/pages/accesories/accesories'
import { Cart } from '../src/pages/cart/cart'
import { Account } from '../src/pages/account/account'
import { Fav } from '../src/pages/fav/fav'
import { View } from '../src/pages/view/view'

const App = () => {
  return (
    <div className="App">

      <><Navbar /></>

      <Routes path="/Fit-and-Casual" element={Home}>
        <Route exact path='/Fit-and-Casual' element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accesories" element={<Accesories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/view" element={<View />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <><Footer /></>

    </div>
  );
}

export default App;