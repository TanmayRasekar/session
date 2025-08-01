import { NavLink } from "react-router";
const LoginForm = () => {

    
  return (
    <div
      style={{
        height: "100vh",width: "100vw",backgroundColor: "#535e63",
        display: "flex",justifyContent: "center", alignItems: "center",
      }}
    >
      <div
        style={{
            backgroundColor: "#212b2a",padding: "30px",borderRadius: "10px",
            textAlign: "center",minWidth: "300px",
        }}
      >
        <h1>Login Form</h1>
        <label>Username:</label>
        <br />
        <input type="text" placeholder="Enter your Username" id="un" />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" placeholder="Enter your Password" id="pw" />
        <br />
        <button>Login</button>
        <br />
        <NavLink to="/register">Dont have an account? REGISTER</NavLink>

      </div>
    </div>
  );
};

export default LoginForm;
