import axios from "axios";
import React, { useState, type ChangeEvent } from "react";
import "./Reg.css";
import { useNavigate } from "react-router-dom";
interface IUser {
  email: string;
  password: string;
}
const Login = () => {
     const [msg, setMsg] = useState({
        email:"",
        password:""
      });
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...user, [name]: value }));
     setMsg((prev)=>({...prev,[name]:" "}));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors = { email: "", password: "" };
    let hasError = false;
    if (user.email == "") {
      validationErrors.email="Please enter email";
      hasError=true;
    }
    if(user.password == ""){
      validationErrors.password="Please enter password";
      hasError=true;
    }
    else if(user.password.length<6){
      validationErrors.password="Password must be atleast 6 characters long";
      hasError=true;
    }
    setMsg(validationErrors);
    if(hasError)
      return;
    await axios
      .post("http://localhost:3000/login")
      .then(() => {
        console.log("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Login Successfully");
    navigate("/dashboard");
  };
  return (
    <>
      <form method="post" className="add" onSubmit={handleSubmit}>
        <center>
          <h1>Login</h1>
          <div className="container mt-5">
            <input type="email" id="email" name="email"  value={user.email}  placeholder="Enter Your Email" onChange={handleChange} className="form-control mt-3" style={{ width: "500px" }}/>
            <div style={{color:'red'}}>{msg.email}</div>
            <input type="password" id="password" value={user.password} name="password" onChange={handleChange}  placeholder="Enter Your Password"  className="form-control mt-3"  style={{ width: "500px" }} />
            <div style={{color:'red'}}>{msg.password}</div>
            <button type="submit"  className="btn btn-dark mt-3"  style={{ width: "500px" }}>Login</button>
          </div>
        </center>
      </form>
    </>
  );
};

export default Login;
