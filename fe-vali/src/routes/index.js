import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import UserInfor from "../component/UserInfor/UserInfor";
export const routes = [
  {
    path: "/",
    page: SignUp,
    //isShowHeader: true,
  },
  {
    path: "/SignIn",
    page: SignIn,
    //isShowHeader: true,
  },
  {
    path: "/UserInfor",
    page: UserInfor,
    //isShowHeader: true,
  }
];


