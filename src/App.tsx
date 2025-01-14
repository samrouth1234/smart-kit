import "./App.css";
import Product from "./components/product/Product";
import MainNavBar from "./components/navbar/MainNavBar";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <MainNavBar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mt-5">{t("welcome")}</h1>
      </div>
      <Product />
    </>
  );
}

export default App;
