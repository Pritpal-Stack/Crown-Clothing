import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";

// components 
import Nav from "./routes/navigation/nav.component";



const Shop = () =>{
  return (
    <div>
      <h1>I am Shopping Page</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Nav /> } >
        <Route index element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
      </Route>
    </Routes>
  );
}

export default App;