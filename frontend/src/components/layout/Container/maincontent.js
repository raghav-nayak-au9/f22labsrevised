import React from "react";
import image from "../images/covet.svg";
import image1 from "../images/rectangle.jpg";
import image2 from "../images/rectangle@2x.jpg";
import image3 from "../images/rectangle@3x.jpg";
import image4 from "../images/rectangle1.jpg";
import image5 from "../images/rectangle1@2x.jpg";
import image6 from "../images/rectangle1@3x.jpg";
import image7 from "../images/rectangle2.jpg";
import image8 from "../images/rectangle2@2x.jpg";
import image9 from "../images/rectangle2@3x.jpg";
import image10 from "../images/rectangle-div1.jpg";
import image11 from "../images/rectangle-div1@2x.jpg";
import image12 from "../images/rectangle-div1@3x.jpg";
import image13 from "../images/rectangle-div2.jpg";
import image14 from "../images/rectangle-div2@2x.jpg";
import image15 from "../images/rectangle-div2@3x.jpg";
import image16 from "../images/rectangle-div3.jpg";
import image17 from "../images/rectangle-div3@2x.jpg";
import image18 from "../images/rectangle-div3@3x.jpg";

const Maincontent = () => {
  return (
    <div className="container responsive-container">
      <div className="row text-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10 mx-auto">
          <button className="custom-button">
            <img src={image} className="covet" />
          </button>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
          <p className="heading2">Web app for Covet</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 col-xxl-6 mx-auto">
          <p className="heading3">
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </p>
        </div>
      </div>

      <div className="row grid">
        <div className="col-12">
          <img src={image1} srcset={(image2, image3)} className="covetimage" />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="clientbrief">Client Brief</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="clientpara">
            A Senior Data Engineer provides technical and delivery leadership
            for a team of developers working on data integration and processing
            projects. This role will work with stakeholders and other developers
            to design and implement technical data solutions for the business in
            a way that balances quality, cost, time and maintainability.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="problems">Problems</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="clientpara1">
            A Senior Data Engineer provides technical and delivery leadership
            for a team of developers working on data integration and processing
            projects. This role will work with stakeholders and other developers
            to design and implement technical data solutions for the business in
            a way that balances quality, cost, time and maintainability.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col mx-auto">
          <img src={image4} srcset={(image5, image6)} className="multiimage1" />
          <img src={image7} srcset={(image8, image9)} className="multiimage2" />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="solutions">Solutions</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="sde">
            A Senior Data Engineer provides technical and delivery leadership
            for a team of developers working on data integration and processing
            projects. This role will work with stakeholders and other developers
            to design and implement.
          </p>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="oval"></div>
        <p className="list1 col">
          This role will work with stakeholders and other developers to design
          and implement.
        </p>
      </div>

      <div className="row">
        <div className="oval2"></div>
        <p className="list2 col">
          Create custom landing pages with Omega that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without any design or custom coding.
        </p>
      </div>

      <div className="row">
        <div className="oval3"></div>
        <p className="list3 col">
          You might be surprised to know that not only do we run some of the
          biggest websites in the world; we’re also growing really fast! We have
          close to 600 staff and contractors worldwide, adding more than 100
          people to the business, which grows year on year, since 2017.
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="learning">Learnings</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="sde2">
            A Senior Data Engineer provides technical and delivery leadership
            for a team of developers working on data integration and processing
            projects. This role will work with stakeholders and other developers
            to design and implement technical data solutions for the business in
            a way that balances quality, cost, time and maintainability.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button className="live">
            <span className="livetext">Check live website</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="casestudy">More case studies</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="div1">
            <div className="upperdiv1">
              <img
                src={image10}
                srcset={(image11, image12)}
                className="upperdiv1"
              />
            </div>
            <div className="lowerdiv1">
              <p className="lowerdivhead1">Brag Mobile App</p>
              <p className="lowerdivpara1">
                Throwing consider dwelling bachelor joy her proposal laughter.
                Raptures returned disposed one entirely her men ham.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="div2">
            <div className="upperdiv2">
              <img
                src={image13}
                arc={(image14, image15)}
                className="upperdiv2"
              />
            </div>
            <div className="lowerdiv2">
              <p className="lowerdivhead2">Web App for Covet</p>
              <p className="lowerdivpara2">
                Throwing consider dwelling bachelor joy her proposal laughter.
                Raptures returned disposed one entirely her men ham.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mx-auto">
          <div className="div3">
            <div className="upperdiv3">
              <img
                src={image16}
                src={(image17, image18)}
                className="upperdiv3"
              />
            </div>
            <div className="lowerdiv3">
              <p className="lowerdivhead3">Office Solution for Dragar</p>
              <p className="lowerdivpara2">
                Throwing consider dwelling bachelor joy her proposal laughter.
                Raptures returned disposed one entirely her men ham.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Maincontent;
