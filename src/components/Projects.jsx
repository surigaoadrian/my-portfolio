import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import eapaThumbnail from "../assets/eapaThumbnail.png";
import ramsThumbnail from "../assets/ramsThumbnail.png";
import econcreteThumbnail from "../assets/econcreteThumbnail.png";
import eapaImgs from "../dataImgs/eapaImgs.js";
import ramsImgs from "../dataImgs/ramsImgs.js";
import ModalImages from "../components/ModalImages";

function Projects() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [imageSet, setImageSet] = useState([]);

  const handleClickedImg = (set, index) => {
    setImageSet(set);
    setCurrentIndex(index);
    setClickedImg(set[index].img);
  };

  const handleCloseModal = () => {
    setClickedImg(null);
  };

  const handleNextImage = () => {
    if (currentIndex < imageSet.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setClickedImg(imageSet[currentIndex + 1].img);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setClickedImg(imageSet[currentIndex - 1].img);
    }
  };

  return (
    <section
      id="projects"
      style={{
        //backgroundColor: "tomato",
        minHeight: "90vh",
        marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //backgroundColor: "lightblue",
          minHeight: "90vh",
          width: { xs: "100%", sm: "95%", md: "85%", lg: "82%" },
          flexDirection: { xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          //paddingTop: "30px",
        }}
      >
        {/** Header */}
        <Box
          sx={{
            minHeight: "10vh",
            width: "100%",
            marginTop: { xs: "20px", sm: "0px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2em", sm: "3em", md: "3.5em", lg: "4.0em" },
              fontWeight: 800,
              lineHeight: 1,
              width: { xs: "25%", sm: "40%", md: "40%", lg: "30%" },
              color: "#A6BBCC",
              marginBottom: { xs: "15px", sm: "0px" },
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            projects
          </Typography>
          <Box
            sx={{
              minHeight: "4px",
              width: { xs: "90%", sm: "70%", md: "70%", lg: "90%" },
              backgroundColor: "#A6BBCC",
            }}
          ></Box>
        </Box>

        {/** Project summary */}
        <Box
          sx={{
            minHeight: "30vh",
            width: "80%",
            margin: "auto",
            marginTop: { xs: "20px", sm: "30px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1em",
                sm: "1em",
                md: "1em",
                lg: "1em",
              },
              fontWeight: 300,
              lineHeight: 2.5,
            }}
          >
            I have worked on several web development projects, including local
            systems deployed at Cebu Institute of Technology - University
            (CITU). The Repair Assets Maintenance System (RAMS) allows faculty
            and staff to manage repair requests efficiently, while the Expanded
            Administrative Employee Performance Assessment (e-AEPA) streamlines
            employee evaluations. Both were built using React.js and Spring Boot
            and are actively used within the university. Additionally, I created
            a responsive landing page for EConcreteBlocks, a construction
            materials store, using WordPress and Elementor, ensuring seamless
            functionality across devices. These projects showcase my ability to
            build practical and user-friendly solutions.
          </Typography>
        </Box>

        {/** image gallery */}
        <Box
          sx={{
            minHeight: "30vh",
            width: "100%",
            margin: "auto",
            marginTop: { xs: "20px", sm: "20px" },
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            //backgroundColor: "tomato",
          }}
        >
          <ImageList
            sx={{
              width: { xs: "75%", sm: "100%" },
              height: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              overflowX: { xs: "visible", md: "auto" },
              gap: 2,
              //backgroundColor: "yellow",
              overflowX: "hidden",
            }}
            cols={3}
          >
            <ImageListItem
              sx={{
                width: { xs: "100%", sm: "100%", md: "calc(33.33% - 16px)" },
                marginBottom: { xs: "16px", md: 0 },
                margin: "6px",
                cursor: "pointer",
              }}
            >
              <a
                href="https://econcreteblocks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  srcSet={`${econcreteThumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${econcreteThumbnail}?w=248&fit=crop&auto=format`}
                  alt="econcrete-blocks"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <ImageListItemBar
                  sx={{ cursor: "pointer" }}
                  title="Econcrete Blocks"
                  //subtitle="Image 2 Subtitle"
                  actionIcon={
                    <IconButton
                      sx={{
                        color: "rgba(255, 255, 255, 0.54)",
                      }}
                      aria-label="info about Image 2"
                    />
                  }
                />
              </a>
            </ImageListItem>

            <ImageListItem
              sx={{
                width: { xs: "100%", sm: "100%", md: "calc(33.33% - 16px)" },
                marginBottom: { xs: "16px", md: 0 },
                margin: "6px",
              }}
              onClick={() => handleClickedImg(ramsImgs, 0)}
            >
              <img
                srcSet={`${ramsThumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${ramsThumbnail}?w=248&fit=crop&auto=format`}
                alt="Image 2"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
              />

              <ImageListItemBar
                sx={{ cursor: "pointer" }}
                title="CITU: RAMS"
                actionIcon={
                  <IconButton
                    sx={{
                      color: "rgba(255, 255, 255, 0.54)",
                    }}
                    aria-label="info about CITU: RAMS"
                  />
                }
              />
            </ImageListItem>

            <ImageListItem
              sx={{
                width: { xs: "100%", sm: "100%", md: "calc(33.33% - 16px)" },
                marginBottom: { xs: "16px", md: 0 },
                margin: "6px",
              }}
              onClick={() => handleClickedImg(eapaImgs, 0)}
            >
              <img
                srcSet={`${eapaThumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${eapaThumbnail}?w=248&fit=crop&auto=format`}
                alt="Image 1"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
              />

              <ImageListItemBar
                sx={{ cursor: "pointer" }}
                title="CITU: E-AEPA"
                //subtitle="Image 1 Subtitle"
                actionIcon={
                  <IconButton
                    sx={{
                      color: "rgba(255, 255, 255, 0.54)",
                    }}
                    aria-label="info about CITU: E-AEPA"
                  />
                }
              />
            </ImageListItem>
          </ImageList>
        </Box>

        {clickedImg && (
          <ModalImages
            clickedImg={clickedImg}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </Box>
    </section>
  );
}

export default Projects;
