import styles from "./style";
import { Grid, Typography, Button, Container, useMediaQuery, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BsFillSendFill } from "react-icons/bs";
import { BiLaptop } from "react-icons/bi";
import { VscNotebook } from "react-icons/vsc";
import { MdOutlineColorLens } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const Homepage = () => {

    const isSmallScreen = useMediaQuery('(max-width: 500px)');
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate("/signup")
    }

    return (
        <Container maxWidth="lg" >
            <Grid container spacing={0} mt={10} mb={3}>
                <Grid item xs={12} md={6} style={styles.GridTitle}>
                    <div style={styles.TitleContainer}>
                        <Typography variant="h3" > Billing Software in India for Small Businesses</Typography>
                        <Typography variant="h6" color="secondary.light" > Manage your business professionally with Vyapar. Using the best software for your billing, inventory & accounting needs. Be a part of 1 Cr+ SMEs in India who trust Vyapar.</Typography>
                        <Button
                            color="success"
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={clickHandler}
                        >
                            Sign Up here ........
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <img src="http://localhost:3000/assets/images/invoice-presentation.png" alt="" height={isSmallScreen ? "300px" : "500px"} style={styles.Image}>
                    </img>
                </Grid>
            </Grid>
            <Typography variant="h3" style={styles.Features}>Features of GST Billing and Accounting Software</Typography>
            <Grid container spacing={0} mt={5} mb={3}>
                <Grid item xs={12} md={6} style={styles.GridTitle}>
                    <div style={styles.TitleContainer}>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><BsFillSendFill color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Send Estimate & Quotations
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><VscNotebook color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Track Orders
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><MdOutlineColorLens color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Choose Themes
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><GiNotebook color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Record Expenses
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><BiLaptop color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Bank Accounts
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} mt={5} >
                    <Typography variant="h5"  > Send Estimate & Quotations</Typography>
                    <Typography variant="p" style={styles.featuresData} > Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.</Typography>
                    <Typography variant="p" style={styles.featuresData} >Vyapar billing software provides professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly.</Typography>
                    <Typography variant="p" style={styles.featuresData}>
                        Further, you can convert your estimates and quotations into sale invoices anytime. All you need is the Vyapar software for billing and its done in a few clicks. Vyapar free billing software offers the business a complete option for quickly saving more time getting instant quotes. Using the accounting software, you can manage your business with higher productivity.
                    </Typography>
                    <Typography variant="p" style={styles.featuresData} > The billing app brings a professionalism for your valued customers to attract them back. Choosing advanced Software for GST billing is one of the best investments for your business. Our Billing Software helps simplifies estimates and quotations.</Typography>

                </Grid>
            </Grid>


        </Container>
    )
}
export default Homepage;
