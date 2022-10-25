import React from "react";

export const CartDetails = ({ cart, arrayOfItems }) => {
  // cart.forEach((_itemcartItem) => {
  //   // console.log(item,"itemmmm");
  //   console.log(arrayOfItems, "arrayOfItemsarrayOfItems");

  //   return arrayOfItems?.find(
  //     (item) => item._id === "633059be06acf3165f1a232c"
  //   );
  // });
  // find the cart item , ['1,2,3]
  // find the id within arrayofItems

  return (
    <>
      {cart?.cartItems?.map((item, index) => (
        <p>{item?.name}</p>
      ))}
    </>
  );
};
