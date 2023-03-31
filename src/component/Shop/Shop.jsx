import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    //card btn 
    const [card, setCard] =useState([]);
    const handleToAdd = (product) =>{
        //console.log('product');
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleToAdd ={handleToAdd}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;