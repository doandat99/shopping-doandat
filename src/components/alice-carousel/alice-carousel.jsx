import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import "./alice-carousel.scss";
import { Product } from "../../components/product/product";
import { AngleLeftIcon, AngleRightIcon } from "components/icons/icons";
const Carousel = () => {
  const dataNew = useSelector((state) => state.mockupdatahot);
  let responsive = () => {};
  return (
    <AliceCarousel
      dotsDisabled={true}
      duration={1000}
      items={dataNew}
      responsive={responsive}
    >
      {dataNew.map((item) => (
        <Product
          image={item.image}
          price={item.price}
          title={item.title}
          status={item.status.content}
        />
      ))}
    </AliceCarousel>
  );
};
export default Carousel;
