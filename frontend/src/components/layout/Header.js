import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Button from "../asset_components/Button";
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const { loading, user } = useSelector((state) => state.authentication );

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <FontAwesomeIcon
              // icon={["fab", "bootstrap"]}
              icon={faN}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Printx</span>
          </Link>

          <div
            className={
              "navbar-collapse offcanvas-collapse " +
              (openedDrawer ? "open" : "")
            }
          >
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link"
                  replace
                  onClick={changeNav}
                >
                  Explore
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark me-3 d-none d-lg-inline"
            >
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                {/* <a
                  href="!#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={["fas", "user-alt"]} />
                </a> */}
                <div
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user ? (
                    <Fragment>
                      <figure className="avatar avatar-nav">
                        <img
                          src={user.avatar && user.avatar.url}
                          alt={user && user.name}
                          className="rounded-circle"
                        />
                      </figure>
                      <span>{user && user.name}</span>
                    </Fragment>
                  ) : (
                    <div>
                      <FontAwesomeIcon icon={["fas", "user-alt"]} />
                      &nbsp; Account
                    </div>
                  )}
                </div>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link
                      to="/login"
                      className="dropdown-item"
                      onClick={changeNav}
                    >
                      <Button text="Sign In" className="px-5" />
                    </Link>
                  </li>
                  <li>
                    {/* <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Sign Up
                    </Link> */}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button
              className="navbar-toggler p-0 border-0 ms-3"
              type="button"
              onClick={toggleDrawer}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
