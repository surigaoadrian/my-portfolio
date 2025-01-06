import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

function ContactMe() {
  const form = useRef();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const fromName = formData.get("user_name");
    const fromEmail = formData.get("user_email");
    const messageContent = formData.get("message");

    emailjs
      .sendForm(
        "service_ltx6zpc",
        "template_neery3h",
        form.current,
        "oTS8j79EMB9aTOhtZ",
        {
          from_name: fromName,
          from_email: fromEmail,
          message: messageContent,
        }
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          setMessage("Message sent successfully!");
          setSeverity("success");
          setOpen(true);

          // Clear input fields after submission
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          console.log("Error sending message: ", error.text);
          setMessage(
            "There was an error sending your message. Please try again."
          );
          setSeverity("error");
          setOpen(true);
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        //backgroundColor: "tomato",
        minHeight: "70vh",
        marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //backgroundColor: "lightblue",
          minHeight: "70vh",
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
            contact
          </Typography>
          <Box
            sx={{
              minHeight: "4px",
              width: { xs: "90%", sm: "70%", md: "70%", lg: "90%" },
              backgroundColor: "#A6BBCC",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            minHeight: "10vh",
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
            Feel free to reach out if you'd like to collaborate, discuss a
            project, or just say hi! I'm always open to new opportunities and
            conversations. Let's connect and create something great together.
          </Typography>
        </Box>

        {/** contact form */}
        <Box
          sx={{
            minHeight: "40vh",
            width: "80%",
            margin: "auto",
            //marginTop: { xs: "20px", sm: "30px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              minHeight: "40vh",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              //backgroundColor: "lightblue",
              marginTop: { xs: "20px", sm: "0px" },
            }}
            ref={form}
            onSubmit={sendEmail}
          >
            <TextField
              inputRef={nameRef}
              id="standard-basic"
              label="Name"
              variant="standard"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white !important",
                },
                "& .MuiInputBase-root": {
                  color: "white !important",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInput-underline:hover:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white !important",
                },
                width: "100%",
              }}
              name="from_name"
            />

            <TextField
              inputRef={emailRef}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="from_email"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white !important",
                },
                "& .MuiInputBase-root": {
                  color: "white !important",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInput-underline:hover:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white !important",
                },
                width: "100%",
              }}
            />

            <TextField
              inputRef={messageRef}
              id="standard-basic"
              label="Message"
              variant="standard"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white !important",
                },
                "& .MuiInputBase-root": {
                  color: "white !important",
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "1px solid white !important",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInput-underline:hover:after": {
                  borderBottom: "2px solid white !important",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white !important",
                },
                width: "100%",
              }}
              name="message"
            />

            <Button
              type="submit"
              sx={{
                marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                fontSize: {
                  xs: "1em",
                  sm: "1em",
                  md: "1em",
                  lg: "1em",
                },
                color: "white",
                textTransform: "none",
                borderRadius: 0,
                borderBottom: "4px solid #A6BBCC",
              }}
              variant="text"
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default ContactMe;
