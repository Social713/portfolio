import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Overlay, Form } from "../styles/ConactFormStyles";
import Button from "./Button";
import { BtnWrap } from '../styles/DropdownMenuStyles';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ContactForm = ({ contactOpen, toggleContactForm }) => {
  const classes = useStyles();
  if (!contactOpen) return null;
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={toggleContactForm} />
      <Form>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Name"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Email Address"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              required
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue=""
            />
          </div>
          <BtnWrap>
            <Button onClick={toggleContactForm} primary="true" type="submit">
              Send
            </Button>
          </BtnWrap>
        </form>
      </Form>
    </>,
    document.querySelector("#portal")
  );
};

export default ContactForm;
