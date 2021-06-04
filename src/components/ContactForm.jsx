import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Overlay, Form } from "../styles/ConactFormStyles";
import { BtnWrap } from "../styles/DropdownMenuStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

const ContactForm = ({ contactOpen, toggleContactForm }) => {
  const classes = useStyles();

  // multiple state handler
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  //emailjs for client-side email
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_4yk9ra8', 'template_aey6lk4', event.target, 'user_gojDcSJTZJZzGKye9vxrB'
      )
      .then(
        (result) => {
          console.log("Success", result.text);
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
      setState('')
    toggleContactForm();
  }

  if (!contactOpen) return null;
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={toggleContactForm} />
      <Form>
        <form
          
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={sendEmail}
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="Name"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Your Email Address"
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Subject"
              name="subject"
              type="text"
              value={state.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-multiline-static"
              label="Message"
              name="message"
              type="text"
              multiline
              rows={4}
              value={state.message}
              onChange={handleChange}
            />
          </div>
          <BtnWrap style={{ marginTop: "25px" }}>
            <button type={"submit"}>
              <p>Send</p>
            </button>
          </BtnWrap>
        </form>
      </Form>
    </>,
    document.querySelector("#portal")
  );
};

export default ContactForm;
