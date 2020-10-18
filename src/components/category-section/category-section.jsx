import React from "react";
import "./category-section.scss";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleRightIcon } from "components/icons/icons";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

export const CategorySection = ({ title, link, dataProduct, isSlider }) => {
  // const [slider, updateSlider] = useState(isSlider);
  return (
    <div className="category-section section-wrap align-items-center justify-content-center">
      <h2 className="title-block">{title}</h2>
      {/* <button className="see-all" onClick={() => updateSlider(!slider)}>
        Xem tất cả <AngleRightIcon />
      </button> */}

      <Link to={link} className="see-all">
        Xem tất cả <AngleRightIcon />
      </Link>

      {isSlider ? (
        <div className="category-carousel">
          <AliceCarousel
            dotsDisabled={true}
            responsive={{
              0: { items: 1 },
              400: { items: 2 },
              575: { items: 3 },
              991: { items: 4 },
            }}
          >
            {dataProduct.length !== 0 &&
              dataProduct.map((item) => (
                <Product
                  classComponent="product"
                  key={item.image}
                  image={item.image}
                  price={item.price}
                  sale={item.sale}
                  title={item.title}
                  status={item.status}
                />
              ))}
          </AliceCarousel>
        </div>
      ) : (
        <div className="category-main d-flex flex-wrap">
          {dataProduct.length !== 0 &&
            dataProduct.map((item) => (
              <Product
                classComponent="product col-lg-3 col-sm-4 col-6"
                key={item.image}
                image={item.image}
                price={item.price}
                sale={item.sale}
                title={item.title}
                status={item.status}
              />
            ))}
        </div>
      )}
    </div>
  );
};
