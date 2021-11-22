import React from "react";
import "../../css/style.css";
import { RiHospitalFill } from "react-icons/ri";
import { RiHotelLine, RiScissors2Line } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section className=" counter bg-counter">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="color-one text-md-1">
                  <RiHotelLine />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    <CountUp end={200} duration={10} />
                  </span>{" "}
                  +
                </h3>
                <p className="text-white-50">Hotels</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-flag color-one text-md-1">
                  <RiScissors2Line />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={100} duration={8} />{" "}
                  </span>
                  +
                </h3>
                <p className="text-white-50">Barbers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-layers color-one text-md-1">
                  <GiKnifeFork />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={200} duration={10} />{" "}
                  </span>
                  +
                </h3>
                <p className="text-white-50">Resturants</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center">
                <i className="ti-medall color-one text-md-1">
                  <RiHospitalFill />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={120} duration={10} />{" "}
                  </span>
                  +
                </h3>
                <p className="text-white-50">Hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
