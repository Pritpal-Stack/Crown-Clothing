import { Routes, Route } from "react-router-dom"; 
import { useEffect } from "react";
import { getCurrentUser } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

// components 
import Home from "./routes/home/home.components";
import Nav from "./routes/navigation/nav.component";
import Auth from "./routes/Auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { setCurrentUser } from './store/user/user.actions'

const App = () => {

  const dispatch = useDispatch();
 
  useEffect(() => {
    getCurrentUser().then(resp => {
      console.log('resp', resp) 
    })
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Nav />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;