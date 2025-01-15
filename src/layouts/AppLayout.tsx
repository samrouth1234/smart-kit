import { Outlet } from "react-router-dom";

import MainNavBar from "../components/navbar/MainNavBar";
import MainFooter from "../components/footer/Footer";

const AppLayout = () => {
  return (
    <>
      <MainNavBar />
      <div className="container mx-auto max-w-screen-xl relative flex flex-grow flex-col sm:bg-white">
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
};

export default AppLayout;
