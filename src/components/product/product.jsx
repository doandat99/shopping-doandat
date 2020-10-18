import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <Link to="/product-detail" className={props.classComponent}>
      <div className="product-image">
        <img src={props.image} />
      </div>
      <div className="product-price  d-flex">
        <p className="price">
          {props.price}
          <u className="del">đ</u>
        </p>
      </div>
      <h2 className="product-title">{props.title}</h2>
      {props.status.content && (
        <div className="price-status">{props.status.content}</div>
      )}
    </Link>
  );
};
