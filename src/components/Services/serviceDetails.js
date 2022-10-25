import { useNavigate } from "react-router-dom";
import "./Services.css"
import { useAuth } from "../auth";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
const ServiceDetails = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  //  product.productData.find(Data => Data._id === productId)
  const [Service, setService] = useState([]);
  const [thisProduct, setthisProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => setService(res.data.serviceData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filter = Service && Service.find((s) => s._id == id);
    console.log("llll.>", filter,Service);
    setthisProduct(filter)
  }, [Service]);

  return (
    <>
       <div className="rapper">
    <div className="uter">
      <div className="cntent animated fadeInLeft">
        <span className="bog animated fadeInDown">EXCLUSIVE</span>
        <h1 className="head1">{thisProduct?.name}<br/> For Your beauty </h1>
        <p className="pa">{thisProduct?.description}</p>
        
        <div className="buton">
          <Link to="#">Price:Rs{thisProduct?.price}</Link><Link className="cart-btn az" to="/serviceForm"><i className="cart-icon ion-bag"></i>Proceed to Checkout</Link>
        </div>
        
      </div>
      <img src={thisProduct?.imageUrl} alt="aa" width="300px" className="im animated fadeInRight"/>
    </div>
    <p className="footer pa">Based on FastLanSalon  - Products Market</p>
  </div>
    </>
  );
};


export { ServiceDetails };


