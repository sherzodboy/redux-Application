import { Link } from "react-router-dom";
import { logo } from "./../constants";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div className="d-flex flex-column flex-md-row align-items-center  border-bottom container">
      <Link to={"/"}>
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 py-2 m-0 text-dark text-decoration-none">
              {user.username}
            </p>
            <button className="btn btn-outline-danger">Logout</button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
