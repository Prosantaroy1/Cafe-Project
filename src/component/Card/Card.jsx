import React from 'react';
import './Card.css'
const Card = ({card}) => {
   // console.log(props.card)
   const {title} = card.product;
      return (
        <div className='card'>
            <div className='card-list'>
              <h3>Bookmarked Blogs: {card.length}</h3>
              <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;