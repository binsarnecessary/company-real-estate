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
import Bg21 from "../../data/images/ourwork/supply/21.jpg";
import Bg22 from "../../data/images/ourwork/supply/22.jpg";
import Bg23 from "../../data/images/ourwork/supply/23.jpg";
import Bg24 from "../../data/images/ourwork/supply/24.jpg";
import Bg25 from "../../data/images/ourwork/supply/25.jpg";
import Bg26 from "../../data/images/ourwork/supply/26.jpg";
import Bg27 from "../../data/images/ourwork/supply/27.jpg";
import Bg28 from "../../data/images/ourwork/supply/28.jpg";
import Bg29 from "../../data/images/ourwork/supply/29.jpg";
import Bg30 from "../../data/images/ourwork/supply/30.jpg";
import Bg31 from "../../data/images/ourwork/supply/31.jpg";
import Bg32 from "../../data/images/ourwork/supply/32.jpg";
import Bg33 from "../../data/images/ourwork/supply/33.jpg";
import Bg34 from "../../data/images/ourwork/supply/34.jpg";
import Bg35 from "../../data/images/ourwork/supply/35.jpg";
import Bg36 from "../../data/images/ourwork/supply/36.jpg";
import Bg37 from "../../data/images/ourwork/supply/37.jpg";
import Bg38 from "../../data/images/ourwork/supply/38.jpg";
import Bg39 from "../../data/images/ourwork/supply/39.jpg";
import Bg40 from "../../data/images/ourwork/supply/40.jpg";



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
    const newIndex = (currentIndex + 1) % 40; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20,
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35,Bg36,Bg37,Bg38,Bg39,Bg40][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + 40) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20,
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35,Bg36,Bg37,Bg38,Bg39,Bg40][newIndex]);
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
          { src: Bg36, alt: "Image 36" },
          { src: Bg37, alt: "Image 37" },
          { src: Bg38, alt: "Image 38" },
          { src: Bg39, alt: "Image 39" },
          { src: Bg40, alt: "Image 40" }

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
