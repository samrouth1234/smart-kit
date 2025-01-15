import { useTranslation } from "react-i18next";

import Product from "../../components/product/Product";

const PostPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-center font-semibold text-2xl mt-3">{t('welcome')}</h1>
      <Product />
    </>
  );
};

export default PostPage;
