import { Link } from "react-router-dom";
import ImageLogo from "../../assets/images/user-placeholder.jpg";
import ChnageLanguage from "./ChnageLanguage";
import UserProfile from "./UserProfile";

const MainNavBar = () => {
  return (
    <>
      <nav className="bg-gray-600 border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-3 px-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={ImageLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              UKNC
            </span>
          </a>
          <div className="flex items-center space-x-5">
            <ChnageLanguage />
            <UserProfile/>
          </div>
        </div>
      </nav>
      <nav className="border">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/posts" className="text-gray-900 hover:underline">
                  Post
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavBar;
