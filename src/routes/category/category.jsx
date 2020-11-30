import React, { useEffect, useState } from "react";
import "./category.scss";
import { CategorySection } from "components/category-section/category-section";
import { Link } from "react-router-dom";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import mockupDataNewest from "data/mockupDataNewest";
import { connect } from "react-redux";

const Category = ({ match }) => {
  const [data, setData] = useState([]);
  const currentCategory = match.params.category;
  console.log(currentCategory);
  useEffect(() => {
    window.scrollTo(0, 0);
    currentCategory === "san-pham-moi-nhat"
      ? setData(mockupDataNewest)
      : currentCategory === "san-pham-khuyen-mai"
      ? setData(mockupDataDiscount)
      : currentCategory === "san-pham-ban-chay"
      ? setData(mockupDataBestSeller)
      : currentCategory === "san-pham-noi-bat"
      ? setData(mockupDataHot)
      : setData(mockupDataNewest);
  }, []);
  return (
    <div className="category">
      <CategorySection title="SẢN PHẨM MỚI NHẤT" link="/" dataProduct={data} />

      <div className="category-footer d-flex justify-content-center">
        <Link className="see-more-category" to="/">
          Xem thêm các sản phẩm khác
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mockupDataNewest: state.mockupDataCategory,
});

export default connect(mapStateToProps)(Category);
