import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { addToCart } from "./../../Redux/Action/actions";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const Service = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout()
   localStorage.removeItem("token");
   localStorage.removeItem("user");
    navigate("/login");
  }


  const { _id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const [service, setService] = useState('');
  useEffect(() => {
   
         axios.get('http://localhost:5000/service').then((res) => setService(res.data))
         .catch((err) => console.log(err));
        
   
  }, []);
 
  
  return (<>
    {/* <div> Welcome {auth.user}.<button className="btn btn-primary btn-lg mx-auto" onClick={handleLogout}>Logout</button>
    </div> */}
    

    <div
        style={{ width: "100%" }}
        className="row gx-4 gx-lg-5 row-cols-2  row-cols-md-1 mt-5 ml-3 mr-3
                row-cols-xl-1 justify-content-start "
      >
                {service && service.serviceData.map((service,i) => ( // add this "products &&" before products.map
                  <div key={i}>
                  <div className="card mb-3 ml-5 mr-5" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        {/* <Link to={{pathname:`/service/${service._id}`, obj:{service}}}> */}
                          {console.log("I am Console", _id)}
                          <img
                            className="card-img-top"
                            src={service.imageUrl}
                            width="100%"
                            height="200"
                            alt="..."
                          />
                        {/* </Link> */}
                        {" "}
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          {" "}
                          <div className="card-body p-4 pb-0">
                            <div className="text-left">
                              <h5 className="title">
                                {service.name} <span className="subtitle"></span>
                                <span className="prc d-flex justify-content-end ">
                                  {" "}
                                   Rs.<span className="currency">
                                   {service.price}
                                  </span>{" "}
                                </span>
                              </h5>
                              <p>{service.description}</p>
                              <div className="d-flex justify-content-between">
                                {/* <p>
                                  Quantity <span> Unit</span>
                                </p>
                                <p className="rounded-pill border px-2">category</p> */}
                              </div>
                            </div>
                          </div>
                          <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                            <Link to={`/service/${service._id}`}>   <button
                                className="btn btn-block btn-outline-dark mt-auto custom-button-primary"
                               
                              >
                               View Details
                              </button></Link> 
                            </div>
                          </div>
                          <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                          onClick={() => {
                            dispatch(addToCart(service));
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    
                ))}
            </div>

     
    </>
  )
}
