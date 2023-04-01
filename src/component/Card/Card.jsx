import React from 'react';
import Product from '../Product/Product';
import './Card.css'
const Card = ({readTime, card}) => {
   console.log(card);
    return (
        <div className='card'>
            <div className='time-set'>
              <h4>Spent time on read: {readTime} min</h4>
            </div>
            <div className='card-list'>
             <h3>Bookmarked Blogs: {card.length}</h3> 

             {
                card.map(Card => {
                 return<div className='bookmark-click'>
                    <h3>{Card.title}</h3>
                 </div>
                })
            }
            </div>
        </div>
    );
};

export default Card;