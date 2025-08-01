import { NavLink } from "react-router"

const Register = () => {
  return (
    <div style={{
        height: "100vh",width: "100vw",backgroundColor: "#535e63",
        display: "flex",justifyContent: "center", alignItems: "center"}}>
      <div style={{
            backgroundColor: "#212b2a",padding: "30px",borderRadius: "10px",
            textAlign: "center",minWidth: "300px",
        }}>
        <h1>Register</h1>
        <label>Name</label>
        <input type="text" placeholder="Enter Your Full Name"/>
        <br />
        <label>Username</label>
        <input type="text" placeholder="Enter Your Username"/>  
        <br />
        <label>Password</label>     
        <input type="password" placeholder="Enter Your Password"/>
        <br />
        <button>Register</button>
        <br />
        <NavLink to="/login">Already have an account? LOGIN</NavLink>
        </div>
    </div>
  )
}

export default Register