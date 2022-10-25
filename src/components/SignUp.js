import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [username, setusername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBmMTNiZDBlZTg4OTdmODU1NmRkMDQiLCJpYXQiOjE2NjE5MzI0OTN9.yQymuYY7-YQeXHFunk1S7hb6chkuq6DH9XfsUw0ViG8"
      );
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      var urlencoded = new URLSearchParams();
      urlencoded.append("firstName", username);
      urlencoded.append("lastName", firstName);
      urlencoded.append("username", lastName);
      urlencoded.append("email", email);
      urlencoded.append("password", password);
      // urlencoded.append("userType", "admin");
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };
      fetch("http://localhost:5000/register", requestOptions)
        .then((response) => response.text())
        .then((result) => {const token=localStorage.getItem("token");
          console.log(result);
          if (result.msg === "User already exists") {
            alert(result.msg);
            
          } else if (token !== undefined) {
            
            navigate("/login");
          } else {
           alert("invalid")
          }
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="MainDiv ">
      <div className="text-center position-absolute top-50 start-50 translate-middle signup-form body1">
        <form onSubmit={handleSubmit} className="row g-3 form-group">
          <div className="col-md-6 form-group">
            <input
              className="form-control "
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="col-md-6 form-group">
            <input
              className="form-control "
              type="text"
              value={firstName}
              placeholder="firstName"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6 form-group">
            <input
              className="form-control "
              type="text"
              value={lastName}
              placeholder="lastName"
              onChange={(e) => setlastName(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="col-md-6 form-group">
            <input
              className="form-control "
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="col-md-6 form-group">
            <input
              className="form-control "
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />{" "}
          </div>
          <div className="col-12 ">
            <div className="form-check">
              <input
                className="form-check-input position-absolute"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                I aacepts the
                <span className="text-primary"> Terms of Use </span>&
                <span className="text-primary"> Privacy Policy</span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn  btn-primary">
            SignUp
          </button>
          <div className="message text-dark">
            {message ? <p>{message}</p> : null}
          </div>
        </form>
        <div className="hint-text ">
          Already have an account?{" "}
          <a href="/login">
            <span className="text-dark">Login here</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
