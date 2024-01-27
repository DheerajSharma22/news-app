import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../Context/AppContext";

const Header = () => {
  const { categories } = useContext(Context);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase .fs-1 fw-bold" to="/">
            DNews
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search/:search=${searchParam}`);
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link fw-medium"
                  aria-current="page"
                  to="#"
                >
                  Home
                </NavLink>
              </li> */}
              {categories.map((category, index) => {
                return (
                  <li className=" nav-item text-capitalize" key={index}>
                    <NavLink
                      className="nav-link fw-medium"
                      to={`/categories/:category=${category}`}
                    >
                      {category}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
