import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ModalImages = ({
  clickedImg,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      disableAutoFocus
      aria-labelledby="modal-image"
      aria-describedby="modal-image-navigation"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: { xs: "30vh", sm: "80vh" },
          //backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={clickedImg}
          alt="modal-image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "8px",
            userSelect: "none",
          }}
        />
        {/* Left Button */}
        <FontAwesomeIcon
          onClick={onPrev}
          disabled={currentIndex === 0}
          icon={faChevronLeft}
          style={{
            position: "absolute",
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2.5em",
            color: "#A6BBCC",
            cursor: "pointer",
          }}
        />

        {/* Right Button */}
        <FontAwesomeIcon
          onClick={onNext}
          disabled={currentIndex === totalImages - 1}
          icon={faChevronRight}
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2.5em",
            color: "#A6BBCC",
            cursor: "pointer",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ModalImages;
