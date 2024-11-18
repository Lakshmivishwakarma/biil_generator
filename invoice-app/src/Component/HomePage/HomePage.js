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
                        <Typography variant="h3" > Billing Software for Small Businesses</Typography>
                        <Typography variant="h6" color="secondary.light" > Manage your business professionally with this. Using the software for your billing, inventory & accounting needs.</Typography>
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
                    <img src="http://localhost:3000/assets/images/invoice-presentation.png" alt="" height={isSmallScreen ? "200px" : "400px"} style={styles.Image}>
                    </img>
                </Grid>
            </Grid>
            <Typography variant="h3" style={styles.Features}>Features of GST Billing and Accounting Software</Typography>
            <Grid container spacing={0} mt={5} mb={3}>
                <Grid item xs={12} md={12} style={styles.GridTitle}>
                    <div style={styles.TitleContainer}>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><BsFillSendFill color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        GST billing
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><VscNotebook color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        Track previous bills
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ minWidth: 475 }} variant="outlined" style={styles.CardContainer}>
                            <CardActionArea>
                                <CardContent>
                                    <span style={styles.Icon} ><MdOutlineColorLens color="#00a39f" />  </span>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }} >
                                        download bill
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    
                    </div>
                </Grid>

            </Grid>


        </Container>
    )
}
export default Homepage;
