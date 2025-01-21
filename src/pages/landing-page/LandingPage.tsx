import { useTranslation } from "react-i18next";
import Joyride, { Step } from 'react-joyride';

const LandingPage = () => {
  const { t } = useTranslation();

  const steps: Step[] = [
    {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
    },
    {
        target: '.my-other-step',
        content: 'This is another awesome feature!',
    },
  ];

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-3">{t('welcome')}</h1>
      <button className="my-first-step">Welcome to My App!</button>
      <br />
      <button className="my-other-step">Click Me!</button>

      <Joyride
        steps={steps}
        styles={{
          options: {
            arrowColor: '#1c4076',
            // backgroundColor: '#e3ffeb',
            // overlayColor: 'rgba(79, 26, 0, 0.4)',Notification
            primaryColor: '#1c4076',
            // textColor: '#004a14',
          },
        }}
        showProgress
        disableCloseOnEsc={true}
        continuous={true}
      />
    </div>
  );
};

export default LandingPage;
