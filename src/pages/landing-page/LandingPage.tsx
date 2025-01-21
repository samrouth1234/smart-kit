import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Joyride, { Step } from "react-joyride";

const LandingPage = () => {
  const { t } = useTranslation();
  const [runTutorial, setRunTutorial] = useState(false);

  const steps: Step[] = [
    {
      target: ".my-first-step",
      content: "Welcome to our app! Let me show you this first feature.",
      disableBeacon: true,
    },
    {
      target: ".my-other-step",
      content: "This is another awesome feature!",
    },
  ];

  // Check on mount if the tutorial should run
  useEffect(() => {
    const tutorialCompleted = localStorage.getItem("tutorialCompleted");
    if (!tutorialCompleted) {
      setRunTutorial(true); // Show the tutorial if it's the user's first time
    } else {
      console.log("Tutorial already completed");
    }

    // Set a timeout to clear localStorage after 100 seconds for testing
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("tutorialCompleted");
      console.log("localStorage cleared after 100 seconds for testing.");
    }, 100 * 100); // 100 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // When the tutorial is finished
  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    const finishedStatuses = ["finished", "skipped"];
    if (finishedStatuses.includes(status)) {
      setRunTutorial(false); // Stop the tutorial
      localStorage.setItem("tutorialCompleted", "true"); // Mark tutorial as completed
    }
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-3">
        {t("welcome")}
      </h1>

      {runTutorial && (
        <Joyride
          steps={steps}
          continuous={true} // Only show one step (no "Next" button)
          disableOverlayClose={true} // Disable closing by clicking outside
          disableCloseOnEsc={true} // Disable closing with the Escape key
          showSkipButton={true} // Hide the skip button
          showProgress={true} // Show the progress bar
          callback={handleJoyrideCallback}
          locale={{
            back: "Previous", // Custom text for the Back button
            close: "Exit", // Custom text for the Close button
            last: "Finish", // Custom text for the Last button
            next: "Continue", // Custom text for the Next button
            skip: "Skip", // Custom text for the Skip button
          }}
          styles={{
            options: {
              primaryColor: "#1c4076",
            },
            buttonNext: {
              backgroundColor: "#1c4076",
              color: "#ffffff",
              fontSize: "14px",
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
            },
            buttonBack: {
              color: "#1c4076",
              fontSize: "14px",
              marginRight: "10px",
            },
            buttonSkip: {
              color: "#ff4d4f",
              fontSize: "14px",
            },
          }}
        />
      )}

      <button className="my-first-step">Welcome to My App!</button>
      <br />
      <button className="my-other-step">Click Me!</button>
    </div>
  );
};

export default LandingPage;
