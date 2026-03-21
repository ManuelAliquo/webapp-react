import { Outlet, NavLink } from "react-router";

import Loader from "../components/Loader";

export default function DefaultLayout() {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
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

      <main className="container py-4">
        {/* <Loader /> */}

        <Outlet />
      </main>
    </>
  );
}
