import UTILS from "../../utils";
import Login from "./Login";
import OnBoarding from "./OnBoarding";
import Otp from "./Otp";
import Signup from "./Signup";

interface screenType{
  name: string;
  component: any;
}

const { AUTH_SCREENS} = UTILS.SCREEN_NAMES;

const AuthScreens: screenType[] = [
  {
    name: AUTH_SCREENS.ON_BOARDING,
    component: OnBoarding,
  },
  {
    name: AUTH_SCREENS.LOGIN,
    component: Login,
  },
  {
    name: AUTH_SCREENS.SIGNUP,
    component: Signup,
  },
  {
    name: AUTH_SCREENS.OTP,
    component: Otp,
  },
];

export default AuthScreens;
