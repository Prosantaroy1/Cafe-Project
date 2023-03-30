import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {name, tag, title, img} =props.product;
    return (
        <div className='product'>
            <img src={img} alt='thamble'/>
            <p>{name}</p>
        </div>
    );
};

export default Product;