import React, { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";

import Bg1 from "../../data/images/ourwork/mecanical/1.jpg";
import Bg2 from "../../data/images/ourwork/mecanical/2.jpg";
import Bg3 from "../../data/images/ourwork/mecanical/3.jpg";
import Bg4 from "../../data/images/ourwork/mecanical/4.jpg";
import Bg5 from "../../data/images/ourwork/mecanical/5.jpg";

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
    const newIndex = (currentIndex + 1) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + 5) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5][newIndex]);
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
