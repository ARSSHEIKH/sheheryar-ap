import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../../App.css"

const useStyles = makeStyles((theme) => ({

}));

export default function Report() {
    const classes = useStyles();

    return (
        <Grid container item xs={12} spacing={5}>
            {/* Title */}
            <Grid item xs={4} className="dashboard-text">
                <span>Sales </span>
            </Grid>
            <Grid item xs={4} className="dashboard-text">
                <span>Tax </span>
            </Grid>
            <Grid item xs={4} className="dashboard-text">
                <span>Earnings </span>
            </Grid>

            {/* Data */}
            <Grid item xs={4} className="dashboard-text">
                <span>840 SR </span>
            </Grid>
            <Grid item xs={4} className="dashboard-text">
                <span>126 SR </span>
            </Grid>
            <Grid item xs={4} style={{ color: "#35d591" }} className="dashboard-text">
                <span>714 SR </span>
            </Grid>
        </Grid>


    );
}
