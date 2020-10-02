import React from "react";
import "./category-section.scss";
import iconAngleRight from "assets/icons/icon-angle-right.png";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleRightIcon } from "components/icons/icons";
import { useSelector, useDispatch } from "react-redux";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

export const CategorySection = ({ title, link, dataProduct, isSlider }) => {
  const dataNew = useSelector((state) => state.mockupDataCategory);
  console.log(dataNew);
  return (
    <div className="container">
      <div className="category-section section-wrap align-items-center justify-content-center">
        <h2 className="title-block">SẢN PHẨM MỚI NHẤT</h2>
        <Link to="/">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
      </div>
      <div className="category-main d-flex flex-wrap justify-content-between">
        {dataNew.length !== 0 &&
          dataNew.map((item) => (
            <Product
              classComponent={"product col-lg-3 col-sm-4 col-6"}
              key={item.image}
              image={item.image}
              price={item.price}
              title={item.title}
              status={item.status.content}
            />
          ))}
      </div>
      <div className="category-section section-wrap align-items-center">
        <h2 className="title-block">SẢN PHẨM NỔI BẬT</h2>
        <Link to="/">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
        <div className="category-carousel section-wrap d-flex">
          <AliceCarousel
            dotsDisabled={true}
            duration={500}
            items={dataNew}
            responsive={{
              0: { items: 1 },
              1: { items: 2 },
              2: { items: 3 },
              3: { items: 3 },
              4: { items: 4 },
            }}
          >
            {dataNew.length !== 0 &&
              dataNew.map((item) => (
                <Product
                  classComponent={"product"}
                  image={item.image}
                  key={item.image}
                  price={item.price}
                  title={item.title}
                  status={item.status.content}
                />
              ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};
