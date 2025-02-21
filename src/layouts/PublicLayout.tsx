import { Outlet } from "react-router-dom";
import PublicNavBar from "../components/navbar/public-nav/PublicNavBar";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavBar />
      <div className="container mx-auto max-w-screen-xl relative flex flex-grow flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
