import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import html5Logo from "../assets/html5Logo.png";
import css3Logo from "../assets/css3Logo.png";
import reactJsLogo from "../assets/reactJsLogo.png";
import springBootLogo from "../assets/springBootLogo.png";
import mySqlLogo from "../assets/mySqlLogo.png";
import wordpressLogo from "../assets/wordpressLogo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Work() {
  return (
    <div
      style={{
        //backgroundColor: "yellow",
        minHeight: "80vh",
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //backgroundColor: "lightblue",
          minHeight: "80vh",
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
              width: "20%",
              width: { xs: "25%", sm: "30%", md: "30%", lg: "20%" },
              color: "#A6BBCC",
              marginBottom: { xs: "15px", sm: "0px" },
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            work
          </Typography>
          <Box
            sx={{
              minHeight: "4px",
              width: { xs: "90%", sm: "70%", md: "70%", lg: "80%" },
              backgroundColor: "#A6BBCC",
            }}
          ></Box>
        </Box>

        {/** About me */}
        <Box
          sx={{
            minHeight: "30vh",
            width: "80%",
            margin: "auto",
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
              fontSize: {
                xs: "1.125em",
                sm: "1.125em",
                md: "1.25em",
                lg: "1.125em",
              },
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            I'm Adrian John P. Surigao, a 24-year-old IT graduate from Cebu
            Institute of Technology University. I'm proficient in HTML, CSS,
            JavaScript, React, Spring Boot, MySQL, and WordPress. My passion
            lies in building web applications and continuously improving my
            programming skills. I was honored as a Dean’s Lister in 2019 and won
            the Techvocacy 2023 On-the-Spot Website Making Competition.
          </Typography>
        </Box>

        {/** tech stack */}
        <Box
          sx={{
            minHeight: "30vh",
            width: { xs: "80%", sm: "90%" },
            margin: "auto",
            marginTop: { xs: "20px", sm: "0px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div
            className="slider-container"
            style={{
              width: "100%",
            }}
          >
            <Slider {...settings}>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={html5Logo} alt="html-5-logo" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={css3Logo} alt="css-3-logo" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={reactJsLogo} alt="spring-boot-logo" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={springBootLogo} alt="spring-boot-logo" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={mySqlLogo} alt="my-sql-logo" />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={wordpressLogo} alt="wordpress-logo" />
                </div>
              </div>
            </Slider>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Work;
