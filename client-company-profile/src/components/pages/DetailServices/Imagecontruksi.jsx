import React, { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";

import Bg1 from "../../data/images/ourwork/mecanical/1.jpg";
import Bg2 from "../../data/images/ourwork/mecanical/2.jpg";
import Bg3 from "../../data/images/ourwork/mecanical/3.jpg";
import Bg4 from "../../data/images/ourwork/mecanical/4.jpg";
import Bg5 from "../../data/images/ourwork/mecanical/5.jpg";
import Bg6 from "../../data/images/ourwork/mecanical/6.jpg";
import Bg7 from "../../data/images/ourwork/mecanical/7.jpg";
import Bg8 from "../../data/images/ourwork/mecanical/8.jpg";
import Bg9 from "../../data/images/ourwork/mecanical/9.jpg";
import Bg10 from "../../data/images/ourwork/mecanical/10.jpg";
import Bg11 from "../../data/images/ourwork/mecanical/11.jpg";
import Bg12 from "../../data/images/ourwork/mecanical/12.jpg";
import Bg13 from "../../data/images/ourwork/mecanical/13.jpg";
import Bg14 from "../../data/images/ourwork/mecanical/14.jpg";
import Bg15 from "../../data/images/ourwork/mecanical/15.jpg";
import Bg16 from "../../data/images/ourwork/mecanical/16.jpeg";
import Bg17 from "../../data/images/ourwork/mecanical/17.jpg";
import Bg18 from "../../data/images/ourwork/mecanical/18.jpg";
import Bg19 from "../../data/images/ourwork/mecanical/19.jpg";
import Bg20 from "../../data/images/ourwork/mecanical/20.jpg";
import Bg21 from "../../data/images/ourwork/mecanical/21.jpg";
import Bg22 from "../../data/images/ourwork/mecanical/22.jpg";
import Bg23 from "../../data/images/ourwork/mecanical/23.jpg";
import Bg24 from "../../data/images/ourwork/mecanical/24.jpg";
import Bg25 from "../../data/images/ourwork/mecanical/25.jpg";
import Bg26 from "../../data/images/ourwork/mecanical/26.jpg";
import Bg27 from "../../data/images/ourwork/mecanical/27.jpg";
import Bg28 from "../../data/images/ourwork/mecanical/28.jpg";
import Bg29 from "../../data/images/ourwork/mecanical/29.jpg";
import Bg30 from "../../data/images/ourwork/mecanical/30.jpg";
import Bg31 from "../../data/images/ourwork/mecanical/31.jpg";
import Bg32 from "../../data/images/ourwork/mecanical/32.jpg";
import Bg33 from "../../data/images/ourwork/mecanical/33.jpg";
import Bg34 from "../../data/images/ourwork/mecanical/34.jpg";
import Bg35 from "../../data/images/ourwork/mecanical/35.jpg";





const Imagecontruksi = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShow(true);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % 35; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20,
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + 35) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20,
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleClose = () => setShow(false);

  const handleKeyPress = (e) => {
    // Check if the pressed key is the 'Enter' key (keyCode 13)
    if (e.keyCode === 13) {
      handleNextImage();
    }
  };

  return (
    <div className="Gallery">
      <div className="image-container">
        {[
          { src: Bg1, alt: "Image 1" },
          { src: Bg2, alt: "Image 2" },
          { src: Bg3, alt: "Image 3" },
          { src: Bg4, alt: "Image 4" },
          { src: Bg5, alt: "Image 5" },
          { src: Bg6, alt: "Image 6" },
          { src: Bg7, alt: "Image 7" },
          { src: Bg8, alt: "Image 8" },
          { src: Bg9, alt: "Image 9" },
          { src: Bg10, alt: "Image 10" },
          { src: Bg11, alt: "Image 11" },
          { src: Bg12, alt: "Image 12" },
          { src: Bg13, alt: "Image 13" },
          { src: Bg14, alt: "Image 14" },
          { src: Bg15, alt: "Image 15" },
          { src: Bg16, alt: "Image 16" },
          { src: Bg17, alt: "Image 17" },
          { src: Bg18, alt: "Image 18" },
          { src: Bg19, alt: "Image 19" },
          { src: Bg20, alt: "Image 20" },
          { src: Bg21, alt: "Image 21" },
          { src: Bg22, alt: "Image 22" },
          { src: Bg23, alt: "Image 23" },
          { src: Bg24, alt: "Image 24" },
          { src: Bg25, alt: "Image 25" },
          { src: Bg26, alt: "Image 26" },
          { src: Bg27, alt: "Image 27" },
          { src: Bg28, alt: "Image 28" },
          { src: Bg29, alt: "Image 29" },
          { src: Bg30, alt: "Image 30" },
          { src: Bg31, alt: "Image 31" },
          { src: Bg32, alt: "Image 32" },
          { src: Bg33, alt: "Image 33" },
          { src: Bg34, alt: "Image 34" },
          { src: Bg35, alt: "Image 35" },
        ].map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image.src, index)}
            className="gallery-image"
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        className="gallery-modal"
        onKeyDown={handleKeyPress}
        tabIndex="0"
        dialogClassName="modal-dialog-custom"
        centered
      >
        <div className="overlay" onClick={handleClose}></div>
        <Modal.Body>
          <Image src={selectedImage} alt="Selected Image" fluid />
          <div className="modal-buttons-container">
            <Button
              variant="transparent"
              onClick={handlePrevImage}
              className="modal-button"
            >
              {"<"}
            </Button>
            <Button
              variant="transparent"
              onClick={handleNextImage}
              className="modal-button"
            >
              {">"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <div></div>
    </div>
  );
};

export default Imagecontruksi;
