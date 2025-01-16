import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

import UserProfiles from "../../assets/images/user-placeholder.jpg";

const UserProfile = () => {
  const [openDropdownProfileUser, setOpenDropdownProfileUser] = useState<boolean>(false);

  // handleDropdownProfileUser
  const handleDropdownProfileUser = () => {
    setOpenDropdownProfileUser(!openDropdownProfileUser);
  };

  return (
    <section className="relative flex items-center">
      <button type="button" onClick={handleDropdownProfileUser}>
        <img
          src={UserProfiles}
          className="object-cover rounded-full w-10 h-10"
          alt="profile"
        />
      </button>
      {openDropdownProfileUser && (
        <div className="absolute top-12 z-50 flex flex-col items-center space-y-1 bg-white rounded-md shadow-md p-3">
          {/* Prevent text wrapping */}
          <h3 className="whitespace-nowrap capitalize">  
            bich samrouth
          </h3>
          <button className="w-full hover:bg-gray-100 rounded-md p-2 flex items-center gap-2">
            <FaUserMinus size={18} />
            Logout{" "}
          </button>
          <button className="w-full hover:bg-gray-100 rounded-md p-2 flex items-center gap-2">
            <FaUserPlus size={18} />
            Register{" "}
          </button>
          <button className="w-full hover:bg-gray-100 rounded-md p-2 flex items-center gap-2">
            <IoMdSettings size={18} />
            Settings
          </button>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
