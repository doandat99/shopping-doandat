import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";
import { useHistory } from "react-router-dom";
import "./login.scss";
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
    <div className="block-user">
      <input placeholder="Nhập" onChange={handleInput} value={addLogin} />
      <button onClick={AddLogin}>Add</button>
    </div>
  );
};
export default Login1;
