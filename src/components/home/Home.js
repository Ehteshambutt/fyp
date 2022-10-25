import "./Home.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";
import Team from "./Team/Team";
import Footer from "../../components/footer/Footer";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <div className="home" data-aos="zoom-out-up">
          <div className="about text-center">
            {" "}
            <h2 className="p3">FastLanSalon</h2>
            <p>
              {" "}
              FastLanSalon in Islamabad Pakistan With Best Team.The key to
              FastLanSalon's success, with respect to its quality assured client
              satisfaction, are its well defined procedures. If you’re trying to
              find a great barber in Islamabad, here are a few characteristics
              that you should look for in a saloon or in a Shop
            </p>{" "}
          </div>
          <div></div>{" "}
        </div>
        <h2 className="h2">What We Delivers</h2>
        <div className="card-group m-2 p-4 ">
          <div className="card m-3" data-aos="fade-down-right">
            <img src="./images/cut.jpg" className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">Stylish HairCut</h5>
              <p className="card-text">
                A haircut helps keep your hair healthy by removing any breakage
                or split endsA haircut helps keep your hair healthy by removing
                any breakage or split ends.
              </p>
            </div>
            <div className="card-footer">
              <Link
                className="nav-link text-light btn btn-dark d-grid"
                to="/Service"
              >
                {" "}
                Book Now
              </Link>
            </div>
          </div>
          <div className="card m-3" data-aos="flip-left">
            <img src="https://www.coolaromaspa.com/wp-content/uploads/2019/01/Facial-In-Dubai.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Facial</h5>
              <p className="card-text">
                A facial is a family of skin care treatments for the face,
                including steam, exfoliation, extraction, creams, lotions,
                facial masks, peels, and massage.
              </p>
            </div>
            <div className="card-footer">
              <Link
                className="nav-link text-light btn btn-dark d-grid"
                to="/Service"
              >
                {" "}
                Visit Now
              </Link>
            </div>
          </div>
          <div className="card m-3" data-aos="fade-down-left">
            <img src="./images/shop.jpg" className="card-img-top" alt="hh" />
            <div className="card-body">
              <h5 className="card-title">Our Products</h5>
              <p className="card-text">
                Facial Kits products in Pakistan from imported and local brands
                at lowest prices. ✓Guaranteed 100% Genuine products. ✓Cash on
                delivery.
              </p>
            </div>
            <div className="card-footer">
              <Link
                className="nav-link text-light btn btn-dark d-grid"
                to="/Product"
              >
                {" "}
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Team />

      <h5 className="text-center text-danger mb-5  border-bottom-warning ">
        Frequently Asked Questions
      </h5>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Is FastLanSalon only a shop?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>FastLanSalon is a not only a shop .</strong>It is also a
              complete platform where you can get products as well as services.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What king of products FastLanSalon sells?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>FastLanSalon sells hairs related products.</strong> These
              products are related to barbaric services at home
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Does FastLanSalon Shop remains open 24/7
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>The answer is no.</strong> It opens at 9am-9pm
              only.However our online products are available 24/4 . Anyone can
              oder online any service or product
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I make a complaint?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>You can complaint by just in contact session </strong>{" "}
              Going the contact just fill form or direct email us at
              FastLanSalon@gmail.com
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
