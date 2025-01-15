import i18n from "../../utils/i18n";
import { useState } from "react";

import Cambodai_Flag from "../../assets/logo/cambodai-flags.png";
import English_Flag from "../../assets/logo/english-flags.png";

const Language = () => {
  const [language, setLanguage] = useState<string>("km");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center justify-center"
      >
        <img
          src={language === "en" ? English_Flag : Cambodai_Flag}
          alt="Language Flag"
          className="w-10"
        />
      </button>
      <div
        className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow"
        id="language-dropdown-menu"
      >
        <div className="flex flex-col items-center p-2 w-16">
          <button onClick={() => handleChangeLanguage("kh")}>
            <img src={Cambodai_Flag} alt="Cambodai Flag" className="w-10" />
          </button>
          <button onClick={() => handleChangeLanguage("en")}>
            <img src={English_Flag} alt="English Flag" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
