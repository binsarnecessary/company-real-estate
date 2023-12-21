import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact1 from "../data/images/equity.jpg";
// import Contact4 from "../data/images/sales.avif";
import Contact5 from "../data/images/human-resources.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const SliderContact = () => {
  const [isSliderDragging, setIsSliderDragging] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: () => setIsSliderDragging(true),
    afterChange: () => setIsSliderDragging(false),
  };

  const history = useHistory();

  const handleCardClick = (email) => {
    // Save the email to local storage
    localStorage.setItem("contactEmail", email);

    if (!isSliderDragging) {
      history.push("/talk-to");
    }
  };

  useEffect(() => {
    // Clear the contactEmail from local storage when the component mounts
    localStorage.removeItem("contactEmail");
    localStorage.removeItem("mode");
    localStorage.removeItem("body");
  }, []);

  return (
    <>
      {" "}
      <div className="slider-contact mt-5">
        <Slider {...settings}>
          <div>
            <div
              className="card"
              onClick={() => handleCardClick("business@dorma.com")}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${Contact1})` }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">Main Office</h5>
                  <p className="card-text text-white">
                  business@dorma.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="card"
              onClick={() => handleCardClick("sales.marketing@dorma.com")}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${Contact5})` }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold">Marketing</h5>
                  <p className="card-text text-white">sales.marketing@dorma.com</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
