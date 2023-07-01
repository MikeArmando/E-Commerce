import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
import { Home } from './components/pages/home/home'
import { Men } from './components/pages/men/men'
import { Women } from './components/pages/women/women'
import { Account } from './components/pages/account/account'

const App = () => {
  return (
    <div className="App">

      <><Navbar /></>

      <Routes path="/Fit-And-Casual" element={Home}>
        <Route exact path='/Fit-And-Casual' element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <><Footer /></>

    </div>
  );
}

export default App;
