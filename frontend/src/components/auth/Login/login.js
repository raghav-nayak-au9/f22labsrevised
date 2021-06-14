import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../layout/Loader/loader";
import MetaData from "../../layout/Metadata/metadata";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../../actions/userActions";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailText, setEmailText] = useState(true);
  const [passwordText, setPasswordText] = useState(true);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const emailFocusHandler = (e) => {
    setEmailText(false);
  };

  const passwordFocusHandler = (e) => {
    setPasswordText(false);
  };

  const outFocusHandler = (e) => {
    if (email !== "" && password !== "") {
      setEmailText(false);
      setPasswordText(false);
    } else if (email !== "") {
      setEmailText(false);
      setPasswordText(true);
    } else if (password !== "") {
      setEmailText(true);
      setPasswordText(false);
    } else {
      setEmailText(true);
      setPasswordText(true);
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container responsive-container">
          <MetaData title={"Login User"} />

          <div className="row text-center pt-2">
            <div className="col-12">
              <span className="omega">Omega</span>
            </div>
          </div>

          <div className="row grid">
            <div className="col-12 col-sm-12 col-md-8 col-lg-4">
              <form className="rectangle" onSubmit={submitHandler}>
                <h1 className="text1">Sign In</h1>
                <p className="text2">Enter your account details below</p>

                <div className="form-group">
                  <input
                    type="email"
                    id="email_field"
                    className="form-control textbox1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={emailFocusHandler}
                    onBlur={outFocusHandler}
                  />
                  {emailText ? (
                    <span className="placeholder">Email address</span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password_field"
                    className="form-control textbox2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={passwordFocusHandler}
                    onBlur={outFocusHandler}
                  />
                  {passwordText ? (
                    <>
                      <span className="placeholder1">Password</span>
                      <span className="placeholder2">Forget Password?</span>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <input type="checkbox" className="checkbox" />
                  <span className="checktext">Keep me signed in</span>
                </div>

                <button id="login_button" type="submit" className="btn">
                  <span className="btnText">Get Started</span>
                </button>

                <div className="registerLink">
                  <span className="linkstyle3">Don't have an account?</span>
                  <Link to="/register" className="linkstyle">
                    &nbsp;Create for free
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
