import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import Question from '../Question/Question';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    //time set part
    const [readTime, setReadTime] = useState("")
    const handleTime = (times) =>{
       // console.log(times)
       const previousTime = JSON.parse(localStorage.getItem("readTime"));
       if(previousTime){
         const sum = previousTime + times;
         localStorage.setItem("readTime", sum);
         setReadTime(sum);
       }
       else{
         localStorage.setItem("readTime", times);
         setReadTime(times);
       }
    }
    //BookMark part
    const [card, setCard] =useState([]);
    //console.log(card)
    const handleToAdd = (product) =>{
       // console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
        //addToDb(product.id);
     
    }
    //console.log(card);
    return (
        <div className='shop-main'>
          <div className='shop-container'>
             <div className='products-container'>
             {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleToAdd ={handleToAdd}
                    handleTime={handleTime}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Card readTime={readTime} card={card}></Card>
            </div>
            </div>
            <div className='Question'>
                <Question></Question>
            </div>
        </div>
        
    );
};

export default Shop;