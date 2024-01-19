import React, {useEffect, useState} from 'react';
import "../styles/Home.css";
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:4000/product");

  const data = res.data;

  console.log(data);

  return data;
};


const Home = () => {
  const [productData, setProductData] = useState([]);

  const assignData = async () => {
    const fetchedProductData = await fetchProducts();

    setProductData(fetchedProductData);
  }

  useEffect(() => {
    assignData();
  }, []);

  return (
    <div>
      <div className="hero-img">
        <div className="hero-section">
          <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
        </div>
      </div>
      <div className="category-div">
        <h2>Categories</h2>
        <section className="categories">
          <CategoryCard
            categoryImg="https://media.wired.com/photos/645531bdd96882f74caa3c44/master/w_1280,c_limit/Samsung-Galaxy-A54-5G-Review-Featured.jpg" categoryText="Mobiles" 
          />
          <CategoryCard 
            categoryImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeB2ACBQCwRn3sNL26ayq4sFTjwKG11jlLEw&usqp=CAU" categoryText="Headphones" 
          />
          <CategoryCard 
            categoryImg="https://media.wired.com/photos/64483544c3f2cf2daf39f921/16:9/w_800%2Ch_450%2Cc_limit/undefined" categoryText="Smartwatches" 
          />
        </section>
      </div>


      <div className="product-div">
        <h2>Products</h2>
        <section className="products">
          {
            productData.map((product) => {
              return (
                <li key={product._id}>
                  <ProductCard
                    productId={product._id}
                    productImg={product.imgUrl}
                    title={product.title}
                    price={product.price}
                  />
                </li>
              )
            })
          }
        </section>
      </div>
    </div>
  );
};

export default Home;