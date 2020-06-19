import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTADOS</Typography>
                        <Typography variant="h5">DADO REAL</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body">Numero de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECUPERADS</Typography>
                        <Typography variant="h5">DADO REAL</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body">Numero de casos recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>MORTES</Typography>
                        <Typography variant="h5">DADO REAL</Typography>
                        <Typography color="textSecondary">DATA REAL</Typography>
                        <Typography variant="body">Numero de casos de morte por COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;