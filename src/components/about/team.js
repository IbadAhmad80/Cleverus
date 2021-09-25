import React from "react";
import "../../css/style.css";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Team() {
  return (
    <section class="section team border-top border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-center">
            <div class="section-title">
              <span class="h6 text-color">Our Team</span>
              <h2 class="mt-3 content-title">
                Expert Team member to get best service
              </h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="team-item-wrap mb-5">
              <div class="team-item position-relative">
                <img
                  src="/images/team/team-6.jpg"
                  alt=""
                  class="img-fluid w-100"
                />
                <div class="team-img-hover">
                  <ul class="team-social list-inline">
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        class="facebook"
                      >
                        <i class="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://twitter.com/"
                        class="twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-twitter" aria-hidden="true">
                          <FiTwitter />
                        </i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a
                        href="https://www.linkedin.com/"
                        class="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-item-content">
                <h4 class="mt-3 mb-0 text-capitalize">Justin hammer</h4>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="team-item-wrap mb-5">
              <div class="team-item position-relative w-100">
                <img
                  src="/images/team/team-2.jpg"
                  alt=""
                  class="img-fluid w-100"
                />
                <div class="team-img-hover">
                  <ul class="team-social list-inline">
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        class="facebook"
                      >
                        <i class="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://twitter.com/"
                        class="twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-twitter" aria-hidden="true">
                          <FiTwitter />
                        </i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a
                        href="https://www.linkedin.com/"
                        class="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-item-content">
                <h4 class="mt-3 mb-0 text-capitalize">Jason roy</h4>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="team-item-wrap mb-5">
              <div class="team-item position-relative">
                <img
                  src="/images/team/team-3.jpg"
                  alt=""
                  class="img-fluid w-100"
                />
                <div class="team-img-hover">
                  <ul class="team-social list-inline">
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        class="facebook"
                      >
                        <i class="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://twitter.com/"
                        class="twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-twitter" aria-hidden="true">
                          <FiTwitter />
                        </i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a
                        href="https://www.linkedin.com/"
                        class="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="team-item-content">
                <h4 class="mt-3 mb-0 text-capitalize">Henry oswald</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
