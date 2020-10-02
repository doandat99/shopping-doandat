import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import {
  HotlineIcon,
  MapMarkerIcon,
  BctIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YoutubeIcon,
  ZaloIcon,
  CashIcon,
  AtmIcon,
  VisaIcon,
  MomoIcon,
  ZalopayIcon,
} from "components/icons/icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap section-wrap d-flex flex-wrap">
        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Công ty</h4>
          <ul>
            <li>
              <a href="/">Giới thiệu</a>
            </li>
            <li>
              <a href="/">Tuyển dụng</a>
            </li>
          </ul>
        </div>
        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Chính sách</h4>
          <ul>
            <li>
              <a href="/">Chính sách bao mật</a>
            </li>
            <li>
              <a href="/">Ưu đãi khách hàng thân thiết</a>
            </li>
            <li>
              <a href="/">Chính sách bảo hành chọn đời</a>
            </li>
            <li>
              <a href="/">Chính sách giao nhận</a>
            </li>
            <li>
              <a href="/">Chính sách đổi sản phẩm</a>
            </li>
          </ul>
        </div>
        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Hỗ trợ khách hàng</h4>
          <ul>
            <li>
              <a href="/">Hướng dẫn mua hàng</a>
            </li>
            <li>
              <a href="/">Tra cứu bảo hành</a>
            </li>
            <li>
              <a href="/">Quy định về phiếu quà tặng</a>
            </li>
            <li>
              <a href="/">Điều khoản sử dụng</a>
            </li>
          </ul>
        </div>
        <div className="footer-item col-lg-3 col-sm-6 col-12">
          <h4 className="title-group">Kết nối vasacara</h4>
          <ul className="d-flex  align-items-center">
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <ZaloIcon />
              </a>
            </li>
          </ul>
          <h4 className="title-group">Phương thức thanh toán</h4>
          <ul className="d-flex  align-items-center">
            <li>
              <a href="/">
                <AtmIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <CashIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <VisaIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <MomoIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <ZalopayIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-item col-12 d-flex align-items-center flex-wrap">
          <div className="col-lg-6 col-12">
            <BctIcon />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center flex-wrap">
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <MapMarkerIcon />
              <Link to="/">Xem vị trí cửa hàng</Link>
            </div>
            <div className="col-sm-6 col-12 d-flex align-items-center">
              <HotlineIcon className="hot-line" />
              <Link to="/">1800 6969</Link>
              <span>(Miễn phí, 9h-22h)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>
          Công ty TNHH MTV Global Fashion. Văn phòng: Lầu 4 tòa nhà ACM số 96
          Cao Thắng phường 04 quận 03 TP Hồ Chí Minh.
        </p>
        <p>
          GP số 0314657558 do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày 05/10/2017
        </p>
      </div>
    </div>
  );
};
