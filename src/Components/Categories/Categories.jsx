import React from "react";
import "./Categories.css";
import all_categories from "../Assets/categories_data.js";
import CategoryCard from '../CategoryCard/CategoryCard.jsx'

const Categories = () => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <hr />
      <div className="categories-item">
        {all_categories.map((item,i) => {
          return (
            <CategoryCard key={i} id={item.id} name={item.name} color={item.color} code={PaymentResponse.code} />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
