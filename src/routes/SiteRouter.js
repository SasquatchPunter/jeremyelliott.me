import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "../pages/Root";

function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
