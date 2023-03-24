import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import backgroundImage from '../images/background.jpg';
import '../Component/grid/style.css';



function Home(props) {
    return (

        <div>
         <Container style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover'}}> 
                <Grid className="gridItem" >
                    <Grid item xs={12} sm={6} md={3}>1</Grid>
                    <Grid item xs={12} sm={6} md={3}>2</Grid>
                    <Grid item xs={12} sm={6} md={3}>3</Grid>
                    <Grid item xs={12} sm={6} md={3}>4</Grid>

                    <h1>Home Page</h1>
                </Grid>
                <Grid className="gridItem" >
                    <Grid item xs={12} sm={6} md={3}>1</Grid>
                    <Grid item xs={12} sm={6} md={3}>2</Grid>
                    <Grid item xs={12} sm={6} md={3}>3</Grid>
                    <Grid item xs={12} sm={6} md={3}>4</Grid>

                    <h1>Home Page</h1>
                </Grid>
                <Grid className="gridItem" >
                    <Grid item xs={12} sm={6} md={3}>1</Grid>
                    <Grid item xs={12} sm={6} md={3}>2</Grid>
                    <Grid item xs={12} sm={6} md={3}>3</Grid>
                    <Grid item xs={12} sm={6} md={3}>4</Grid>

                    <h1>Home Page</h1>
                </Grid>
            </Container>
        </div>
    )
}

export default Home;