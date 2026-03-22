import { Outlet, NavLink } from "react-router";

// useContext import
import { useLoaderContext } from "../contexts/LoaderContext";
import { useNotificationContext } from "../contexts/NotificationContext";
import { useThemeContext } from "../contexts/ThemeContext";

// component imports
import Loader from "../components/ui/Loader";
import NotificationAlert from "../components/ui/NotificationAlert";

export default function DefaultLayout() {
  const { isLoading } = useLoaderContext();
  const { notificationShow } = useNotificationContext();
  const { isDark, toggleTheme } = useThemeContext();

  const bodyElement = document.querySelector("body");
  if (isDark) bodyElement.classList.add("bg-dark");
  if (!isDark) bodyElement.classList.remove("bg-dark");

  return (
    <>
      {/* header */}
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
          <div className="container">
            <h1 className="navbar-brand fs-2 mb-0">Movies</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav align-items-end ms-auto gap-1">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown d-flex align-items-center">
                  <button
                    className="btn btn-outline-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end position-absolute">
                    <li className="dropdown-item">
                      <div className="form-check form-switch d-flex gap-2 mb-0 ms-1">
                        <input
                          onChange={toggleTheme}
                          checked={isDark}
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="dark-mode-switch"
                        />
                        <label className="flex-grow-1" htmlFor="dark-mode-switch">
                          <i className="bi bi-moon-stars-fill"></i>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* main (loader, notifications)*/}
      <main className="container py-4">
        {isLoading && <Loader />}

        {notificationShow && <NotificationAlert />}

        <Outlet />
      </main>
    </>
  );
}
