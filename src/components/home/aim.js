import React from "react";
import "../../css/style.css";
import { VscPaintcan } from "react-icons/vsc";
import Lottie from "react-lottie";
import animationData from "../../images/about_bg.json";

export default function Aim({ size }) {
  const [dimensions, setDimensions] = React.useState({
    height: 500,
    width: 450,
    execution: false,
  });

  if (size[0] < 500 && dimensions.height !== 290) {
    setDimensions({ height: 290, width: 300 });
  } else if (size[0] >= 500 && dimensions.height !== 500) {
    setDimensions({ height: 500, width: 450, execution: false  });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="container section about">
      <div>
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 lottie">
            <Lottie
              options={defaultOptions}
              height={dimensions.height}
              width={dimensions.width}
              //   height={290}
              //   width={300}
            />
          </div>
          <div className="col-lg-6 ">
            <div className="about-item ">
              <span className="h6 text-color">What is our Aim</span>
              <h2 className="mt-3 mb-4 position-relative content-title">
                Provide Cutting Edge solution to your searches
              </h2>
              <div className="about-content">
                <h4 className="mb-3 position-relative">
                  <span>
                    <VscPaintcan />
                  </span>
                  We are Perfect Solution
                </h4>
                <p className="mb-5 ">
                  We provide state of the art fined tuned solution that will
                  help you to enhance your place searching experinece in more
                  reliable, efficent, predictable manner
                </p>

                <button className="btn-main btn-round-full px-5 py-3 border-0">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
