import React from "react";
import "./style.css";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  React.useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      setSignInData({ email: null, password: null });
      setSignUpData({ username: null, email: null, password: null });
      history.replace("/dashboard");
    }
  }, [user, loading]);

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
    signInWithEmailAndPassword(signInData.email, signInData.password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(
      signUpData.username,
      signUpData.email,
      signUpData.password
    );
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
              <button className="social-icon" onClick={signInWithGoogle}>
                <i className="fab fa-google">
                  <FaGoogle />
                </i>
                Sign in with Google
              </button>
            </div>
            <Link to="/home">
              <button className="account-btn solid">Maybe Later</button>
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
                required
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
                required
              />
            </div>

            <input
              type="submit"
              className="account-btn solid"
              value="Sign up"
            />

            <Link to="/">
              <button to="/home" className="account-btn-2">
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
