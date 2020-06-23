import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Carregando...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3}className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTADOS</Typography>
                        <Typography variant="h5">{
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography gutterBottom color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="textSecondary">Número de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECUPERADOS</Typography>
                        <Typography variant="h5">{
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography gutterBottom color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="textSecondary">Número de casos recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>MORTES</Typography>
                        <Typography variant="h5">{
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />}
                        </Typography>
                        <Typography gutterBottom color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="textSecondary">Número de casos de morte por COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;