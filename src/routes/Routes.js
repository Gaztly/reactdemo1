import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "../views/HomeView/HomeView";
import { SignInView } from "../views/SignInView/SignInView";
import { StoreView } from "../views/StoreView/StoreView";
import { SettingsView } from "../views/authenticatedviews/settingsview/SettingsView";
import { ProfileView } from "../views/authenticatedviews/profileview/ProfileView";
import RoutingPath from "./RoutingPath";
import LocalStorage from "../shared/storage/LocalStorage";
import { UserContext } from "../shared/provider/UserProvider";
import { MovieView } from "../views/MovieView/MovieView";
export const Routing = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); // hämtar globala variabler och tilldelar värde

  const isUserAuthenticated = () => {
    const loggedInUser = localStorage.getItem(LocalStorage.username); // Hämtar username från storage
    setAuthenticatedUser(loggedInUser); // sätter username värdet till autenticatedUser variabel
  };

  useEffect(() => {
    isUserAuthenticated();
    blockIfAuthenticated(); //Kör ovan metod så fort sidan renderas
  }, []);

  const blockIfAuthenticated = (view) => {
    return authenticatedUser ? <HomeView /> : view; //Ternery som kollar om man är inloggad eller ej
  };

  const authenticationRequired = (view) => {
    return authenticatedUser ? view : <SignInView />; // Samma som ovan, men är man inte inloggad så kommer man till Signin
  };

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          exact
          path={RoutingPath.signInView}
          element={blockIfAuthenticated(<SignInView />)}
        />
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route path={RoutingPath.storeView} element={<StoreView />} />
        <Route path={RoutingPath.movieView} element={<MovieView />} />
        <Route
          path={RoutingPath.profileview}
          element={authenticationRequired(<ProfileView />)}
        />
        <Route
          path={RoutingPath.settingsview}
          element={authenticationRequired(<SettingsView />)}
        />
      </Routes>
    </BrowserRouter>
  );
};
