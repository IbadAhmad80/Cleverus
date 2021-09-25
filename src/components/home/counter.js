import React from "react";
import "../../css/style.css";
import { FaShoppingBag } from "react-icons/fa";
import { RiHotelLine, RiScissors2Line } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section class=" counter bg-counter">
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <i class="color-one text-md-1">
                  <RiHotelLine />
                </i>
                <h3 class="mt-4 mb-0 text-white">
                  <span class="counter-stat font-weight-bold">
                    <CountUp end={200} duration={10} />
                  </span>{" "}
                  +
                </h3>
                <p class="text-white-50">Hotels</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <i class="ti-flag color-one text-md-1">
                  <RiScissors2Line />
                </i>
                <h3 class="mt-4 mb-0 text-white">
                  <span class="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={100} duration={8} />{" "}
                  </span>
                  +
                </h3>
                <p class="text-white-50">Barbers</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0">
                <i class="ti-layers color-one text-md-1">
                  <GiKnifeFork />
                </i>
                <h3 class="mt-4 mb-0 text-white">
                  <span class="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={200} duration={10} />{" "}
                  </span>
                  +
                </h3>
                <p class="text-white-50">Resturants</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center">
                <i class="ti-medall color-one text-md-1">
                  <FaShoppingBag />
                </i>
                <h3 class="mt-4 mb-0 text-white">
                  <span class="counter-stat font-weight-bold">
                    {" "}
                    <CountUp end={120} duration={10} />{" "}
                  </span>
                  +
                </h3>
                <p class="text-white-50">Shopping Malls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
