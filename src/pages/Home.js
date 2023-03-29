import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import backgroundImage from '../images/BGIcopyremoved.svg';
import '../Component/grid/style.css';
import Logo from '../Component/logo';
import '../Home.css';
import washingmachine from '../images/washing-machine-sm.svg';
import water from '../images/watertwo.svg';
import plug from '../images/plug-sm.svg';
import light from '../images/lights-sm.svg';
import computer from '../images/computer-sm.svg';
import radiator from '../images/radiator.svg';
import bike from '../images/bike-sm.svg';
import fridge from '../images/fridge-sm.svg';
import kettle from '../images/kettle-sm.svg';

function Home() {

    return (
        <div>
            
            <Container className="bgi" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Logo className="logo"></Logo>
               
                <Grid container className="gridContainer" spacing={6} >
                    
                    <Grid item xs={6} md={3} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={washingmachine} alt=""className="washingMachine"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={water} alt=""className="water"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={plug} alt=""className="plug"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                           
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={light} alt=""className="light"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                        <img src={radiator} alt=""className="radiator"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={computer} alt=""className="computer"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                            <div className="saveMoney">Save Money! Turn it off at the plug!</div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                       
                        <div className="dontDrive">ROUTES OUT OF TOWN {<br></br>} Save Money! Don't Drive!</div>
                        <button className="button" onClick="" >
                            <img src={bike} alt=""className="bike"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={washingmachine} alt=""className="washingMachine"></img>
                        </button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={fridge} alt=""className="fridge"></img>
                        </button>
                    </Grid>
                      <Grid item xs={12} md={6} lg={3} className="gridItem" >
                        <button className="button" onClick="" >
                            <img src={kettle} alt=""className="kettle"></img>
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default Home;