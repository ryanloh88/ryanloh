import React ,{useRef} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik'


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#fff'),
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#000',
    },
  }));
const notifyS = () => toast("Your email has been sent and I will get back to you asap!");
const notifyF = () => toast("So sorry but there seems to be an error sending this email, perhaps you could email me at ryanloh29@gmail.com");

function Contact(){
    const form = useRef()
    function sendEmail(values) {
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, values, process.env.REACT_APP_USER_ID)
          .then(function(response) {
            notifyS()
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            notifyF()
            console.log('FAILED...', error);
         });
      }
    const validate = values => {
      const errors = {}
      if (!values.name){
        errors.name = "Required"
      }
      if (!values.email){
        errors.email = 'Required'
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
      }
      return errors
    }

    const formik = useFormik({
          initialValues: {
            name:'',
             email: '',
             subject:'',
             message:''
           },
           validate,
           onSubmit: values => {
             sendEmail(values)
             formik.resetForm({
              name:'',
              email: '',
              subject:'',
              message:''
             })
           },
         });
    

    return (
        <div id="contact-section">
        <h1  className="contactTitle">
            Get in touch
        </h1>
        <p className = "contactDesc">I'm always on the lookout for new opportunities, so if you think I can be valuable to you, send me a message and we can talk about it!</p>
        <form ref={form} onSubmit={formik.handleSubmit}>
        <div className = "textFieldDiv">
        <Grid container rowSpacing={3} columnSpacing ={2}  >
        <Grid item xs={6}>
        <TextField id="name" name="name" type = "text" onBlur={formik.handleBlur} error = {formik.touched.name && formik.errors.name ? true:false} helperText={formik.touched.name && formik.errors.name ? formik.errors.name:false} onChange={formik.handleChange}  value={formik.values.name} className = "textField" label="Name" ></TextField>
        </Grid>
        <Grid item xs={6}>
        <TextField id="email" name="email" type="email" onBlur={formik.handleBlur} error = {formik.touched.email && formik.errors.email? true:false} helperText={formik.touched.email && formik.errors.email ? formik.errors.email:false} onChange={formik.handleChange} value={formik.values.email} className = "textField"  label="Email" ></TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField autoComplete="off" id="subject" type="text" onChange={formik.handleChange} value={formik.values.subject} className = "textField subject" label="Subject" name ="subject"></TextField>
        </Grid>
        <Grid item xs={12}>
        <TextField id="message" type="text" onChange={formik.handleChange} value={formik.values.message} className = "textField "  label="Message" name="message"  multiline rows={4}></TextField>
        </Grid>
        </Grid>
        </div>

        <ColorButton variant="outlined" type="submit" value= "send" ><p className="submit">Submit</p></ColorButton>
        <ToastContainer autoClose={false}></ToastContainer>
        
        </form>
        </div>

    )
}
export default Contact