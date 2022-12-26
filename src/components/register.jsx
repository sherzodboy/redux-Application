import { useState } from "react";
import { icon } from "../constants";
import Input from "./../ui/input";
import { useSelector, useDispatch } from "react-redux";
import { signUserStart, signUserFailure, signUserSuccess } from "../slice/auth";
import AuthService from "./../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-3" src={icon} alt="icon" height="70" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <Input label={"Username"} state={name} setState={setName} />
          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            disabled={isLoading}
            onClick={registerHandler}
            type="submit"
          >
            {isLoading ? "loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
