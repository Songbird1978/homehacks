import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGI.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo/index.js';
import Data from '../imageData.json';
import '../Home.css';


function Home() {
    return (
        <div>
            <Container style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Logo className="logo"></Logo>
                
                <Grid container item  className="imageData" > {
                    Data && Data.map(dataItem => {
                        return (
                            <Grid item xs={12} md={6} lg={3} className="imageData" >
                                <img src={dataItem.imageUrl} className="image" alt={dataItem.title}/>
                            </Grid>
                        )
                    })
                }
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