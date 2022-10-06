import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"


const Product = (props) => {
    
   const {name, img, seller, price, ratings} = props.Product;
   
  
//    const handleAddToCart = () => {
//     console.log('clicked')
//   }

    return (
        <div className='product'>
            <img src={img} alt="Missing"></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>

            <button onClick={() => props.handleAddToCart(props.Product)} className='btn-cart'>
                <p>Add to cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>           
            </button>
        </div>
    );
};

export default Product;