import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";
import { useHistory } from "react-router-dom";
import "./login.scss";
import { FacebookIcon } from "components/icons/icons";
const Login1 = () => {
  const dispath = useDispatch();
  // const newLogin = useSelector((state) => state.Login.user);
  // console.log(newLogin);
  const history = useHistory();
  const [addLogin, setAddLogin] = useState("");
  const handleInput = (event) => {
    setAddLogin(event.target.value);
  };
  const AddLogin = () => {
    if (addLogin.trim().length > 0) {
      dispath(login(addLogin));
      setAddLogin("");
      history.push("/");
    } else {
      alert("Đăng nhập không thành công");
    }
  };
  return (
    <div className="block-user d-flex">
      <div className="text col-md-6">
        <ul>
          <li>
            Nếu bạn đã đăng ký tài khoản tại vascara.com trước đây, hãy nhập
            email đã đăng ký
          </li>
          <li>
            Nếu bạn đã từng giao dịch với VASCARA (mua online hoặc ở cửa hàng)
            nhưng chưa đăng ký thành viên của website, hãy nhập Số điện thoại
            bạn đã sử dụng để mua hàng, Vascara sẽ gửi thông tin đăng nhập qua
            tin nhắn cho bạn
          </li>
          <li>
            Nếu bạn chưa từng có giao dịch với Vascara, và chưa đăng ký tài
            khoản tại website, hãy nhập email hoặc SĐT để bắt đầu đăng ký
          </li>
        </ul>
      </div>
      <div className="user col-12 col-md-6 ">
        <h2 className="title">Email hoặc số điện thoại</h2>
        <input
          type="text"
          placeholder="Nhập Email hoặc số điện thoại"
          onChange={handleInput}
          value={addLogin}
        />
        <button onClick={AddLogin}>Add</button>
        <br />
        <span className="or">Hoặc đăng nhập bằng ....</span>
        <br />
        <button className="btn-facebook d-flex align-items-center justify-content-center">
          <FacebookIcon />
          Facebook
        </button>
      </div>
    </div>
  );
};
export default Login1;
