import React from "react";
import "./css/style.css";

function SinglePlace(props) {
  return (
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-9 col-lg-9">
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
                  <a
                    class="carousel-control-prev"
                    href="#bootstrapCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#bootstrapCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="hotel-card_info p-4">
                <div class="d-flex align-items-center mb-2">
                  <h5 class="mb-0 mr-2">Hotel Paradise</h5>
                  <div>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                    <i class="fa fa-star text-warning"></i>
                  </div>
                  <a href="#!" class="text-dark ml-auto">
                    <i class="far fa-heart fa-lg"></i>
                  </a>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="hotel-card_details">
                    <div class="text-muted mb-2">
                      <i class="fas fa-map-marker-alt"></i> Bangalore
                    </div>
                    <div class="mb-2">
                      <span class="badge badge-primary">4.5</span>{" "}
                      <a href="#!" class="text-muted">
                        (245 ratings & 56 reviews)
                      </a>
                    </div>
                    <div class="amnities d-flex mb-3">
                      <img
                        class="mr-2"
                        src="/images/places/icons/desk-bell.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Desk bell"
                        alt="Desk bell"
                      />
                      <img
                        class="mr-2"
                        src="/images/places/icons/single-bed.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Single Bed"
                        alt="Single Bed"
                      />
                      <img
                        class="mr-2"
                        src="/images/places/icons/towels.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Towels"
                        alt="Towels"
                      />
                      <img
                        class="mr-2"
                        src="/images/places/icons/wifi.svg"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Wifi"
                        alt="Wifi"
                      />
                    </div>
                    <ul class="hotel-checklist pl-0 mb-0">
                      <li>
                        <i class="fa fa-check text-success"></i> Lorem ipsum
                        dolor
                      </li>
                      <li>
                        <i class="fa fa-check text-success"></i> Cras lectus
                        purus,{" "}
                      </li>
                      <li>
                        <i class="fa fa-check text-success"></i> ornare eget
                        congue
                      </li>
                    </ul>
                  </div>
                  <div class="hotel-card_pricing text-center">
                    <h3>₹1,300</h3>
                    <div class="d-flex">
                      <h6 class="text-striked text-muted mr-2">₹1,999</h6>
                      <h6 class="text-success">32% off</h6>
                    </div>
                    <button class="btn btn-primary">Check Rooms</button>
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
