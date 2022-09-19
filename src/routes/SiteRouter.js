import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "../pages/Root";
import UnderConstruction from "../pages/UnderConstruction";

function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="blog" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
