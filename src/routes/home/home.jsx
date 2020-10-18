import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.scss";
import Gif from "assets/images/banner-gif.gif";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import { HomepageCarousel } from "components/homepage-carousel/homepage-carousel";
import { Link } from "react-router-dom";
import iconAngleRight from "assets/icons/icon-angle-right.png";
import { CategorySection } from "../../components/category-section/category-section";
const Homepage = () => {
  const dataNew = useSelector((state) => state.mockupDataCategory);
  return (
    <div className="homepage">
      <HomepageCarousel />
      <div className="container">
        <div className="hot-trend section-wrap">
          <h2 className="title-block">Hot Trend 2020</h2>
          <img src={Gif} />
        </div>
        <CategorySection
          title="SẢN PHẨM MỚI NHẤT"
          link="/category/san-pham-moi-nhat"
          dataProduct={dataNew}
        />
        <CategorySection
          title="SẢN PHẨM KHUYẾN MÃI"
          link="/category/san-pham-khuyen-mai"
          dataProduct={mockupDataDiscount}
          isSlider={true}
        />
        <CategorySection
          title="SẢN PHẨM BÁN CHẠY"
          link="/category/san-pham-ban-chay"
          dataProduct={mockupDataBestSeller}
          isSlider={true}
        />
        <CategorySection
          title="SẢN PHẨM NỔI BẬT"
          link="/category/san-pham-noi-bat"
          dataProduct={mockupDataHot}
          isSlider={true}
        />
      </div>
    </div>
  );
};

export default Homepage;
