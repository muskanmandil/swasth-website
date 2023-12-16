import React from 'react'
import './CategoryCard.css'

const CategoryCard = (props) => {
    return(
        <div className='category-card' style={{backgroundColor: props.color }}>
            <p>{props.name}</p>
        </div>
    )
}

export default CategoryCard;