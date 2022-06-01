import { NavigationDesktop } from "./navigationDesktop/NavigationDesktop";
import { NavigationMobile } from "./navigationMobile/NavigationMobile";
export const Navigation = () => {
  const mobileScreen = false;

  return mobileScreen ? <NavigationMobile /> : <NavigationDesktop />;
};
