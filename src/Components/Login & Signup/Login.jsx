import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Login() {

  const [storeData, setStoreData] = useState([]);
  
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );


  const userData = (e) => {
    e.preventDefault();

    const updatedUsers = [...localData, userDetail];

    setLocalData(updatedUsers);

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    console.log(storedUsers);

  };


  const getInputData = ((e)=>{
    const {name, value} = e.target;
    setUserDetail({...userDetail,[name]:value})
  })

  return (
    <div className="login">
    <div className="auth-container"> 
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={getInputData}
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            required
            onChange={getInputData}
          />
          <button type="submit" onClick={userData}>
            Login
          </button>
        </form>
      <p>
        Don't have an account?
         <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;