import i18n from "../../services/i18n.service";
import { useState } from "react";

import Cambodai_Flag from "../../assets/logo/cambodai-flags.png";
import English_Flag from "../../assets/logo/english-flags.png";

const ChangeLanguage = () => {
  const [language, setLanguage] = useState<string>("kh");
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setOpenDropdown(false);
  };

  return (
    <div className="relative flex justify-center items-center">
      <button type="button" onClick={() => setOpenDropdown(!openDropdown)}>
        <img
          src={language === "en" ? English_Flag : Cambodai_Flag}
          alt="Language Flag"
          className="w-10"
        />
      </button>
      {openDropdown && (
        <div className="absolute top-11 z-50 bg-white rounded-md shadow-md">
          <div className="flex flex-col items-center p-1 w-14">
            <button onClick={() => handleChangeLanguage("kh")}>
              <img src={Cambodai_Flag} alt="Cambodai Flag" className="w-9" />
            </button>
            <button onClick={() => handleChangeLanguage("en")}>
              <img src={English_Flag} alt="English Flag" className="w-9" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
