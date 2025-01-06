import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";

const drawerWidth = 240;
const navItems = ["About", "Projects", "Contact"];

function NavBar(props) {
  const { window: containerWindow } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    containerWindow !== undefined
      ? () => containerWindow().document.body
      : undefined;

  const handleScroll = () => {
    if (globalThis.window.scrollY > 300) {
      // Use global window object explicitly
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    globalThis.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    globalThis.window.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Drawer component
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={() => console.log(`Clicked on ${item.toLowerCase()}`)}
              style={{ width: "100%" }}
            >
              <ListItemButton
                sx={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ListItemText primary={item} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#221F1F",
          color: "white",
          width: { xs: "100%", sm: "100%", md: "90%", lg: "85%" },
          position: { xs: "fixed", sm: "static" },
          margin: "auto",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => console.log(`Clicked on ${item.toLowerCase()}`)}
              >
                <Button
                  key={item}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {showButton && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: { xs: 20, sm: 25 },
            right: 35,
            backgroundColor: "#A6BBCC",
            color: "#221F1F",
            "&:hover": {
              backgroundColor: "#7f8fa6",
            },
            zIndex: 1,
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: "25px" }} />
        </IconButton>
      )}
    </Box>
  );
}

export default NavBar;
