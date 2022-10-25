import React, { useState } from "react";
import MultiImages from "../MultiImages/MultiImages";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var formdata = new FormData();
      formdata.append("photo", file);
      formdata.append("name", name);
      formdata.append("price", price);
      formdata.append("countInStock", countInStock);
      formdata.append("description", description);
      formdata.append("type", type);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:5000/product", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {}
  };
  return (
    <div>
      <h5>AddProduct</h5>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form onSubmit={handleSubmit} class="needs-validation" novalidate>
          {/* <MultiImages/><input type='file'   onChange={handleChange}
              // onChange={(e) => setFile(e.target.files[0])}
              /><img src={file} /> */}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="price" class="form-label">
                Last price
              </label>
              <input
                type="text"
                class="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="Phone" class="form-label">
                countInStock
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text"></span>
                <input
                  type="number"
                  class="form-control"
                  id="countInStock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  required
                />
                <div class="invalid-feedback">Your Phone is required.</div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">
                type
              </label>
              <input
                type="type"
                class="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <div class="invalid-feedback">Type</div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Adress
              </label>
              <input
                type="text"
                class="form-control"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="1234 Main St"
                required
              />
            </div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
