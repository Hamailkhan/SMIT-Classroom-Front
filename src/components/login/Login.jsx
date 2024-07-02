import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form className="forms">
          <div className="input-box">
            <input
              type="text"
              className="emailLogin"
              autoComplete="off"
              id="loginEmail"
            />
            <i className="bx bxs-envelope"></i>
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              id="loginPassword"
              type="password"
              className="passwordLogin"
              autoComplete="off"
            />
            <i className="bx bxs-lock-alt"></i>
            <label>Password</label>
          </div>
          <button type="submit" className="btn" id="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
