import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
