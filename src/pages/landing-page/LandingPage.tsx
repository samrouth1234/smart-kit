import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-3">{t('welcome')}</h1>
    </div>
  );
};

export default LandingPage;
