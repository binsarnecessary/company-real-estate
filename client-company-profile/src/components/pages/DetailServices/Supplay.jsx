import React, { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";


import Bg1 from "../../data/images/ourwork/supply/1.jpg";
import Bg2 from "../../data/images/ourwork/supply/2.jpg";
import Bg3 from "../../data/images/ourwork/supply/3.jpeg";
import Bg4 from "../../data/images/ourwork/supply/4.jpg";
import Bg5 from "../../data/images/ourwork/supply/5.jpg";
import Bg6 from "../../data/images/ourwork/supply/6.jpeg";
import Bg7 from "../../data/images/ourwork/supply/7.jpeg";
import Bg8 from "../../data/images/ourwork/supply/8.jpeg";
import Bg9 from "../../data/images/ourwork/supply/9.jpeg";
import Bg10 from "../../data/images/ourwork/supply/10.jpeg";
import Bg11 from "../../data/images/ourwork/supply/11.jpg";
import Bg12 from "../../data/images/ourwork/supply/12.jpg";
import Bg13 from "../../data/images/ourwork/supply/13.jpeg";
import Bg14 from "../../data/images/ourwork/supply/14.jpeg";
import Bg15 from "../../data/images/ourwork/supply/15.jpg";
import Bg16 from "../../data/images/ourwork/supply/16.jpeg";
import Bg17 from "../../data/images/ourwork/supply/17.jpeg";
import Bg18 from "../../data/images/ourwork/supply/18.jpg";
import Bg19 from "../../data/images/ourwork/supply/19.jpg";
import Bg20 from "../../data/images/ourwork/supply/20.jpg";


const Supplay = () => {
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
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + 35) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20][newIndex]);
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
          { src: Bg20, alt: "Image 20" }
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
    </div>
  );
};
export default Supplay;
