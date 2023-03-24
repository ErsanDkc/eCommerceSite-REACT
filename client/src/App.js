import { Route, Routes } from "react-router-dom";

import Layout from "./components/Navbar/Layout";
import Signin from "./components/pages/Auth/Signin/Signin";
import Signup from "./components/pages/Auth/Signup/Signup";
import Homepage from "./components/pages/HomePage/Homepage";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import ProductedRoute from "./components/pages/ProductedRoute";
import Products from "./components/pages/Products/Products";
import Profile from "./components/pages/Profile/Profile";

import SuccessEntry from "./components/pages/SuccessEntry";

function App() {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   navigate("/homepage")
  // }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/singin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProductedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/successentry" element={<SuccessEntry />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
