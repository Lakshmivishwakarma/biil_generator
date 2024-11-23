import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from "./style";
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useEffect, useState } from 'react';
import Error from '../../Container/ErrorPage/ErrorPage';
import { IoMdEye } from "react-icons/io";
import { FcDownload } from "react-icons/fc";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {api_url} from "../../constants";

export default function ViewBill() {
  const navigate = useNavigate();
  //checking that user is logged In or not
  const loggedInUser = useSelector((state) => state.loggedInReducer);
  let userName = loggedInUser.signIn.name;

  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [openPopup, setOpenPopup] = useState(false); // State to control the popup visibility

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${api_url}viewBillList`);
        setData(response.data);

      } catch (error) {
        console.error(error);
        console.error("something went wrong");
      }
    };

    getData();
  }, []);

  // printing bill pdf from list
  async function printPdf(invoiceNumber) {
    await axios
      .get(`${api_url}generatePdf/${invoiceNumber}`, { responseType: 'blob' })
      .then(response => {
        saveAs(response.data, `${invoiceNumber}.pdf`);

      })
      .catch(error => {
        // Handle any errors
        console.error(error);

      });
  }
  console.log(data);
  // view pdf from list 
  async function handleViewBill(invoiceNumber) {
    console.log(invoiceNumber);
    try {
      const response = await axios.get(`${api_url}viewPdf/${invoiceNumber}`, { responseType: 'blob' });
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      setUrl(fileURL);
      console.log(fileURL);
      setOpenPopup(true);
    } catch (error) {
      console.error(error);

    };
  }

  // create new bill
  function createBillHandler() {
    navigate("/bills/create")
  }

  return (
    <div>
      {userName ?
        (<Container style={styles.Container}>

          <div style={styles.Button} >
            <Button variant="outlined" color="success" onClick={createBillHandler} > Create New bill <MdAddCircleOutline size={20} color="success" /></Button>
          </div>
          {data.map(item => (

            <Card sx={{ minWidth: 275 }} variant="outlined" style={styles.CardContainer}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={5}>
                  <CardContent>
                    <Typography variant="h6" component="div" color="secondary.light" sx={{ fontSize: '18px', fontWeight: 'bold' }} >
                      {item.invoiceNumber}
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ fontSize: '22px' }}>
                      Date :-
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                      {item.billDate}
                    </Typography>
                    <Typography>
                      <Typography variant="h6" component="span" sx={{ fontSize: '22px' }} >
                        Name :-
                      </Typography>
                      <Typography variant="h6" component="span" sx={{ fontSize: '20px', fontWeight: 'bold' }} >
                        {item.billTo.clientName}
                      </Typography>
                    </Typography>


                  </CardContent>
                </Grid >

                <Grid item xs={5} md={4} mt={1}>
                  <CardActions>
                    <Typography variant="h6" component="span" sx={{ fontSize: '22px' }} >
                      Bill Amount :-
                    </Typography>
                    <Typography variant="h6" component="span" sx={{ fontSize: '20px', fontWeight: 'bold' }} >
                      {item.totalPrice}
                    </Typography>
                  </CardActions>
                </Grid>

                <Grid item xs={6} md={3} mt={3}>
                  <CardActions>
                    <Button size="small" onClick={() => printPdf(item.invoiceNumber)} ><FcDownload size={23} color="#FFB6C1" title="download" /></Button>
                    <Button size="small" onClick={() => handleViewBill(item.invoiceNumber)}><IoMdEye size={25} color="#00a39f" title="view" /></Button>
                  </CardActions>
                </Grid>
              </Grid >
            </Card>
          ))}

          <Popup open={openPopup} onClose={() => setOpenPopup(false)}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Button variant="outlined" color="secondary" onClick={() => setOpenPopup(false)}>Close</Button>
              <iframe src={url} width="100%" height="600px" title="PDF Viewer" />
            </div>
          </Popup>
        </Container>)
        : (<Error />)}

    </div>
  );
}
