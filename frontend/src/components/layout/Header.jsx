import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Button from "../asset_components/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authActions";

function Header() {
  const dispatch = useDispatch();

  const [openedDrawer, setOpenedDrawer] = useState(false);

  const { user } = useSelector((state) => state.authentication);
  const { cartItems } = useSelector((state) => state.cart);

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

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

            {/* Shopping Cart */}
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-outline-dark d-none d-lg-inline"
              >
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span className="ms-3 badge rounded-pill bg-dark">
                {cartItems.length}
                </span>
              </button>
            </Link>

            {/* User Dropdown */}
            <div className="dropdown navbar-nav me-3">
              <button
                className="btn btn-secondary dropdown-toggle nav-link"
                type="button"
                data-toggle="dropdown"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user ? (
                  <div className="px-4">
                    <figure className="avatar avatar-nav">
                      <img
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="rounded-circle"
                      />
                    </figure>
                    <span>{user && user.name}</span>
                  </div>
                ) : (
                  <div className="px-4">
                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                    &nbsp; Account
                  </div>
                )}
              </button>

              {/* <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                > */}

              {user ? (
                <ul
                  className="dropdown-menu nav-item mb-2 mb-lg-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="dropdown-item">
                    {user && user.role === "admin" && (
                      <Link to="/dashboard" onClick={changeNav}>
                        Dashboard
                      </Link>
                    )}
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" onClick={changeNav}>
                      Profile
                    </Link>
                    <li>
                      <Link
                        to="/"
                        className="dropdown-item"
                        onClick={logoutHandler}
                      >
                        <Button
                          text="Logout"
                          className="px-5"
                          style={{ backgroundColor: "red" }}
                        />
                      </Link>
                    </li>
                  </li>
                </ul>
              ) : (
                <ul
                  className="dropdown-menu nav-item mb-2 mb-lg-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="dropdown-item">
                    <Link to="/login" onClick={changeNav}>
                      <Button text="Login" className="px-5" />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
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
