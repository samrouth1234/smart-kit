import { Link } from "react-router-dom";

const PublicNavBar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <ul className="flex justify-between p-5">
        <li>
          <img src="" alt="logo" />
        </li>
        <li>
          <Link to={'/'} className="text-md hover:underline hover:text-orange-200">Back</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PublicNavBar;
