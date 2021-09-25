import React from "react";
import "./intro";
import Lottie from "react-lottie";
import animationData from "../../images/intro.json";

export default function Intro() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section class="section about-2 position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-item pr-3 mb-5 mb-lg-0">
                <span class="h6 text-color">What we are</span>
                <h2 class="mt-3 mb-4 position-relative content-title">
                  We are dynamic team of creative people
                </h2>
                <p class="mb-5">
                  We are amazing group of 3 people who are willing to learn and
                  understand new technologies which the goal of never being to
                  stop. This project is also among of those efforts.
                </p>

                <button class="btn-main btn-round-full px-5 py-3 border-0">
                  Get started
                </button>
              </div>
            </div>
            <div class=" col-lg-6">
              <div class="about-item-img">
                <Lottie
                  options={defaultOptions}
                  height={500}
                  width={450}
                  // height={290}
                  // width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
