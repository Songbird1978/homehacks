import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';


function Home() {
    return (
        <div>
            <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Grid item ></Grid>
                <Grid container className="gridItem" >
                    <Grid item xs={12} md={6} lg={3}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}>2</Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>

                <Grid container className="gridItem" >
                    <Grid item xs={12} md={6} lg={3}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}>2</Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>

                <Grid container className="gridItem" >
                    <Grid item xs={12} md={6} lg={3}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}>2</Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Home;