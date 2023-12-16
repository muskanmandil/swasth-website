import React from "react";
import "./ShopProducts.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {
  all_tablets,
  all_syrups,
  all_tonics,
  all_ayurvedic,
  others,
  all_combos,
} from "../Assets/all_products_data.js";

const ShopProducts = () => {
  return (
    <div className="listing">
      <div id="#tablets" className="shopproducts">
        <h1>Tablets and Capsules</h1>
        <hr />
        <div className="shopproducts-items">
          {all_tablets.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="shopproducts">
        <h1>Anti-Allergic and Anti-Cough Syrup</h1>
        <hr />
        <div className="shopproducts-items">
          {all_syrups.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="shopproducts">
        <h1>Tonics and Malt</h1>
        <hr />
        <div className="shopproducts-items">
          {all_tonics.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="shopproducts">
        <h1>Ayurvedic Syrup & Malt</h1>
        <hr />
        <div className="shopproducts-items">
          {all_ayurvedic.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="shopproducts">
        <h1>Ointments, Powder, Lotions & Injections</h1>
        <hr />
        <div className="shopproducts-items">
          {others.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="shopproducts">
        <h1>Swasth Combo Packs</h1>
        <hr />
        <div className="shopproducts-items">
          {all_combos.map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
