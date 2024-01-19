import "./styles/Global.css";
import "./styles/Main.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CreateProduct from "./pages/CreateProduct";
import Admin from "./pages/Admin";
import UpdateProduct from "./pages/UpdateProduct";
import ProductList from "./pages/ProductList";
import CategoryOne from "./pages/CategoryOne";
import CategoryTwo from "./pages/CategoryTwo";
import CategoryThree from "./pages/CategoryThree";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/shop" element={ <Shop />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/create-product" element={ <CreateProduct />} />
          <Route path="/admin" element={ <Admin />} />
          <Route path="/products/:productId/update" element={ <UpdateProduct />} />
          <Route path="/product-list" element={ <ProductList />} />
          <Route path="/category/mobiles" element={ <CategoryOne />} />
          <Route path="/category/headphones" element={ <CategoryTwo />} />
          <Route path="/category/smartwatches" element={ <CategoryThree />} />
          <Route path="/product-details/:productId" element={ <ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
