import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../shared/provider/UserProvider";
import LocalStorage from "../../shared/storage/LocalStorage";

export const SignInView = () => {
  const [username, setUsername] = useState("Patrick");
  const [password, setPassword] = useState("blixten");
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const navigate = useNavigate();

  const Login = () => {
    setAuthenticatedUser(username);
    localStorage.setItem(LocalStorage.username, username); //key sen value
    localStorage.setItem(LocalStorage.password, password); //key sen value
    navigate(-1); //tillbaka en sida i webbläsaren
  };

  return (
    <div>
      <h1>SignInView!</h1>
      <input
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button onClick={() => Login()}>Sign in</button>
    </div>
  );
};
