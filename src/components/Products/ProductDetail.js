import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import './Product.css'
import { addToCart,Removecart } from "./../../Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Link, useParams } from "react-router-dom";
import Proceed from "../Proceed/Proceed";
const ProductDetail = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { id } = useParams();
  const [loadData, setLoadData] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const dispatch = useDispatch();
  //  product.productData.find(Data => Data._id === productId)
  const [product, setProducts] = useState([]);
  const [thisProduct, setthisProduct] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => setProducts(res.data.productData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filter = product && product.find((s) => s._id == id);
    console.log("llll.>", filter,product);
    setthisProduct(filter)
  }, [product]);

  return (
    <> 

  <div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src={thisProduct?.imageUrl}/></div>
                      <div class="tab-pane" id="pic-2"><img src={thisProduct?.imageUrl} /></div>
                    
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                      <li><a data-target="#pic-5" data-toggle="tab"><img src={thisProduct?.imageUrl} /></a></li>
                    </ul>
                    
                </div>
                <div class="details col-md-6">
                    <h3 class="product-title">{thisProduct?.name}</h3>
                    <div class="rating">
                        <div class="stars">
                        <span className="bog animated fadeInDown">EXCLUSIVE</span>
                          
                        </div>
                      
                    </div>
                    <p class="product-description">{thisProduct?.description}</p>
                    <h4 class="price">current price: <span>{thisProduct?.price}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed our products! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">Now:
                        <span class="size" data-toggle="tooltip" title="small">B</span>
                        <span class="size" data-toggle="tooltip" title="medium">U</span>
                        <span class="size" data-toggle="tooltip" title="large">Y</span>
                        <span class="size" data-toggle="tooltip" title="xtra large">IT</span>
                    </h5>
                    <h5 class="colors">Islamabad:
                 
                        {/* <span class="color green"></span>
                        <span class="color blue"></span> */}
                    </h5>
                    <div class="action">
                        <button class="add-to-cart btn btn-default"  onClick={() => {
                            dispatch(addToCart(thisProduct));
                          }} type="button">add to cart</button>
                        <button class="like btn btn-default" type="button">    
       
          <Link className="cart-btn az" to="/proceed"><i className="cart-icon ion-bag"></i>Proceed to Checkout</Link>
        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








   <Proceed/>



   
    </>
  );
};



export { ProductDetail };

