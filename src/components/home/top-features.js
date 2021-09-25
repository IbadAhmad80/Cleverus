import React from "react";
import "../../css/style.css";
import { ImLoop2 } from "react-icons/im";
import { FiDatabase } from "react-icons/fi";
import { BiTimer } from "react-icons/bi";

export default function TopFeatures() {
  return (
    <section className="section intro">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8">
            <div className="section-title">
              <span className="h6 text-color ">
                Feature that highlights our work
              </span>
              <h2 className="mt-3 content-title">
                Some serious features are put in development which makes your
                dream place just a meter away
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="intro-item mb-5 mb-lg-0">
              <i className="ti-desktop color-one">
                <BiTimer />
              </i>
              <h4 className="mt-4 mb-3">Real-Time Predictions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                ducimus.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-item mb-5 mb-lg-0">
              <i className="ti-medall color-one">
                <FiDatabase />
              </i>
              <h4 className="mt-4 mb-3">State of the Art Model</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                ducimus.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-item mb-5 mb-lg-0">
              <i className="ti-medall color-one">
                <ImLoop2 />
              </i>
              <h4 className="mt-4 mb-3">Touch of Reinforcement</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
