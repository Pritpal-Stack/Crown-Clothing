import { Routes, Route } from "react-router-dom";

// components 
import Home from "./routes/home/home.components";
import Nav from "./routes/navigation/nav.component";
import Auth from "./routes/Auth/auth.component";
import Shop from "./routes/shop/shop.component";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;