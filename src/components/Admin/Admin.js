import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MultiImages from "../MultiImages/MultiImages";
import AddProduct from "./AddProduct";
import AddService from "./AddService";
import AdminBar from "./AdminBar";
// import Orders from './Orders'
import axios from "axios";
import { CartDetails } from "../CartDetails";
const Admin = () => {
  const [checkout, setcheckout] = useState([]);
  const [data, setdata] = useState("");
  const [filterDatasFormState, setFilterDatasFromState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/checkout/")
      .then((res) => {
        setcheckout(res.data); // show me the map thing you were talk
        console.log("checkoutData>", res.data);

        let cartData = [];
        cartData.push(res.data.checkoutData);
        console.log("cartData", cartData);
        let obj = cartData[0].find((o) => o._id === "63413b365f939d78a26cfafc");
        console.log("objobjobjobj", obj.firstName);
        console.log(checkout, "cart items");
        let filterDatas = [];
        for (let i = 0; i < cartData[0].length; i++) {
          let data = cartData[0][i];
          let items = [];
          // setfilterDatas(filterDatas)
          for (let j = 0; j < cartData[0][i].cartItems.length; j++) {
            axios
              .get(
                `http://localhost:5000/product/${cartData[0][i].cartItems[j]}`
              )
              .then((response) => {
                // console.log(response, 'Product responseresponse')
                let productData = response.data.product.name;
                // console.log(productData)
                items.push({
                  _id: cartData[0][i].cartItems[j],
                  name: productData,
                });
              });

            filterDatas.push(items);
            setFilterDatasFromState(filterDatas);
          }
        }
        console.log(filterDatas);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>  <div
    style={{ width: "100%" }}
    className="row gx-4 gx-lg-5 row-cols-2  row-cols-md-1 mt-5 ml-3 mr-3
            row-cols-xl-1 justify-content-start "
  >
            {checkout?.checkoutData?.map((service,i) => ( // add this "products &&" before products.map
              <div key={i}>
              <div className="card mb-3 ml-5 mr-5" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                  <div class="card text-white bg-primary mb-3" style={{maxWwidth: '18rem'}}>
  <div class="card-header">Client Details</div>
  <div class="card-body">
    <h5 class="card-title">{service.email}</h5>
    <p class="card-text">Phone 
    <span className="mr-4"> {service.Phone}</span>

</p>
  </div>
</div>
              
                    {" "}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      {" "}
                      <div className="card-body p-4 pb-0">
                        <div className="text-left">
                          <h5 className="title" >
                         <span className="text-warning">Client's name:</span> {service.firstName} {service.lastName}<span className="text-warning"> from</span>   {service.address}  <span className="subtitle"></span>
                            <span className="prc d-flex justify-content-end ">
                              {" "}
                              Rs {service.total} <span className="currency">  
                              </span>{" "}
                            </span>
                          </h5>
                          <p><span className="text-warning mr-4">Products: </span> {service?.cartItems?.map((items,j) => (
                            <span>{items.name} - </span>
                           ))}
                          </p>
                          <div className="d-flex justify-content-between">
                         
                          </div>
                        </div>
                      </div>
                     
                      <div className="card-footer margin-b p-1 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                      onClick={() => {
                        // delete()
                      }}
                    >
                    Delete
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
};

export default Admin;
