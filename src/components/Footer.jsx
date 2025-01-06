import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import fbLogo from "../assets/fbLogo.png";
import igLogo from "../assets/igLogo.png";
import githubLogo from "../assets/githubLogo.png";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "12vh",
        //backgroundColor: "tomato",
        color: "white",
        width: { xs: "90%", sm: "80%" },

        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "space-between" },
        margin: "auto",
        marginTop: "60px",
      }}
    >
      <Box>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            textTransform: "none",
          }}
        >
          Adrian John Surigao
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: { xs: "30%", sm: "12%" },
          //backgroundColor: "lightblue",
          justifyContent: "space-around",
        }}
      >
        <a href="https://www.facebook.com/surigao.adrian" target="_blank">
          <img src={fbLogo} alt="fb-logo" />
        </a>
        <a href="https://www.instagram.com/adreyanjan/" target="_blank">
          <img src={igLogo} alt="ig-logo" />
        </a>
        <a href="https://github.com/surigaoadrian" target="_blank">
          <img src={githubLogo} alt="github-logo" />
        </a>
      </Box>
    </Box>
  );
}

export default Footer;
