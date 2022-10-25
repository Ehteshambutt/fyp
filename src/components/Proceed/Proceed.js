import React, { useState } from "react";
import { Removecart } from "./../../Redux/Action/actions";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

const Proceed = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setSerivce] = useState("");
  const { cartItems } = useSelector((reducers) => reducers.cartReducer);

  const item = cartItems;

  const total = item
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cartItems)
    try {
      const data_order = {
        firstName:firstName,
        lastName:lastName,
        Phone: Phone,
        email:email,
        address:address,
        city:city,
        total:total,
        country:country,
        cartItems:cartItems
      }
      axios.post("http://localhost:5000/checkout",data_order)
      .then(data=>{
        console.log(data_order)
        console.log(data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    catch (ex){
      console.log(ex)
    }
  }

  return (
    <>
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592__480.png"
              alt=""
              width="72"
              height="57"
            />
            <h2>Checkout form</h2>
            <p class="lead">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>

          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Your cart</span>   <button
                          className=" btn btn-block btn-outline-dark mt-auto custom-button-primary"
                          onClick={() => {
                            dispatch(Removecart(cartItems));
                          }}
                        >
                          Clear Cart
                        </button>
                <span class="badge bg-primary rounded-pill">
                  {cartItems.length}
                </span>
              </h4>

              {cartItems.map((item) => {
                return (
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 class="my-0">{item.name}</h6>
                        <small class="text-muted">{item.description}</small>
                      </div>
                      <span class="text-muted">Rs {item.price}</span>
                    </li>
                  </ul>
                );
              })}
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (Rs)</span>
                <strong>Rs.{total}</strong>
              </li>
            </div>
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Billing address</h4>
              <form onSubmit={handleSubmit} class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="Phone" class="form-label">
                      Phone
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text"></span>
                      <input
                        type="number"
                        class="form-control"
                        id="Phone"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <div class="invalid-feedback">
                        Your Phone is required.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Adress
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="1234 Main St"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address2" class="form-label">
                      Booking (date and time): <span class="text-muted"></span>
                    </label>
                    <input
                      type="datetime-local"
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>

                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Country
                    </label>
                    <select
                      class="form-select"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Pakistan</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-md-5">
                    <label for="country" class="form-label">
                      Country
                    </label>
                    <select
                      class="form-select"
                      id="type"
                      value={type}
                      onChange={(e) => setSerivce(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Product</option>
                    </select>
                    <div class="invalid-feedback">Please select the type</div>
                  </div>

                  <div class="col-md-4">
                    <label for="state" class="form-label">
                      City
                    </label>
                    <select
                      class="form-select"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Islamabad</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="zip" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr class="my-4" />

                {/* <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="same-address"
                  />
                  <label class="form-check-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="save-info"
                  />
                  <label class="form-check-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked
                      required
                    />
                    <label class="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required
                    />
                    <label class="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>

                  <div class="col-md-6">
                    <label for="cc-number" class="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>*/}

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>

        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">&copy; 2017–2021 Company Name</p>
          <ul class="list-inline"></ul>
        </footer>
      </div>
    </>
  );
};

export default Proceed;
