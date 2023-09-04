import { MdDeleteForever } from "react-icons/md";
import { Grid, Container } from '@mui/material';
import styles from "./style";


function Table({ tableData, deleteItem }) {
    console.log(tableData);
    //function for getting sum of rate, price, qty
    function getTotal(tableData, sumFor) {
        let total = 0;
        for (let i = 0; i < tableData.length; i++) {
            total += parseInt(tableData[i][sumFor]);
        }
        return total;
    }


    return (
        <Container maxWidth="md">
            <Grid container spacing={2} >
                {/* <h1>hi</h1> */}
                <Grid item xs={12} md={12}  >
                    <table className="table">
                        {(tableData.length !== 0) ?
                            <thead style={styles.TableHead}>
                                <tr >
                                    <th>Sr No</th>
                                    <th>Item Name</th>
                                    <th>Item Description</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead> : ''}
                        <tbody>

                            {tableData.map((data, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.itemName}</td>
                                        <td>{data.itemDescription}</td>
                                        <td>{data.qty}</td>
                                        <td >{data.rate}</td>
                                        <td>{data.price}</td>
                                        <td>< MdDeleteForever size={30} color="#65A765" onClick={deleteItem} /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tbody></tbody>
                        {(tableData.length !== 0) ?
                            <tbody>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td>{getTotal(tableData, 'qty')}</td>
                                    <td >{getTotal(tableData, 'rate')}</td>
                                    <td>{getTotal(tableData, 'price')}</td>
                                    <td></td>
                                </tr>
                            </tbody> : ""
                        }

                    </table>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Table;
