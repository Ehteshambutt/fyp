import React,{useState,useEffect} from 'react'
import axios from "axios";
const Orders = () => {
  const [checkoutData, setcheckout] = useState("");
  const [data, setdata] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/checkout")
      .then((res) => setcheckout(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>Orderpage
     {/* {console.log(">>>>>>>checkout",checkoutData.checkoutData)} */}
   {/* {checkoutData.checkoutData.map((data) => {
            return (
      <div>{data.firstName}</div>)
 })}  */}
    </div>
  )
}

export default Orders