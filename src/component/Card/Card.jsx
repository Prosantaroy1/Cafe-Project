import React from 'react';
import './Card.css'
const Card = ({card}) => {
    //console.log(card)
   let titleMinit =0;
   for(const product of card){
      titleMinit =titleMinit + product.time;
      console.log(titleMinit);
   }
         return (
        <div className='card'>
            <div className='time-set'>
              <h4>Spent time on read:  {titleMinit} min</h4>
            </div>
            <div className='card-list'>
              <h3>Bookmarked Blogs: {card.length}</h3>
              
            </div>
        </div>
    );
};

export default Card;