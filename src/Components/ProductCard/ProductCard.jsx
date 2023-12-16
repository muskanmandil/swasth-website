import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
    return(
        <div className='product-card'>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <div className="product-card-price">₹{props.price}</div>
            {/* cart icon */}

        </div>
    )
}

export default ProductCard;