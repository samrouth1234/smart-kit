import { Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { FORM_PAGE, POST_PAGE, ROOT_ROUTE } from "./constants/Routes";
import LandingPage from "./pages/landing-page/LandingPage";
import PostPage from "./pages/post-page/PostPage";
import FormPage from "./pages/form/FormPage";
import PublicLayout from "./layouts/PublicLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROOT_ROUTE} element={<LandingPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path={POST_PAGE} element={<PostPage />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path={FORM_PAGE} element={<FormPage />} />
      </Route>
    </Routes>
  );
};
