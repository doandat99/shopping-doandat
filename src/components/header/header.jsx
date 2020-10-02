import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon,
} from "components/icons/icons";

export const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="container">
            <div className="row header-wap d-flex align-items-center">
              <div className="logo col-2">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
              <div className="header-location col-2 d-flex align-items-center justify-content-center">
                <div className="location">
                  <p>Chọn khu vực giao hàng</p>
                  <Link to="/">
                    <select className="w-100">
                      <option>Hà Nội</option>
                    </select>
                  </Link>
                </div>
              </div>
              <div className="header-search col-5 d-flex align-items-center">
                <div className="search-item d-flex align-items-center ">
                  <SearchIcon />
                  <input type="text" placeholder="Tìm Kiếm" />
                </div>
              </div>
              <div className="header-authen d-flex col-2">
                <div className="d-flex align-items-center justify-content-center">
                  <Link to="/">
                    <p>Đăng ký</p>
                  </Link>
                  <span>/</span>
                  <Link to="/">
                    <p>Đăng nhập</p>
                  </Link>
                </div>
              </div>
              <div className="header-cart d-flex align-items-center justify-content-center col-1">
                <CartIcon />
                <span>(0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row menu ">
          <div className="container">
            <div className="header-wrap list-menu">
              <ul className="section-wrap d-flex align-items-center justify-content-between">
                <li>
                  <a href="#">Giày</a>
                </li>
                <li>
                  <a href="#">Túi xách</a>
                </li>
                <li>
                  <a href="#">Balo</a>
                </li>
                <li>
                  <a href="#">Ví bóp</a>
                </li>
                <li>
                  <a href="#">Dép & guốc</a>
                </li>
                <li>
                  <a href="#">Phụ kiện</a>
                </li>
                <li>
                  <a href="#">Giftcard</a>
                </li>
                <li>
                  <a href="#">Sale off</a>
                </li>
                <li>
                  <a href="#">New arrival</a>
                </li>
                <li>
                  <a href="#">Summer kisses</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
