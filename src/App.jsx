// router imports
import { BrowserRouter, Routes, Route } from "react-router";

// pages imports
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

// providers import
import { LoaderContextProvider } from "./contexts/LoaderContext";

export default function App() {
  return (
    <LoaderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/:id" Component={MovieDetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderContextProvider>
  );
}
