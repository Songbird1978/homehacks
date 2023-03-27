import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo/index.js';


function Home() {
    return (
        <div>
         <Container style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover'}}> 
            <Logo className="logo"></Logo>
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
                </Grid>
            </Container>
        </div>
    )
}

export default Home;