import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "../../layout/Metadata/metadata";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../../actions/userActions";

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [companyText, setCompanyText] = useState(true);
  const [emailText, setEmailText] = useState(true);
  const [passwordText, setPasswordText] = useState(true);

  const { name, email, password } = user;

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      alert.success("Regitration Successfull");
      history.push("/login");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const companyFocusHandler = (e) => {
    setCompanyText(false);
  };

  const emailFocusHandler = (e) => {
    setEmailText(false);
  };

  const passwordFocusHandler = (e) => {
    setPasswordText(false);
  };

  const outFocusHandler = (e) => {
    if (name !== "" && email !== "" && password !== "") {
      setCompanyText(false);
      setEmailText(false);
      setPasswordText(false);
    } else if (name !== "" && email !== "") {
      setCompanyText(false);
      setEmailText(false);
    } else if (name !== "" && password !== "") {
      setCompanyText(false);
      setPasswordText(false);
    } else if (email !== "" && password !== "") {
      setEmailText(false);
      setPasswordText(false);
    } else if ((name !== "") === true) {
      setCompanyText(false);
      setEmailText(true);
      setPasswordText(true);
    } else if ((email !== "") === true) {
      setEmailText(false);
      setCompanyText(true);
      setPasswordText(true);
    } else if ((password !== "") === true) {
      setPasswordText(false);
      setCompanyText(true);
      setEmailText(true);
    } else {
      setCompanyText(true);
      setEmailText(true);
      setPasswordText(true);
    }
  };

  console.log(name, email, password);

  return (
    <div className="container responsive-container">
      <MetaData title={"Register User"} />

      <div className="row text-center pt-2">
        <div className="col-12">
          <span className="omega">Omega</span>
        </div>
      </div>

      <div className="row grid">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <form
            className="rectangle1"
            onSubmit={submitHandler}
            encType="multipart/form-data"
          >
            <h1 className="text3">Sign Up</h1>
            <p className="text4">No credit card required</p>

            <div className="form-group">
              <input
                type="name"
                id="name_field"
                className="form-control textbox3"
                name="name"
                value={name}
                onChange={onChange}
                onFocus={companyFocusHandler}
                onBlur={outFocusHandler}
              />
              {companyText ? (
                <span className="placeholder3">Company name</span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email_field"
                className="form-control textbox4"
                name="email"
                value={email}
                onChange={onChange}
                onFocus={emailFocusHandler}
                onBlur={outFocusHandler}
              />

              {emailText ? (
                <span className="placeholder4">Email address</span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password_field"
                className="form-control textbox5"
                name="password"
                value={password}
                onChange={onChange}
                onFocus={passwordFocusHandler}
                onBlur={outFocusHandler}
              />

              {passwordText ? (
                <span className="placeholder5">Password</span>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <input className="checkbox1" type="checkbox" checked />
              <span className="checktext1">
                I agree to the
                <span className="checktext11">Terms &amp; Conditions</span>
              </span>
            </div>

            <button
              id="register_button"
              type="submit"
              className="rbtn"
              disabled={loading ? true : false}
            >
              <span className="rbtntext">Get Started</span>
            </button>
            <br />

            <div className="loginLink">
              <span className="linkstyle2">Already have an account?</span>
              <Link to="/login" className="linkstyle1">
                &nbsp; Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
