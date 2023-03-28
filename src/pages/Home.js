import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo/index.js';
import Data from '../imageData.json';


function Home() {
    return (
        <div>
            <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Logo className="logo"></Logo>
                <Grid container className="gridItem" >
                    <Grid item className="imageData" xs={12} md={6} lg={3}> {
                        Data && Data.map(dataItem => {
                            return (
                                <div className="box" >
                                    <img src={dataItem.imageUrl} />
                                </div>
                            )
                        })
                    }
                    </Grid>

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