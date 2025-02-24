import { Outlet } from "react-router-dom";

import MainNavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <MainNavBar />
        <div className="container mx-auto max-w-screen-xl relative flex flex-grow flex-col">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
