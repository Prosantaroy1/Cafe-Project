import React from 'react';
import './Card.css'
const Card = ({card, readTime}) => {
    //console.log(card);
    let totalTime = 0;
    for(const product of card){
        //console.log(product);
        
        totalTime = totalTime + product.time;
        //console.log(totalTime);
    }
    
    return (
        <div className='card'>
            <div className='time-set'>
              <h4>Spent time on read: {readTime} min</h4>
            </div>
            <div className='card-list'>
              <h3>Bookmarked Blogs: {card.length}</h3>
              <p>this is man hangri</p>
            </div>
        </div>
    );
};

export default Card;