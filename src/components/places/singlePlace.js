import React from "react";
import "./css/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

function SinglePlace(props) {
  return (
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
              <div class="hotel-card_images">
                <div
                  id="bootstrapCarousel"
                  class="carousel slide h-100"
                  data-ride="carousel"
                >
                  <div class="carousel-inner h-100">
                    <div class="carousel-item h-100 active">
                      <img
                        src="/images/places/hotel1.jpg"
                        class="d-block w-100"
                        alt="Hotel Image"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src="/images/places/hotel2.jpg"
                        class="d-block w-100"
                        alt="Hotel Image"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src="/images/places/hotel3.jpg"
                        class="d-block w-100"
                        alt="Hotel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="hotel-card_info p-4">
                <div class="d-flex align-items-center mb-2">
                  <h5 class="mb-0">Hotel Paradise</h5>
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
                    <div class="text-muted mb-2">
                      <i class="fas fa-map-marker-alt">
                        <FiMapPin />
                      </i>
                      <span className="small-text mx-2">Bangalore</span>
                    </div>
                    <div class="mb-2">
                      <span class="badge badge-primary">4.5</span>{" "}
                      <span className="small-text text-muted">
                        ( 245 ratings & 56 reviews )
                      </span>
                    </div>
                    <div class="amnities d-flex my-3">
                      <img
                        class="mx-2"
                        src="/images/places/icons/desk-bell.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Desk bell"
                        alt="Desk bell"
                      />
                      <img
                        class="mx-2"
                        src="/images/places/icons/single-bed.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Single Bed"
                        alt="Single Bed"
                      />
                      <img
                        class="mx-2"
                        src="/images/places/icons/towels.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Towels"
                        alt="Towels"
                      />
                      <img
                        class="mx-2"
                        src="/images/places/icons/wifi.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Wifi"
                        alt="Wifi"
                      />
                    </div>
                    <div className="mt-3 mb-0 d-flex">
                      <i className="fs-5">
                        <FaQuoteLeft />
                      </i>
                      <span className=" mx-2 review text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum ...
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
