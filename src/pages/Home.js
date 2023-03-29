import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo';

function Home() {
    return (
        <div>
            <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <Logo className="logo"></Logo>

            <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}></Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}><img alt='wash' src="../images/cloud.svg" width={190} height={190} ></img></Grid>
                </Grid>
            <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}></Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>
        
                <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}>1</Grid>
                    <Grid item xs={12} md={6} lg={3}></Grid>
                    <Grid item xs={12} md={6} lg={3}>3</Grid>
                    <Grid item xs={12} md={6} lg={3}>4</Grid>
                </Grid>
                <Grid container className="gridItem" >
                    <Grid item xs={6} md={1} lg={1}>1</Grid>

                </Grid>
                <Grid container className="gridItem" >
                    <Grid item xs={12} md={5} lg={2}><img alt='wash' src="../images/bike-sm.svg" width={190} height={190} ></img></Grid>
                    <Grid item xs={12} md={6} lg={3}>2</Grid>
                    <Grid item xs={4} md={8} lg={3}><img alt='wash' src="../images/fridgesmall.svg" width={190} height={190} ></img></Grid>
                    
                </Grid>
            </Container>
        </div >
    )
}

export default Home;