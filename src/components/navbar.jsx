import { Link } from "react-router-dom";
import { logo } from "./../constants";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center  border-bottom container">
      <Link to={"/"}>
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link class="me-3 py-2 text-dark text-decoration-none" to={"/login"}>
          Login
        </Link>
        <Link class="me-3 py-2 text-dark text-decoration-none" to={"/register"}>
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
