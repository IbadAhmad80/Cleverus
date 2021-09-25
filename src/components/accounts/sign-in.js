import React from "react";
import "./style.css";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaTwitter, FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [signInData, setSignInData] = React.useState({
    email: null,
    password: null,
  });
  const [signUpData, setSignUpData] = React.useState({
    username: null,
    email: null,
    password: null,
  });

  const handleSignInTransition = (e) => {
    const container = document.querySelector(".account-container");
    container.classList.remove("sign-up-mode");
  };

  const handleSignUpTransition = (e) => {
    const container = document.querySelector(".account-container");
    container.classList.add("sign-up-mode");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(signInData);
    setSignInData({ email: null, password: null });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(signUpData);
    setSignUpData({ username: null, email: null, password: null });
  };

  return (
    <div className="account-container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="email"
                placeholder="Email"
                value={signInData.email}
                onChange={(e) =>
                  setSignInData({ ...signInData, email: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <AiOutlineKey />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={signInData.password}
                onChange={(e) =>
                  setSignInData({ ...signInData, password: e.target.value })
                }
              />
            </div>
            <input type="submit" value="Login" className="account-btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="home" className="social-icon">
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
            </div>
            <Link to="/">
              <button to="/" className="account-btn solid">
                Maybe Later
              </button>
            </Link>
          </form>

          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="text"
                placeholder="Username"
                value={signUpData.username}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, username: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <BiEnvelopeOpen />
              </i>
              <input
                type="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <AiOutlineKey />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
              />
            </div>
            <input
              type="submit"
              className="account-btn solid"
              value="Sign up"
            />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="home" className="social-icon">
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
              </a>
              <a href="home" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedin />
                </i>
              </a>
            </div>

            <Link to="/">
              <button to="/" className="account-btn-2">
                Maybe Later
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="account-btn transparent"
              id="sign-up-btn"
              onClick={(e) => handleSignUpTransition(e)}
            >
              Sign up
            </button>
          </div>
          <img src="/images/bg/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="account-btn transparent"
              id="sign-in-btn"
              onClick={(e) => handleSignInTransition(e)}
            >
              Sign in
            </button>
          </div>
          <img src="/images/bg/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
