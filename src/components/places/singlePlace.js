import React from "react";
import "./css/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

function SinglePlace({ place }) {
  console.log(place && place.price && place.price + place.price[0]);
  return (
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
              <div class="hotel-card_images">
                <div>
                  <div>
                    <div>
                      <img
                        src={place?.image_url}
                        className="place-img"
                        alt="Hotel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="hotel-card_info p-4">
                <div class="d-flex align-items-center mb-2">
                  <h5 class="mb-0">{place?.name}</h5>
                  <div class=" mx-2">
                    <i class="fa fa-star text-warning">
                      <AiFillStar />
                    </i>
                    <i class="fa fa-star text-warning">
                      <AiFillStar />
                    </i>
                    <i class="fa fa-star text-warning">
                      <AiFillStar />
                    </i>
                    <i class="fa fa-star text-warning">
                      <AiFillStar />
                    </i>
                    <i class="fa fa-star text-warning">
                      <AiFillStar />
                    </i>
                  </div>
                  <a href="#!" class="text-dark ml-auto">
                    <i class="far fa-heart fa-lg"></i>
                  </a>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="hotel-card_details">
                    <div class="text-black mb-2">
                      <i class="fas fa-map-marker-alt">
                        <FiMapPin />
                      </i>
                      <span className="small-text mx-2">
                        {place?.location.address1}, {place?.location.city}
                      </span>
                    </div>
                    <div class="mb-2">
                      <span class="badge badge-primary">
                        {place?.system_rating}
                      </span>{" "}
                      <span className="small-text text-muted">
                        ( {place?.review_count} reviews )
                      </span>
                    </div>
                    <div class="amnities d-flex my-3 text-black small-text">
                      <span className="category mx-2 text-capitalize">
                        {place.categories[0]?.alias} .
                      </span>
                      <span className="price-range mx-1">
                        {place?.price || "££"} - {place?.price || "££"}
                        {place?.price?.slice(0, 1) || "£"} .
                      </span>
                      <span
                        className="website mx-1"
                        syle={{ cursor: "pointer" }}
                      >
                        Website
                        <span
                          className="m-1"
                          style={{ verticalAlign: "middle" }}
                        >
                          <BsArrowUpRight />
                        </span>
                      </span>
                    </div>
                    <div className="mt-3 mb-0 d-flex">
                      <i className="quote-icon">
                        <FaQuoteRight />
                      </i>
                      <span className=" mx-2 review text-muted">
                        <span>
                          " {place?.reviews[0]?.text.slice(0, 90)} ....
                        </span>
                      </span>
                    </div>
                    <div className="mt-1 mb-3 d-flex">
                      <i className="quote-icon">
                        <FaQuoteRight />
                      </i>
                      <span className=" mx-2 review text-muted">
                        <span>
                          {" "}
                          " {place?.reviews[1]?.text.slice(0, 90)} ....
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePlace;