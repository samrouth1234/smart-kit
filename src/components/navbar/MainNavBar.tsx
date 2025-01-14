import { Link } from "react-router-dom";
import ImageLogo from "../../assets/images/user-placeholder.jpg";
import Language from "./Language";

const MainNavBar = () => {
  return (
    <>
      <nav className="bg-gray-600 border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={ImageLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              UKNC
            </span>
          </a>
          <Language/>
        </div>
      </nav>
      <nav className="border">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900  hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900  hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900  hover:underline"
                >
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
