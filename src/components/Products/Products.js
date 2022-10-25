import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { addToCart,Removecart } from "./../../Redux/Action/actions";
import axios from "axios";
// import "../App.css";
import { useParams } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const dispatch = useDispatch();

  const { id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const [product, setProduct] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [])
  return (
    <>
      <div
        className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 mt-5 ml-5 mr-5
                    row-cols-xl-3 justify-content-start"
      >
        {product &&
          product.productData.map((Data, i) => {
            return (
              <div key={i} className="col mb-5 ">
                <div className="card margin-bit product-card ">
                  <Link to={`/product/${Data._id}`}>
                    <img
                      className="card-img-top"
                      src={Data.imageUrl}
                      width="100%"
                      height="200"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body p-4 pb-0">
                    <div className="text-left h-all">
                      <h5 className="title">
                        <span className="subtitle">{Data.name}</span>
                        <span className="prc d-flex justify-content-end ">
                          {" "}
                          Rs. <span className="currency">
                            {Data.price}
                          </span>{" "}
                        </span>
                      </h5>
                      <p className="truncate-text "><span class="d-inline-block text-truncate" style={{maxWidth: "150px"}}>

{Data.description}</span></p>
                      {/* <div className="d-flex margin-bitn justify-content-between">
                    <p className="margin-res">
                        Quantity <span> Unit</span>
                      </p> 
                      <p className="rounded-pill border margin-r px-2">category</p>
                    </div> */}
                    </div>
                  </div>
                  <div className="btn-parent">
                    <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                          onClick={() => {
                            navigate("/proceed");
                            //   handleAddItemToCart(item);
                          }}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                    <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                          onClick={() => {
                            dispatch(addToCart(Data));
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Outlet />
    </>
  );
};
