import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import RoutingPath from "../../../routes/RoutingPath";
import LocalStorage from "../../../shared/storage/LocalStorage";
export const ProfileDropDown = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setAuthenticatedUser(false);
    localStorage.removeItem(LocalStorage.username);
    navigate(RoutingPath.homeView);
  };

  return (
    <div className="profiledropdown">
      <p>Name: {authenticatedUser}</p>
      <p>Email</p>
      <hr />
      <p onClick={() => navigate(RoutingPath.profileview)}>Profile</p>
      <p onClick={() => navigate(RoutingPath.settingsview)}>Settings</p>
      <p onClick={() => navigate(RoutingPath.movieView)}>Movie</p>
      <p onClick={() => logout()}>Log Out</p>
    </div>
  );
};
