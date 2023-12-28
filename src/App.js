import "./styles/Global.css";
import "./styles/Main.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/profile";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CreateProduct from "./pages/CreateProduct";
import Admin from "./pages/Admin";
import UpdateProduct from "./pages/UpdateProduct";
import AllProducts from "./pages/AllProducts";
import CategoryOne from "./pages/CategoryOne";
import CategoryTwo from "./pages/CategoryTwo";
import CategoryThree from "./pages/CategoryThree";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/shop" element={ <Shop />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/create-product" element={ <CreateProduct />} />
          <Route path="/admin" element={ <Admin />} />
          <Route path="/update-product" element={ <UpdateProduct />} />
          <Route path="/all-products" element={ <AllProducts />} />
          <Route path="/category/smartphones" element={ <CategoryOne />} />
          <Route path="/category/headphones" element={ <CategoryTwo />} />
          <Route path="/category/smartwatches" element={ <CategoryThree />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
