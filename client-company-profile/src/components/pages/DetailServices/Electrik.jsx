import React, { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";


import Bg1 from "../../data/images/ourwork/electrical/1.jpg";
import Bg2 from "../../data/images/ourwork/electrical/2.jpg";
import Bg3 from "../../data/images/ourwork/electrical/3.jpg";
import Bg4 from "../../data/images/ourwork/electrical/4.jpg";
import Bg5 from "../../data/images/ourwork/electrical/5.jpg";
import Bg6 from "../../data/images/ourwork/electrical/6.jpg";
import Bg7 from "../../data/images/ourwork/electrical/7.jpg";
import Bg8 from "../../data/images/ourwork/electrical/8.jpg";
import Bg9 from "../../data/images/ourwork/electrical/9.jpg";
import Bg10 from "../../data/images/ourwork/electrical/10.jpg";
import Bg11 from "../../data/images/ourwork/electrical/11.jpg";
import Bg12 from "../../data/images/ourwork/electrical/12.jpg";
import Bg13 from "../../data/images/ourwork/electrical/13.jpg";
import Bg14 from "../../data/images/ourwork/electrical/14.jpg";
import Bg15 from "../../data/images/ourwork/electrical/15.jpg";
import Bg16 from "../../data/images/ourwork/electrical/16.jpg";
import Bg17 from "../../data/images/ourwork/electrical/17.jpg";
import Bg18 from "../../data/images/ourwork/electrical/18.jpg";
import Bg19 from "../../data/images/ourwork/electrical/19.jpg";
import Bg20 from "../../data/images/ourwork/electrical/20.jpg";
import Bg21 from "../../data/images/ourwork/electrical/21.jpg";
import Bg22 from "../../data/images/ourwork/electrical/22.jpg";
import Bg23 from "../../data/images/ourwork/electrical/23.jpg";
import Bg24 from "../../data/images/ourwork/electrical/24.jpg";
import Bg25 from "../../data/images/ourwork/electrical/25.jpg";
import Bg26 from "../../data/images/ourwork/electrical/26.jpg";
import Bg27 from "../../data/images/ourwork/electrical/27.jpg";
import Bg28 from "../../data/images/ourwork/electrical/28.jpg";
import Bg29 from "../../data/images/ourwork/electrical/29.jpg";
import Bg30 from "../../data/images/ourwork/electrical/30.jpg";
import Bg31 from "../../data/images/ourwork/electrical/31.jpg";
import Bg32 from "../../data/images/ourwork/electrical/32.jpg";
import Bg33 from "../../data/images/ourwork/electrical/33.jpg";
import Bg34 from "../../data/images/ourwork/electrical/34.jpg";
import Bg35 from "../../data/images/ourwork/electrical/35.jpg";
import Bg36 from "../../data/images/ourwork/electrical/36.jpg";
import Bg37 from "../../data/images/ourwork/electrical/37.jpg";
import Bg38 from "../../data/images/ourwork/electrical/38.jpg";
import Bg39 from "../../data/images/ourwork/electrical/39.jpg";
import Bg40 from "../../data/images/ourwork/electrical/40.jpeg";
import Bg41 from "../../data/images/ourwork/electrical/41.jpg";
import Bg42 from "../../data/images/ourwork/electrical/42.jpg";
import Bg43 from "../../data/images/ourwork/electrical/43.jpg";
import Bg44 from "../../data/images/ourwork/electrical/44.jpg";
import Bg45 from "../../data/images/ourwork/electrical/45.jpg";
import Bg46 from "../../data/images/ourwork/electrical/46.jpg";
import Bg47 from "../../data/images/ourwork/electrical/47.jpg";
import Bg48 from "../../data/images/ourwork/electrical/48.jpg";
import Bg49 from "../../data/images/ourwork/electrical/49.jpg";
import Bg50 from "../../data/images/ourwork/electrical/50.jpeg";
import Bg51 from "../../data/images/ourwork/electrical/51.jpg";
import Bg52 from "../../data/images/ourwork/electrical/52.jpg";
import Bg53 from "../../data/images/ourwork/electrical/53.jpg";
import Bg54 from "../../data/images/ourwork/electrical/54.jpeg";
import Bg55 from "../../data/images/ourwork/electrical/55.jpg";


const Electrik = () => {
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
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35,Bg36,Bg37,Bg38,Bg39,Bg40,Bg41,Bg42,Bg43,Bg44,Bg45,
    ,Bg46,Bg47,Bg48,Bg49,Bg50,Bg51,Bg52,Bg53,Bg54,Bg55][newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + 35) % 5; // 5 is the total number of images
    setSelectedImage([Bg1, Bg2, Bg3, Bg4, Bg5,Bg6,Bg7,Bg8,Bg9,Bg10,Bg11,Bg12,Bg13,Bg14,Bg15,Bg16,Bg17,Bg18,Bg19,Bg20,
    Bg21,Bg22,Bg23,Bg24,Bg25,Bg26,Bg27,Bg28,Bg29,Bg30,Bg31,Bg32,Bg33,Bg34,Bg35,Bg36,Bg37,Bg38,Bg39,Bg40,Bg41,Bg42,Bg43,Bg44,Bg45,
    ,Bg46,Bg47,Bg48,Bg49,Bg50,Bg51,Bg52,Bg53,Bg54,Bg55][newIndex]);
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
          { src: Bg40, alt: "Image 40" },
          { src: Bg41, alt: "Image 41" },
          { src: Bg42, alt: "Image 42" },
          { src: Bg43, alt: "Image 43" },
          { src: Bg44, alt: "Image 44" },
          { src: Bg45, alt: "Image 45" },
          { src: Bg46, alt: "Image 46" },
          { src: Bg47, alt: "Image 47" },
          { src: Bg48, alt: "Image 48" },
          { src: Bg49, alt: "Image 49" },
          { src: Bg50, alt: "Image 50" },
          { src: Bg51, alt: "Image 51" },
          { src: Bg52, alt: "Image 52" },
          { src: Bg53, alt: "Image 53" },
          { src: Bg54, alt: "Image 54" },
          { src: Bg55, alt: "Image 55" },
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
export default Electrik;
