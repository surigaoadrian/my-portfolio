import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShowCasePicture from "../assets/2x2BNWBL.jpg";

function ShowCase() {
  return (
    <div
      style={{
        //backgroundColor: "yellow",
        minHeight: "55vh",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //backgroundColor: "lightblue",
          minHeight: "55vh",
          width: { xs: "100%", sm: "95%", md: "85%", lg: "82%" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          //paddingTop: "30px",
        }}
      >
        {/** first div */}
        <Box
          sx={{
            minHeight: "30vh",
            width: { xs: "100%", sm: "95%", md: "85%", lg: "82%" },
            marginTop: { xs: "20px", sm: "0px" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "start", md: "start", lg: "start" },
            //backgroundColor: "red",
            justifyContent: "center",
            color: "white",
            order: { xs: 2, sm: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.125em",
                sm: "1.125em",
                md: "1.25em",
                lg: "1.25em",
              },
              paddingBottom: "10px",
            }}
          >
            Hello, I'm Adi
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.5em", sm: "3em", md: "4.5em", lg: "5.5em" },
              fontWeight: 800,
              lineHeight: 1,
              color: "#A6BBCC",
            }}
          >
            Web Developer
          </Typography>
          <Button
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
              fontSize: {
                xs: "1.125em",
                sm: "1.125em",
                md: "1.25em",
                lg: "1.25em",
              },
              color: "white",
              textTransform: "none",
              borderRadius: 0,
              borderBottom: "4px solid #A6BBCC",
            }}
            variant="text"
          >
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="https://github.com/surigaoadrian"
              target="_blank"
            >
              View Github
            </a>
          </Button>
        </Box>

        {/** second div */}
        <Box
          sx={{
            minHeight: { xs: "35vh", sm: "50vh" },
            //backgroundColor: "lightblue",
            overflow: "hidden",
            width: { xs: "65%", sm: "95%", md: "85%", lg: "82%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            order: { xs: 1, sm: 2 },
            marginTop: { xs: "30px", sm: "0px" },
          }}
        >
          <Box sx={{ height: { xs: "35vh", sm: "50vh" } }}>
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "8%",
              }}
              src={ShowCasePicture}
              alt="profile-picture"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ShowCase;
