import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Shop from "./components/shop/Shop";
import Products from "./components/shop/products/Products";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
