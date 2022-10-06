import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css';
// import Product from './../product/Product';
const Shop = () => {
    // array theke data load korar upay
   const [products, setProducts] = useState([]);
   const [cart, setCart] =useState([]);

   useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
   }, []);

    // end

      const handleAddToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
      }

    return (
        <div className='shop-container'>
          <div className='products-container'>
            {
                products.map(product=> 
                <Product key={product.id}
                        Product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
            }
            </div> 
          <div className='cart-container'>
           <Cart cart={cart}></Cart>
            </div> 
        </div>
    );
};

export default Shop;