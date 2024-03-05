import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="static w-full flex justify-between bg-green-200 font-medium shadow-md">
      <div className="logo-container">
        <img
          className="logo w-24 h-30"
          src={logo}
          alt="logo"
        />
      </div>
      <div className=" flex items-center">
        <ul className="flex">
          <li className="px-4"><Link to="/">🏠 Home</Link></li>
          <li className="px-4"><Link to="/about">😊About</Link></li>
          <li className="px-4"><Link to="/contact">📞Contact</Link></li>
          <li className="px-4"><Link to="/cart">🛒Cart ({cartItems.length})</Link></li>

          <button className="px-4" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>👤{btnName}</button>
          {/* <li className="px-4">{data.loggedInUser}</li> */}
          <li className="px-4">{onlineStatus ? "🟢" :"🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;