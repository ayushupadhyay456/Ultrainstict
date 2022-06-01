import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Cart from './Cart'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {CartProvider} from 'react-use-cart';
import Finalpage from './Finalpage';



function App() {
  
  return (
    <Router>
    <CartProvider>
      <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route exact path='/Cart' element={<Cart/>}/>
   <Route exact path="/Finalpage" element={<Finalpage/>}/>

    </Routes>
    </CartProvider>
    
    </Router>
  );
}

export default App;
