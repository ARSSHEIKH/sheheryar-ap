import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../../App.css"


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "0.1rem"
    }
}));

export default function AllOrders() {
    const classes = useStyles();
    return (

        <Grid container item xs={12} spacing={1}>
            {/* Title */}
            <Grid item xs={12} className={`${classes.root} dashboard-text`}>
                All Orders
            </Grid>

            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>

            {/* Data */}
            <Grid item xs={12} className={`${classes.root} dashboard-text`}>
                40
            </Grid>
        </Grid>


    );
}
