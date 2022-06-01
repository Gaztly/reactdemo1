import { Link, useNavigate } from "react-router-dom";
import "./NavigationDesktop.css";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { useContext } from "react";
import { Profile } from "../../profile/Profile";

export const NavigationDesktop = () => {
  const navigate = useNavigate();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const renderLogin = () => {
    if (authenticatedUser) {
      return (
        <div className="nav-desktop-login">
          <Profile />
        </div>
      );
    } else {
      return (
        <div className="nav-desktop-login">
          <button onClick={() => navigate(RoutingPath.signInView)}>
            Sign in
          </button>
        </div>
      );
    }
  };

  return (
    <nav className="nav-desktop">
      <span className="nav-desktop-logo">Logo</span>
      <span>{authenticatedUser}</span>
      <ul className="nav-desktop-list">
        <li>
          <Link to={RoutingPath.homeView}>Home</Link>
        </li>
        <li>
          <Link to={RoutingPath.signInView}>Sign in</Link>
        </li>
        <li>
          <button onClick={() => navigate(RoutingPath.homeView)}>Home</button>
        </li>

        <li>
          <button onClick={() => navigate(RoutingPath.storeView)}>Store</button>
        </li>
      </ul>
      {renderLogin()}
    </nav>
  );
};
