import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "./style";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/material';
import { Button } from '@mui/material';

function BillPreview({ handleClick, handlePrint, billFrom, billTo, notes, itemList, printPdf }) {

    console.log(itemList);
    let totalPrice = 0;

    for (let i = 0; i < itemList.length; i++) {
        totalPrice += itemList[i].price;
    }
    let currentDate = new Date().toJSON().slice(0, 10);

    return (
        <Container maxWidth="md" >
            <Card variant="outlined" style={styles.container}>
                <Grid container spacing={1} style={styles.Gridcontainer}>
                    <Grid item sm={7} xs={12}>
                        <Typography component="h6" variant='h6'>{billTo.clientName}</Typography>
                        <Typography component="p" variant='p'>{billTo.clientEmail}</Typography>
                        <Typography component="p" variant='p'>{billTo.clientContact}</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography component="h6" variant='h6'> Invoice- xxxxx</Typography>
                        <Typography component="p" variant='p'> Date:- {currentDate}</Typography>
                        <Typography component="p" variant='p'></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={styles.container}>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>BILL TO:-</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorName}</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorContact}</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorEmail}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>SHIP TO:-</Typography>
                        <Typography component="p" variant='p'> {billFrom.vendorName}</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorAddress}</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorCityPincode}</Typography>
                        <Typography component="p" variant='p'>{billFrom.vendorState}</Typography>
                        <Typography component="p" variant='p'>Country :- India</Typography>
                    </Grid>
                </Grid>
            </Card>
            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={12} md={12}  >
                            <table className="table">
                                {(itemList.length !== 0) ?
                                    <thead style={styles.TableHead}>
                                        <tr >
                                            <th>Sr No</th>
                                            <th>Item Name</th>
                                            <th>Item Description</th>
                                            <th>Qty</th>
                                            <th>Rate</th>
                                            <th>Price</th>

                                        </tr>
                                    </thead> : ''}
                                <tbody>

                                    {itemList.map((data, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data.itemName}</td>
                                                <td>{data.itemDescription}</td>
                                                <td>{data.qty}</td>
                                                <td >{data.rate}</td>
                                                <td>{data.price}</td>

                                            </tr>
                                        );
                                    })}
                                </tbody>

                                {(itemList.length !== 0) ?
                                    <tbody>
                                        <tr>
                                            <td>Total</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td ></td>
                                            <td>{totalPrice}</td>
                                            <td></td>
                                        </tr>
                                    </tbody> : ""
                                }
                            </table>
                        </Grid>
                    </Grid>


                </CardContent>
            </Card>

            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    <Typography component="p" variant='p'>{notes}</Typography>
                </CardContent>
            </Card>
            <Button variant="contained" onClick={handlePrint}>Save</Button>
            <Button variant="contained" onClick={printPdf}>print</Button>
            <Button variant="contained" style={styles.Button} onClick={handleClick}>Cancel</Button>
        </Container>
    )
}

export default BillPreview;