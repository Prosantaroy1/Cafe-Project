import React from 'react';
import './Product.css'
import icon from '../../img/bookmark.svg'

const Product = (props) => {
    console.log(props.product);
    const {name, tag, title, img, date, logo, time} =props.product;
    const handleToAdd = props.handleToAdd;
    return (
        <div className='product'>
            <img src={img} alt='thamble'/>
            <div className='title-container'>
                <div className='part-1'>
                    <img className='logo-img' src={logo} alt='logo-img'/>
                    <div className='title-name'>
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='part-2'>
                    <p className='btn'>{time} min read 
                      <img  className='btn-img' 
                      onClick={()=> handleToAdd(handleToAdd)}
                      src={icon} alt='btn-icon'/>
                    </p>
                </div>
            </div>
            <h2 className='title-description'>{title}</h2>
            <p className='tag'>{tag}</p>
            <a href='#' className='link'>Mark as read</a>
            <hr className='border'/>
        </div>
    );
};

export default Product;