import React from "react";
import "../../css/style.css";

export default function FamousPlaces() {
  return (
    <section className="latest-blog bg-2">
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Famous Places</span>
                <h2 className="mt-3 content-title text-white">
                  Famous Places to enrich yout knowledge
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="card bg-transparent border-0">
                <img
                  src="https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-2.jpg"
                  alt=""
                  className="img-fluid rounded"
                />

                <div className="card-body mt-2">
                  <div className="blog-item-meta">
                    <a href="#home" className="text-white-50">
                      Category / Resturant
                    </a>
                  </div>

                  <h3 className="mt-3 mb-4">
                    <a href="#home" className="text-white fs-4">
                      Middle East Deli
                    </a>
                  </h3>

                  <button
                    href="blog-single.html"
                    className="btn-small btn-solid-border btn-round-full text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="card border-0 bg-transparent">
                <img
                  src="https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-1.jpg"
                  alt=""
                  className="img-fluid rounded"
                />

                <div className="card-body mt-2">
                  <div className="blog-item-meta">
                    <a href="#home" className="text-white-50">
                      Category / Hotels
                    </a>
                  </div>

                  <h3 className="mt-3 mb-4 ">
                    <a href="#home" className="text-white fs-4">
                      The Empanadas House
                    </a>
                  </h3>

                  <button
                    href="blog-single.html"
                    className="btn-small btn-solid-border btn-round-full text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="card border-0 bg-transparent">
                <img
                  src="https://bootstrapmade.com/demo/templates/Presento/assets/img/portfolio/portfolio-3.jpg"
                  alt=""
                  className="img-fluid rounded"
                />

                <div className="card-body mt-2">
                  <div className="blog-item-meta">
                    <a href="#home" className="text-white-50">
                      Category / Hotels
                    </a>
                  </div>

                  <h3 className="mt-3 mb-4">
                    <a href="#home" className="text-white fs-4">
                      Philthy Phillys
                    </a>
                  </h3>

                  <button
                    href="blog-single.html"
                    className="btn-small btn-solid-border btn-round-full text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
