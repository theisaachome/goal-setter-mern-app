import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const onLogout = ()=>{
      dispatch(logout())
      dispatch(reset())
      navigate("/")
  }
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> Goal Setter</Link>
      </div>
      <ul>
        {user ? (
          <li>
           <button className="btn" onClick={onLogout}>
           <FaSignOutAlt />
              Logout
           </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
