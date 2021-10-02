import React from "react";
import "../../css/style.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillMessage,
  AiFillPhone,
  AiFillHome,
} from "react-icons/ai";

export default function Form() {
  return (
    <div>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row gx-6">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-0 mx-lg-4">
              <form id="contact-form" className="contact__form">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none" }}
                      role="alert"
                    >
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>

                <span className="text-color">Send a message</span>
                <h3 className="text-md mb-4">Contact Form</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  className="btn-main btn-round-full px-5 py-3 border-0"
                  name="submit"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">We are Professionals</span>
                <h2 className="mb-5 mt-2 ">
                  Don’t Hesitate to contact with us for any kind of information
                </h2>

                <ul className="address-block list-unstyled text-muted">
                  <li>
                    <i className="mx-3 text-dark">
                      <AiFillHome />
                    </i>
                    North Main Street,Australia
                  </li>
                  <li>
                    <i className="mx-3 text-dark">
                      <AiFillMessage />
                    </i>
                    Email: contact@mail.com
                  </li>
                  <li>
                    <i className="mx-3 text-dark">
                      <AiFillPhone />
                    </i>
                    Phone:+88 01672 506 744
                  </li>
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com" className="text-black">
                      <i className="fs-2 ">
                        <AiFillFacebook />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com" className="text-black">
                      <i className="fs-2">
                        <AiFillTwitterSquare />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.themefisher.com" className="text-black">
                      <i className="fs-2">
                        <AiFillLinkedin />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
