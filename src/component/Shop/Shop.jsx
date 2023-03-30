import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <h2>{product.time}</h2>)
                }
            </div>
            <div className='card-container'>
                <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
        </div>
    );
};

export default Shop;