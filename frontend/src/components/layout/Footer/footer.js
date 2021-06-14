import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="curvetop">
      <div className="left-curve"></div>
      <div className="text-center text-white">
        <h1>Ready to launch?</h1>
      </div>
      <div className="text-center text-secondary px-2">
        <p>
          Are you interested to join our team? Check out our job openings and
          apply on your suitable role.
        </p>
      </div>
      <br />
      <br />
      <div className="text-center" style={{ position: "relative" }}>
        <a href="#" class="btn footer_btn">
          <span className="ftrbtn">Get Omega Now</span>
        </a>
      </div>

      <br />
      <br />
      <br />
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-3 col-md-2 title">
            <h5>Omega</h5>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-2">
            <h5>About</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Our Mission</a>
              </li>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Team Members</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-3 col-md-2">
            <h5>Learn</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Tutorials</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-3 col-md-2">
            <h5>Stories</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Tech Stories</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-3 col-md-2">
            <h5>Hire</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Freelancers</a>
              </li>
              <li>
                <a href="">Trainee</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>

          <hr />
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-left text-white">
            <p class="h6">© 2020, UKTheme, All right Reversed</p>
          </div>

          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
