import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "./components/Navbar/Layout";
import Signin from "./components/pages/Auth/Signin/Signin";
import Signup from "./components/pages/Auth/Signup/Signup";
import Homepage from "./components/pages/HomePage/Homepage";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import Products from "./components/pages/Products/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/products" element={<Products />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/singin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
