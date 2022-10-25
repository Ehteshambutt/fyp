import "../App.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Forgotpassword() {
  


  // const auth=useAuth()
  const [email, setemail] = useState("");

  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const [getToken, setGetToken] = useState("");
  useEffect(() => {
    setGetToken(JSON.parse(localStorage.getItem("token")));
    
  
  }, []);
  let handleSubmit = async (e) => {
           


    e.preventDefault();
    try {
      var myHeaders = new Headers();
      myHeaders.append("x-auth-token", getToken);
      myHeaders.append("Authorization", "Bearer" + getToken);
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      var urlencoded = new URLSearchParams();
      urlencoded.append("email", email);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("http://localhost:5000/reset-password", requestOptions)
        .then((response) => {response.json()
        alert('email is Send please check inbox')})
        .then((result) => {
          console.log(result);
        //   if (result.token !== " ") {
        // //  window.location.href("/home")
        // // <Link to = '/home'></Link>
            navigate('/emailsent')
        //   } else {
         
        //   }
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle signup-form body1">
    <form onSubmit={handleSubmit} className="row g-3 form-group">
      <div className="col-12  form-group">
    
    
        <input   className="form-control  "
          type="email"
          value={email}
          placeholder="Enter your email adress" required
          onChange={(e) => setemail(e.target.value) }
        /></div>
   <button className=" btn  btn-primary" type="submit">Reset password</button>
     
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
 
    </div>
  );
}

export default Forgotpassword;
