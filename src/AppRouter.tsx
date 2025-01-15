import { Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { POST_PAGE, ROOT_ROUTE } from "./constants/Routes";
import LandingPage from "./pages/landing-page/LandingPage";
import PostPage from "./pages/post-page/PostPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROOT_ROUTE} element={<LandingPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path={POST_PAGE} element={<PostPage />} />
      </Route>
    </Routes>
  );
};
