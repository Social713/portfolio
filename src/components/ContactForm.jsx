import React from 'react';
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
      
const ContactForm = ({contact, contactToggle}) =>{
        const classes = useStyles();
    return (
        <Popup contact={contact} contactToggle={contactToggle}>
            <Form contactToggle={contactToggle}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required id="standard-required" label="Name" defaultValue="" />
                    <TextField required id="standard-required" label="Email Address" defaultValue="" />
                    <TextField required id="standard-multiline-static" label="Message" multiline rows={4} defaultValue="" />
                    <Button submit primary="true">Send</Button>
                </form>  
            </Form>
        </Popup>
    )
}


export default ContactForm;