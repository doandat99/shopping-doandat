import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { logout } from "../../redux/action/login";
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
  const user = useSelector((state) => state.User);
  const [visibleMenu, setvisibleMenu] = useState(false);

  const toggleMenu = () => {
    setvisibleMenu(!visibleMenu);
  };

  useEffect(() => {
    const menuDown = document.querySelector(".menu");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        menuDown.classList.add("active");
      } else {
        menuDown.classList.remove("active");
      }
    });
  }, []);
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="container">
            <div className="row header-wap d-flex align-items-center">
              <div className="logo col-md-2 col-4 d-flex align-items-center">
                <div className="header-nav">
                  <BarsIcon onClick={toggleMenu} />
                </div>
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
              <div className="header-location col-md-2 d-flex align-items-center justify-content-center">
                <div className="location">
                  <p>Chọn khu vực giao hàng</p>
                  <Link to="/">
                    <select className="w-100">
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
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
                  {user.username ? (
                    <div>
                      {user.username}
                      <button onClick={remove}>Logout</button>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <Link to="/signin">
                        <p>Đăng ký</p>
                      </Link>
                      <span>/</span>
                      <Link to="/login">
                        <p>Đăng nhập</p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="header-cart d-flex align-items-center justify-content-center col-md-1 col-4">
                <SearchIcon className="search-mobile" />
                <div className="cart d-flex align-items-center">
                  <CartIcon />
                  <span>(0)</span>
                </div>
              </div>
            </div>

            <div
              className={classNames("nav-menu-mobile", { active: visibleMenu })}
            >
              <div className="nav-menu-main">
                <div className="nav-close" onClick={toggleMenu}>
                  <CloseIcon />
                </div>
                {user.username ? (
                  <div>
                    {user.username}
                    <button onClick={remove}>Logout</button>
                  </div>
                ) : (
                  <div className="nav-user">
                    <img src={User} alt="" />
                  </div>
                )}

                <ul>
                  <li>
                    <Link to="/">Giày</Link>
                    <PlusIcon />
                  </li>
                  <li>
                    <Link to="/">Túi Xách</Link>
                    <PlusIcon />
                  </li>
                  <li>
                    <Link to="/">Balo</Link>
                  </li>
                  <li>
                    <Link to="/">Ví Bóp</Link>
                    <PlusIcon />
                  </li>
                  <li>
                    <Link to="/">Dép & Guốc</Link>
                  </li>
                  <li>
                    <Link to="/">Phụ Kiện</Link>
                    <PlusIcon />
                  </li>
                  <li>
                    <Link to="/">Giftcard</Link>
                  </li>
                  <li>
                    <Link to="/">Sale Off</Link>
                  </li>
                  <li>
                    <Link to="/">New arrival</Link>
                  </li>
                  <li>
                    <Link to="/">Summer Kisses</Link>
                  </li>
                  <li>
                    <Link to="/">Tin Tức</Link>
                    <PlusIcon />
                  </li>
                </ul>
                <div className="line"></div>
                <ul>
                  <li>
                    <Link to="/signin">Đăng ký</Link>
                  </li>
                  <li>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                </ul>
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
