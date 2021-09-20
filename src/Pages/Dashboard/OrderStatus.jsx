import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "../../App.css"


export default function OrderStatus() {

    return (

        <Grid container item xs={12} spacing={5}>
            {/* Title */}
            <Grid item xs={6} className="dashboard-text">
                Active Orders
            </Grid>
            <Grid item xs={6} className="dashboard-text">
                Completed Orders
            </Grid>

            {/* Data */}
            <Grid item xs={6} className="dashboard-text">
                40
            </Grid>
            <Grid item xs={6} className="dashboard-text">
                45
            </Grid>
        </Grid>


    );
}
