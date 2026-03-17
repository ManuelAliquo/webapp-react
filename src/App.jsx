import { BrowserRouter, Routes, Route } from "react-router";

// pages imports
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/:id" Component={DetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
