import './Navbar.css';
import apssLogo from "../assets/apps-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-5 py-4">
      <div className="container-fluid">
        <div
          className="appsLogo"
          style={{ backgroundImage: `url(${apssLogo})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        ></div>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 gap-md-2">
            <li className="nav-item">
              <a className="nav-link text-light" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
