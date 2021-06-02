import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Popup, Form} from '../styles/ConactFormStyles';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
const ContactForm = ({ contactOpen, toggleContactForm }) =>{
    const classes = useStyles();
    if (!contactOpen) return null;
    return ReactDOM.createPortal(
        <>
        {/* // overlay name change for popup */}
        <Popup onClick={toggleContactForm} />
            <Form >
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required id="standard-required" label="Name" defaultValue="" />
                    <TextField required id="standard-required" label="Email Address" defaultValue="" />
                    <TextField required id="standard-multiline-static" label="Message" multiline rows={4} defaultValue="" />
                    <Button onClick={toggleContactForm} primary="true">Send</Button>
                </form>  
            </Form>
            </>,
        document.querySelector('#portal')
    )
}

export default ContactForm;