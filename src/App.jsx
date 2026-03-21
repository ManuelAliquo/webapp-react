import { BrowserRouter, Routes, Route } from "react-router";

// pages imports
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/:id" Component={MovieDetailPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
