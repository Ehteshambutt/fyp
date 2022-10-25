import "../App.css";
import { useState, useEffect, useDebugValue } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

// import {useAuth} from './auth'

// import auth from "./auth";
function ResetPassword() {
  const {userId, token}=useParams()
 

  console.log("id",userId, token)
  const [user,setUser]=useState("")
  // const auth=useAuth()
  
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const [getToken, setGetToken] = useState("");
  useEffect(() => {
    setGetToken(JSON.parse(localStorage.getItem("token")));
    
  
  }, []);
  let handleSubmit = async (e) => {
           
    

    e.preventDefault();
    try {var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
      var urlencoded = new URLSearchParams();
      urlencoded.append("password", password);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
    
      fetch(`http://localhost:5000/reset-password/${userId}/${token}`, requestOptions)
        .then(response => response.text()
        )
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    //   var myHeaders = new Headers();
    //   myHeaders.append("x-auth-token", getToken);
    //   myHeaders.append("Authorization", "Bearer" + getToken);
    //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //   var urlencoded = new URLSearchParams();
   
    //   urlencoded.append("password", password);
    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: urlencoded,
    //     redirect: "follow",
    //   };

    //   fetch("http://localhost:5000/reset-password/:userId/:token", requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log(result);
    //       if (result.token !== " ") {
    //     //  window.location.href("/home")
    // alert("Updated")
    //         navigate('/')
    //       } else {
    //         alert("Invalid");
    //       }
    //     })
    //     .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle signup-form body1">
    <form onSubmit={handleSubmit} className="row g-3 form-group">
      <div className="col-12  form-group">
    
    
      </div><div className="col-md-6 form-group">
        <input   className="form-control "
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        /></div>
   <button className=" btn  btn-primary" type="submit">Submit</button>
       <span class="psw">Forgot password? <a href="/">Home</a></span>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
     
    </div>
  );
}

export default ResetPassword;
