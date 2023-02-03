import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from '@mui/material';
import './MyForm.css'
import canvas from 'canvas';
import bg from '../assets/images/background.jpg';

const generateImage = (image, first,last,company, avatar, email, phone) => {
  const canvasElement = canvas.createCanvas(1000, 500);
  const ctx = canvasElement.getContext('2d');
  ctx.drawImage(image, 0, 0, canvasElement.width, canvasElement.height);
  
  ctx.font = '32px "Roboto", sans-serif';
  ctx.fillStyle = "#ffffff";

  const fullname = first + " " + last;
  
  ctx.fillText(fullname, 92, 230);
  ctx.font = '24px "Roboto", sans-serif';
  ctx.fillStyle = "#999999";
  company = "Company: " + company;
  ctx.fillText(company, 92, 262);

  ctx.font = '16px "Roboto", sans-serif';
  ctx.fillStyle = "#999999";
  ctx.fillText(email, 135, 311);
  ctx.fillText(phone, 135, 356);


  ctx.drawImage(avatar, 610, 150, 200, 200);
  const dataURL = canvasElement.toDataURL();
  return dataURL;
};

function MyForm() {
  const [dataURL, setDataURL] = useState(null);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [company, setCompany] = useState('');
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const img = new window.Image();
    img.src = bg;
    img.onload = () => setImage(img);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const imageDataURL = generateImage(image,first,last,company,avatar, email, phone);
    setDataURL(imageDataURL);
    navigate('/generate', {
      state:{
        dataG: imageDataURL,
      }
    });
  };

  const handleFileInput = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img2 = new Image();
      img2.src = reader.result;
      img2.onload = () => setAvatar(img2);
    }
  };

  return (
    <div className="formHolder">
      
      <Form action="../generate" onSubmit={handleSubmit}>
        <h1>Fill out the form</h1>
        <Grid container spacing={2} columns={1}>
          <Grid item xs={4}>
            <TextField className="inputT" value={first} onChange={(event) => setFirst(event.target.value)} label="First Name" variant="filled" name="first" />
          </Grid>
          <Grid item xs={4}>
            <TextField className="inputT" value={last} onChange={(event) => setLast(event.target.value)} label="Last Name" variant="filled" />
          </Grid>
          <Grid item xs={4}>
            <TextField className="inputT" value={company} onChange={(event) => setCompany(event.target.value)} label="Company name" variant="filled" />
          </Grid>
          <Grid item xs={4}>
            <TextField className="inputT" value={email} onChange={(event) => setEmail(event.target.value)} label="E-mail" variant="filled" />
          </Grid>
          <Grid item xs={4}>
            <TextField className="inputT" value={phone} onChange={(event) => setPhone(event.target.value)} label="Phone number" variant="filled" />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="info"
              className='genBtn'>
              <input type="file" accept="image/png, image/jpeg" onChange={handleFileInput} />
            </Button>
          
          </Grid>
          <Grid item xs={4}>
            <Button
                type="submit"
                variant="contained"
                color="error"
                className='genBtn'      
            >
              Generate
            </Button>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default MyForm;