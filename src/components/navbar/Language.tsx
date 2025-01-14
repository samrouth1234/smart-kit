import i18n from "../../utils/i18n"

import Cambodai_Flag from "../../assets/logo/cambodai-flags.png";
import English_Flag from "../../assets/logo/english-flags.png";
import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState<string>('km');

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };


  return (
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        onClick={() => handleChangeLanguage("km")}
        className="inline-flex items-center font-medium justify-center p-2 text-sm text-gray-900"
      >
        <img src={Cambodai_Flag} alt="Khmer Flag" className="w-10" />
      </button>
      <button
        type="button"
        onClick={() => handleChangeLanguage("en")}
        className="inline-flex items-center font-medium justify-center p-2 text-sm text-gray-900"
      >
        <img src={English_Flag} alt="English Flag" className="w-10" />
      </button>
    </div>
  );
};

export default Language;
