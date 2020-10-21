import React from "react";
import "./signin.scss";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="singin">
      
        <h4 className="title">Đăng ký thành viên</h4>
        <div className="form-signin d-flex flex-column">
          <span>Email của bạn</span>
          <input type="email" placeholder="Email" />
          <span>Điện thoại</span>
          <input type="phone" placeholder="Số điện thoại" />
          <span>Mật khẩu của bạn</span>
          <input type="password" placeholder="Mật khẩu" />
          <span>Họ và tên</span>
          <input type="text" placeholder="Vui lòng nhập tiếng việt có dấu" />
          <p className="text">
            Bằng cách bấm nút "Đăng ký" bên dưới, bạn đã xác nhận đồng ý với
            điều khoản<Link to="/">Điều khoản sử dụng thông tin</Link>của
            vacara.com
          </p>
          <button>Đăng ký</button>
          <div className="login d-flex align-content-center">
            <Link to="/login">Đăng nhập</Link>
            <span>/</span>
            <Link to="/">Quên mật khẩu</Link>
          </div>
        </div>
      </div> 
   
  );
};
export default Signin;
