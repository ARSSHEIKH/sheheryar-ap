
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Report from "./Report";
import OrderStatus from "./OrderStatus";
import AllOrders from "./AllOrders";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
        borderRadius: "0.5rem",
    },
    dvTop:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dvBottom:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topCharts: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderRadius: "1rem",
        flex:3,
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    },
    topCharts3: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        borderRadius: "1rem",
        flex:1,
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    },
    ordersChart: {
        backgroundColor: "#f6f6f6",
        margin: "1rem",
        display: "flex",
        flex:3,
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        borderRadius: "1rem",
        boxShadow: "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)"
    },
    completedOrders: {
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderRadius: "1rem"

    },
    completedOrdersData: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "0 1.7rem"

    },
    reports: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    },
    ordersTitle: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"

    },
    orderStatus: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    },
    dataItems: {
        marginTop: "2rem"
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className="container-xxl">

            <div className={classes.dvTop}>
                <div className={`${classes.topCharts}`}>
                    <div className={classes.reports}>
                        <div >Sales</div>
                        <div className={classes.dataItems}>800 SR</div>
                    </div>
                    <div className={classes.reports}>
                        <div>Tax</div>
                        <div className={classes.dataItems}>800 SR</div>
                    </div>
                    <div className={classes.reports}>
                        <div>Earnings</div>
                        <div className={classes.dataItems} style={{ color: "#37dd97" }}>800 SR</div>
                    </div>
                </div>

                <div className={`${classes.topCharts}`}>
                    <div className={classes.orderStatus}>
                        <div >Active Orders</div>
                        <div className={classes.dataItems}>800</div>
                    </div>
                    <div className={classes.orderStatus}>
                        <div>Completed Orders</div>
                        <div className={classes.dataItems}>800</div>
                    </div>
                </div>

                <div className={`${classes.topCharts3}`}>
                    <div className={classes.reports}>
                        <div>All Orders</div>
                        <div className={classes.dataItems}>800</div>
                    </div>
                </div>
            </div>

            <div className={classes.dvBottom}>
                <div className={`${classes.ordersChart}`}>

                    <div className={`${classes.reports}`}>
                        <div>Active Orders</div>
                        <hr />
                        <div className={`${classes.completedOrders}`}>
                            <div className={classes.ordersTitle}>
                                <div>Order</div>
                            </div>
                            <div className={classes.ordersTitle}>
                                <div>Status</div>
                            </div>
                            <div className={classes.ordersTitle}>
                                <div>Time</div>
                            </div>

                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <div className={`${classes.completedOrdersData}`}>
                                        <div className={classes.ordersTitle}>
                                            <div>Order</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Status</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Time</div>
                                        </div>
                                    </div>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <div className={`${classes.completedOrdersData}`}>
                                        <div className={classes.ordersTitle}>
                                            <div>Order</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Status</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Time</div>
                                        </div>
                                    </div>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <div className={`${classes.completedOrdersData}`}>
                                        <div className={classes.ordersTitle}>
                                            <div>Order</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Status</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Time</div>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className={`${classes.ordersChart}`}>

                    <div className={`${classes.reports}`}>
                        <div >Completed Orders</div>
                        <hr />

                        <div className={`${classes.completedOrders}`}>
                            <div className={classes.ordersTitle}>
                                <div>Order</div>
                            </div>
                            <div className={classes.ordersTitle}>
                                <div>Status</div>
                            </div>
                            <div className={classes.ordersTitle}>
                                <div>Time</div>
                            </div>

                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <div className={`${classes.completedOrdersData}`}>
                                        <div className={classes.ordersTitle}>
                                            <div>Order</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Status</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Time</div>
                                        </div>
                                    </div>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <div className={`${classes.completedOrdersData}`}>
                                        <div className={classes.ordersTitle}>
                                            <div>Order</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Status</div>
                                        </div>
                                        <div className={classes.ordersTitle}>
                                            <div>Time</div>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
Dashboard.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
